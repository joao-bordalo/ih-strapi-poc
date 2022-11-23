import Link from "next/link"
import React from "react"
import ReactMarkdown from "react-markdown"
import { fetchAPI } from "../../lib/api"

const Guides = ({ guides }) => {
  const guide = guides[0]
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          margin: "10px 50px",
        }}
      >
        <Link href="/guides/">&lt; Go back</Link>
      </div>
      <div>
        <h1>{guide.attributes.title}</h1>
        <ReactMarkdown source={guide.attributes.content} escapeHtml={false} />
        <p>{guide.attributes.content}</p>
      </div>
    </div>
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

export async function getStaticProps({ params }) {
  const guideRes = await fetchAPI("/integration-guides", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })

  return {
    props: {
      guides: guideRes.data,
    },
    revalidate: 1,
  }
}

export default Guides
