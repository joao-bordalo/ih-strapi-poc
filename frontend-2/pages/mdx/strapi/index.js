// https://www.npmjs.com/package/next-mdx-remote
// https://mdxjs.com/guides/mdx-on-demand/

import React, { useEffect, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";

import styles from "../stuff/styles";
import { fetchAPI } from "../stuff/api";
import Sidemenu from "../stuff/sidemenu";
import MyComponent from "../stuff/MyComponent";
import {
  stoplightExample1,
  stoplightExample2,
  stoplightExample3,
  stoplightExample4,
  stoplightExample5,
} from "../stuff/markdownExamples";

const mdExample = stoplightExample5;
const components = { MyComponent };

const imagesPath = (markdown) => {
  return markdown.replaceAll("(/uploads/", "(http://localhost:1337/uploads/");
};

const Strapi = ({ guides, sectionHeaders, sectionHeadersIH }) => {
  console.log(guides[0]);
  const [currentGuide, setCurrentGuide] = useState(guides[0]);
  const [mdxModule, setMdxModule] = useState();

  const sectionMenus = [...sectionHeaders, ...sectionHeadersIH];

  const handleClick = (sectionSlug, guideSlug) => {
    const section = sectionMenus.find(
      (section) => section.attributes.slug === sectionSlug
    );

    const guide = section.attributes.integration_guides.data.find(
      (guide) => guide.attributes.slug === guideSlug
    );
    setCurrentGuide(guide);
  };

  useEffect(() => {
    (async () => {
      const content = await serialize(
        imagesPath(currentGuide.attributes.content /* mdExample */),
        {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
          parseFrontmatter: false,
        }
      );
      setMdxModule(content);
    })();
  }, [currentGuide]);

  return (
    <>
      <style jsx>{styles}</style>

      <div className="guides-page-wrapper">
        <Sidemenu
          guides={guides}
          sectionHeaders={sectionMenus}
          handleClick={handleClick}
        />
        <div className="documentation-page-wrapper">
          <div>
            {mdxModule && <MDXRemote {...mdxModule} components={components} />}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const isAuthNavigation = true;
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
  );

  return {
    props: {
      guides: guidesRes.data,
      sectionHeaders: sectionHeadersRes.data,
      sectionHeadersIH: sectionHeadersResIH.data,
    },
    revalidate: 1,
  };
}

export default Strapi;
