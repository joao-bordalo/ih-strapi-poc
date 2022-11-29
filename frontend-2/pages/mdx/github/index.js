import React from "react";
import styles from "../stuff/styles";
import ghAPI from "./api";

const Github = ({ guidesList }) => {
  return (
    <>
      <style jsx>{styles}</style>

      <div className="guides-page-wrapper">
        <ul>
          {guidesList.tree.map((item) => (
            <li key={item.path}>
              <a href={`/mdx/github/${item.path}`}>{item.path}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Github;

export async function getStaticProps() {
  const SC = {
    repo: "saltconnect-guide",
    branch: "master",
  };

  const GMD = {
    repo: "global-merchant-database",
    branch: "main",
  };

  const repo = SC;

  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);

  const { data: allFiles } = await ghClient.getFromGitHubOctokit(
    `contents/?ref=${repo.branch}`
  );

  const docs = allFiles.find((elem) => elem.name === "docs");
  const tree_sha = docs.sha;
  const { data: guidesList } = await ghClient.getFromGitHubAxios(
    `git/trees/${tree_sha}?recursive=true`
  );

  return {
    props: {
      guidesList,
    },
    revalidate: 1,
  };
}
