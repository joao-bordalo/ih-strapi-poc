import React from "react";
import Link from "next/link";

const Sidemenu = ({ sectionHeaders, handleClick }) => {
  //   console.log("---->", sectionHeaders)

  return (
    <div className="side-menu-wrapper">
      {sectionHeaders.map((sectionHeader, i) => {
        return (
          <div key={i}>
            <p className="sidemenu-section-header">
              {sectionHeader.attributes.title}
            </p>

            {sectionHeader.attributes.integration_guides.data.map(
              (guide, k) => {
                return (
                  <div key={guide.attributes.slug}>
                    <Link href={`/mdx/strapi/${guide.attributes.slug}`}>
                      <span
                        onClick={() =>
                          handleClick(
                            sectionHeader.attributes.slug,
                            guide.attributes.slug
                          )
                        }
                        className="sidemenu-divider"
                        style={{
                          display: "inline",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        {guide.attributes.title}
                      </span>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidemenu;
