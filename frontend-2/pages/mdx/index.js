import Link from "next/link";
import React from "react";

const linkButtonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "100px",
  fontSize: "24px",
  border: "2px solid",
  borderRadius: "5px",
};

const Github = () => {
  return (
    <div
      className="guides-page-wrapper"
      style={{
        width: "1000px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "0 auto",
      }}
    >
      <Link href="/mdx/github">
        <div style={linkButtonStyle}>GitHub</div>
      </Link>
      {/* <Link href="/mdx/strapi">
        <div style={linkButtonStyle}>Strapi</div>
      </Link> */}
      <Link href="/mdx/preview">
        <div style={linkButtonStyle}>Editor preview</div>
      </Link>
    </div>
  );
};

export default Github;
