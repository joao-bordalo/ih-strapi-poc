import React, { useState } from "react"
import { fetchAPI } from "../lib/api"
import ReactMarkdown from "react-markdown"
import Sidemenu from "../components/sidemenu"

const Guides = ({ guides, sectionHeaders, sectionHeadersIH }) => {
  const [currentGuide, setCurrentGuide] = useState(guides[0])

  const handleClick = (sectionSlug, guideSlug) => {
    const section = sectionMenus.find(
      (section) => section.attributes.slug === sectionSlug
    )

    const guide = section.attributes.integration_guides.data.find(
      (guide) => guide.attributes.slug === guideSlug
    )
    setCurrentGuide(guide)
  }

  const sectionMenus = [...sectionHeaders, ...sectionHeadersIH]

  return (
    <>
      <div className="guides-page-wrapper">
        <Sidemenu
          guides={guides}
          sectionHeaders={sectionMenus}
          handleClick={handleClick}
        />
        <div className="documentation-page-wrapper">
          <div>
            <p>&gt; {currentGuide.attributes.title}</p>
            <ReactMarkdown
              source={currentGuide.attributes.content}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const isAuthNavigation = false
  const [guidesRes, sectionHeadersRes, sectionHeadersResIH] = await Promise.all(
    [
      fetchAPI("/integration-guides", {
        populate: "*",
        filters: {
          // Category: { $eq: "Terminal" },
          // Category: { $eq: "Tax" },
          // Category: { $in: ["Terminal", "Tax"] },
        },
      }),
      fetchAPI("/section-headers", { populate: "*" }),
      fetchAPI(
        "/section-header-i-hubs",
        { populate: "*" },
        undefined,
        isAuthNavigation
      ),
    ]
  )

  return {
    props: {
      guides: guidesRes.data,
      sectionHeaders: sectionHeadersRes.data,
      sectionHeadersIH: sectionHeadersResIH.data,
    },
    revalidate: 1,
  }
}

export default Guides
