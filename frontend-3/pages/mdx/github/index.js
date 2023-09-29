import React from "react";
import Header from "../stuff/header";
import styles from "../stuff/styles";
import ghAPI from "./api";

// const Github = ({ guidesList, guidesLists }) => {
const Github = (props) => {
  const { guidesLists } = props;
  console.log("aaaaa", guidesLists);
  // console.log("aaaaa2",         Object.entries(guidesLists).map([key, guidesList]=>)

  return (
    <>
      <style jsx>{styles}</style>

      <Header />
      <div className="guides-page-wrapper">
        {Object.entries(guidesLists).map(([key, guidesList]) => (
          <div>
            Menu: {key}
            <ul>
              {guidesList.tree.map((item) => (
                <li key={item.path}>
                  <a href={`/mdx/github/${item.path}`}>{item.path}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Github;

const getRepos = async (repo) => {
  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);

  const { data: allFiles } = await ghClient.getFromGitHubOctokit(
    repo.repo,
    `contents/?ref=${repo.branch}`
  );

  const docs = allFiles.find((elem) => elem.name === "docs");
  // console.log("!!!!!!!!!", docs);

  const tree_sha = docs.sha;

  const { data: guidesList } = await ghClient.getFromGitHubAxios(
    `git/trees/${tree_sha}?recursive=true`
  );

  return guidesList;
};

export async function getStaticProps() {
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

  const guidesAPIGuides = await getRepos(APIGuides);
  const guidesPayments = await getRepos(Payments);
  const guidesMerchants = await getRepos(Merchants);
  const a = {
    APIGuides: guidesAPIGuides,
    Payments: guidesPayments,
    Merchants: guidesMerchants,
  };

  console.log("!!!!!!!!!", a);

  return {
    props: {
      // guidesList: a[0],
      guidesLists: a,
    },
    revalidate: 1,
  };
}
