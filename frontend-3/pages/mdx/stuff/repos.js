import ghAPI from "./api";

const REPOS = {
  SC: {
    repo: "saltconnect-guide",
    branch: "master",
    id: "sc",
  },

  GMD: {
    repo: "global-merchant-database",
    branch: "main",
    id: "gmd",
  },

  APIGuides: {
    repo: "public-interface-guides-index",
    branch: "master",
    id: "api-guides",
  },

  Payments: {
    repo: "public-interface-guides-payments",
    branch: "master",
    id: "payments",
  },

  Merchants: {
    repo: "public-interface-guides-merchants",
    branch: "master",
    id: "merchants",
  },
};

const getRepos = async (repo) => {
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

  return guidesList;
};

export const getAllRepos = async () => {
  const guidesAPIGuides = await getRepos(REPOS.APIGuides);
  const guidesPayments = await getRepos(REPOS.Payments);
  const guidesMerchants = await getRepos(REPOS.Merchants);
  const repos = {
    [REPOS.APIGuides.id]: guidesAPIGuides,
    [REPOS.Payments.id]: guidesPayments,
    [REPOS.Merchants.id]: guidesMerchants,
  };

  return repos;
};

export const getRepoAssets = async (repoId) => {
  const repo = Object.values(REPOS).find((repo) => repo.id === repoId);

  if (!repo) {
    return [];
  }

  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);
  try {
    const { data } = await ghClient.getFromGitHubOctokit(
      repo.repo,
      `contents/assets/images?ref=${repo.branch}`
    );
    return data;
  } catch (error) {
    console.error("ERROR ASSETS");
    return [];
  }
};

export const getDocument = async (repoId, docPath) => {
  const repo = Object.values(REPOS).find((repo) => repo.id === repoId);

  console.log("oooooooo", repo, repoId, docPath);

  if (!repo) {
    return null;
  }

  const ghClient = ghAPI(process.env.GITHUB_API_KEY, repo);
  const { data: guide } = await ghClient.getFromGitHubAxios(
    `contents/docs/${docPath}`
  );

  return guide;
};
