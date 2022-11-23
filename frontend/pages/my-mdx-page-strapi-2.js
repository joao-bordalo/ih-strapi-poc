import React, { Fragment, useState } from "react"
// import { MDXRemote } from "next-mdx-remote"
import ReactMarkdown from "react-markdown"

import { fetchAPI } from "../lib/api"
import Sidemenu from "../components/sidemenu"
// import { serialize } from "next-mdx-remote/serialize"
import { compile, run } from "@mdx-js/mdx"

const Guides = ({ guides, sectionHeaders, sectionHeadersIH, code }) => {
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

  const [mdxModule, setMdxModule] = useState()
  const Content = mdxModule ? mdxModule.default : Fragment

  /* useEffect(() => {
    ;(async () => {
      setMdxModule(await run(code, runtime))
    })()
  }, [code]) */

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
            {/* <ReactMarkdown
              source={currentGuide.attributes.content}
              escapeHtml={false}
            /> */}
            {/* <MDXRemote source={currentGuide.attributes.content} /> */}
            <Content />
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

  // const code = String(
  //   await compile("# hi", { outputFormat: "function-body" /* …otherOptions */ })
  // )

  return {
    props: {
      // code,
      guides: guidesRes.data,
      sectionHeaders: sectionHeadersRes.data,
      sectionHeadersIH: sectionHeadersResIH.data,
    },
    revalidate: 1,
  }
}

export default Guides
