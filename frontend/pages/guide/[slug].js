import React from 'react';
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api"


const Guides = ( guides ) => {
    return (
        <>
        <h1>
            {/* {guides.attributes.title} */}
        </h1>
        <ReactMarkdown
            source={guides.attributes.content}
            escapeHtml={false}
          />
        {/* <p>
          {guides.attributes.content}
        </p> */}
        </>
    )
}

export async function getStaticPaths() {
  const guidesRes = await fetchAPI("/integration-guides", { fields: ["slug"] })

  return {
    paths: guidesRes.data.map((guide) => ({
      params: {
        slug: guide.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps() {
    const [guideRes] = await Promise.all([
      fetchAPI("/integration-guides", { populate: "*" }),
    ])
  
    return {
      props: {
        guides: guideRes.data,
      },
      revalidate: 1,
    }
  }

export default Guides;