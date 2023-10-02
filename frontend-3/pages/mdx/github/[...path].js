import React, { useEffect, useState } from "react";
import styles from "../stuff/styles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import MyComponent from "../stuff/MyComponent";
import ghAPI from "../stuff/api";
import Header from "../stuff/header";
import SideMenu from "../../../src/components/SideMenu";
import { getRepos } from ".";
import { getAllRepos, getDocument, getRepoAssets } from "../stuff/repos";

const components = { MyComponent };

const fixLinks = (markdown) => {
  return markdown.replaceAll("(../docs/", "(./").replaceAll("(docs/", "(./");
};

const fixImages = (markdown, assetsList) => {
  // console.log(assetsList);
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

const Github = ({ guide, assetsList, guidesLists }) => {
  const [mdxModule, setMdxModule] = useState();

  useEffect(() => {
    (async () => {
      console.log("cccccccccc", guide);
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
      // console.log("aaaaaa", content);
      setMdxModule(content);
    })();
  }, [guide]);

  return (
    <>
      <style jsx>{styles}</style>

      <Header />

      <div className="guides-page-wrapper">
        <SideMenu guidesLists={guidesLists} />

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

// export async function getStaticProps({ params }) {
export async function getServerSideProps({ params }) {
  const pathParams = params.path;
  const repoId = pathParams[0];
  const docPath = pathParams.slice(1).join("/");

  console.log("PPPPPP", repoId, docPath);

  // const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);
  // GET Assets
  const assetsList2 = await getRepoAssets(repoId);

  // GET Document
  const guide = await getDocument(repoId, docPath);

  // GET Repos
  const repos = await getAllRepos();
  // console.log("!!!!!!!!!", repos);

  return {
    props: {
      guide,
      assetsList: assetsList2,
      guidesLists: repos,
    },
  };
}
