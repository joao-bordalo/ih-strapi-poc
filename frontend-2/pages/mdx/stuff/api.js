import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}, isAuthNavigation = false) {
  const token =
    "424b2a7aa2789f777c9b51e2c2d5e1baa18fc494fce472c8881c82a4d9ffe5fc16871ee78937367d957cb63f5eb0b5835cf1b0995a16cc6487224dc521683d38f4b813dd3a0afae78083adc411568f8be4be35173f464e0e501a77f2ca028bfeacdd3ac9d0eb32f4c2b3b5846f98bff6680c4578f4932566908f6a8271fd5710";

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
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;

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
