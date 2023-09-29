import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path,
  urlParamsObject = {},
  options = {},
  isAuthNavigation = false
) {
  const token =
    "cc198e92bd67a622715a2eafd4dacb65cd6a1af6e206a6b4f75aef9c77a6ad9fdc1d4bedb7e77178e069c9e81227203832e9204649967e0e31309a43413d008227ae8d6cd72f465734ca1d52b5a6efa8e552e26eb8b1bcd115dfa209bf3b1cefdaf41608fff3dfd888644c6b4f873e5778ac6956be667ed2f2cf1b0b6e6f0e5b";

  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: isAuthNavigation ? `Bearer ${token}` : "",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    // throw new Error(`An error occured please try again`)
    return Promise.resolve({ data: [] });
  }
  const data = await response.json();
  return data;
}
