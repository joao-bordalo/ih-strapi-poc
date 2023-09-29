import React, { useEffect, useState } from "react";
import styles from "../stuff/styles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import MyComponent from "../stuff/MyComponent";
import ghAPI from "./api";
import Header from "../stuff/header";

const components = { MyComponent };

const fixLinks = (markdown) => {
  return markdown.replaceAll("(../docs/", "(./").replaceAll("(docs/", "(./");
};

const fixImages = (markdown, assetsList) => {
  console.log(assetsList);
  const regexImages = /\.\.\/assets\/images\/([\s\S]*?)[\),\>]/gm;
  const matches = [...markdown.matchAll(regexImages)];

  return matches.reduce((currentMarkdown, match) => {
    const path = match[0].slice(0, -1);
    const name = match[1];
    const asset = assetsList.find((asset) => asset.name === name);
    return currentMarkdown.replaceAll(path, asset.download_url);
  }, markdown);
};

const cleanupMarkdown = (markdown) => {
  const regexComments = /<!--([\s\S]*?)-->/gm;
  const regexStyles = /style="([\s\S]*?)"/gm;

  return markdown
    .replaceAll('<div style="width:100px"></div>', "")
    .replaceAll("<br>", "<br />")
    .replaceAll(regexComments, "")
    .replaceAll(regexStyles, "");
};

const Github = ({ guide, guidesList, assetsList }) => {
  const [mdxModule, setMdxModule] = useState();

  useEffect(() => {
    (async () => {
      const rawContent = Buffer.from(guide.content, "base64").toString();
      const mdExample2 = cleanupMarkdown(rawContent);
      const mdExample3 = fixImages(mdExample2, assetsList);
      const mdExample = fixLinks(mdExample3);

      const content = await serialize(mdExample, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          development: true,
        },
        parseFrontmatter: false,
      });
      console.log("aaaaaa", content);
      setMdxModule(content);
    })();
  }, [guide]);

  return (
    <>
      <style jsx>{styles}</style>

      <Header href="/mdx/github" />
      <div className="guides-page-wrapper">
        <ul>
          {guidesList.tree.map((item) => (
            <li key={item.path}>
              <a href={`/mdx/github/${item.path}`}>{item.path}</a>
            </li>
          ))}
        </ul>
        <div className="documentation-page-wrapper">
          <div>
            {mdxModule && <MDXRemote {...mdxModule} components={components} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;

const SC = {
  repo: "saltconnect-guide",
  branch: "master",
};

const GMD = {
  repo: "global-merchant-database",
  branch: "main",
};

const APIGuides = {
  repo: "public-interface-guides-index",
  branch: "master",
};

const Payments = {
  repo: "public-interface-guides-payments",
  branch: "master",
};

const Merchants = {
  repo: "public-interface-guides-merchants",
  branch: "master",
};

const repo = APIGuides;

export async function getStaticPaths() {
  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);

  const { data: allFiles } = await ghClient.getFromGitHubOctokit(
    repo.repo,
    `contents/?ref=${repo.branch}`
  );

  const docs = allFiles.find((elem) => elem.name === "docs");
  const tree_sha = docs.sha;
  const { data: guidesList } = await ghClient.getFromGitHubAxios(
    `git/trees/${tree_sha}?recursive=true`
  );

  const paths = guidesList.tree.map((item) => ({
    params: { path: item.path },
  }));

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ params }) {
  const path = params.path;

  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);

  const { data: allFiles } = await ghClient.getFromGitHubOctokit(
    repo.repo,
    `contents/?ref=${repo.branch}`
  );

  let assetsList2 = null;
  try {
    const { data } = await ghClient.getFromGitHubOctokit(
      repo.repo,
      `contents/assets/images?ref=${repo.branch}`
    );
    assetsList2 = data;
  } catch (error) {
    console.error("ERROR ASSETS");
  }

  const docs = allFiles.find((elem) => elem.name === "docs");
  const tree_sha = docs.sha;
  const { data: guidesList } = await ghClient.getFromGitHubAxios(
    `git/trees/${tree_sha}?recursive=true`
  );

  // https://github.com/saltpay/global-merchant-database/tree/main/docs
  const { data: guide } = await ghClient.getFromGitHubAxios(
    `contents/docs/${path}`
  );

  return {
    props: {
      guide,
      guidesList,
      assetsList: assetsList2,
    },
    revalidate: 1,
  };
}
