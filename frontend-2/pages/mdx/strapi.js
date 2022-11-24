import React, { useState } from "react";

import styles from "./stuff/styles";
import { fetchAPI } from "./stuff/api";
import Sidemenu from "./stuff/sidemenu";

const Guides = ({ guides, sectionHeaders, sectionHeadersIH }) => {
  const [currentGuide, setCurrentGuide] = useState(guides[3]);

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
          <div>{currentGuide.attributes.content}</div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Use this to toggle the private content
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

export default Guides;
