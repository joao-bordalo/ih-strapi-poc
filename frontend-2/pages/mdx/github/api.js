import Axios from "axios";
import { Octokit, App } from "octokit";

const ghAPI = (apiKey, project) => ({
  getFromGitHubAxios: async (path) => {
    const api_key = apiKey;
    const repoUrl = `https://api.github.com/repos/saltpay/${project.repo}/${path}`;
    return Axios.get(repoUrl, {
      headers: {
        Authorization: `token ${api_key}`,
      },
    });
  },

  getFromGitHubOctokitGeneric: async (path) => {
    const api_key = apiKey;
    const octokit = new Octokit({ auth: api_key });

    const repoUrl = `GET ${path}`;
    return octokit.request(repoUrl);
  },

  getFromGitHubOctokit: async (path) => {
    const api_key = apiKey;
    const octokit = new Octokit({ auth: api_key });

    const repoUrl = `GET /repos/saltpay/saltconnect-guide/${path}`;
    return octokit.request(repoUrl);
  },
});

export default ghAPI;
