import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        color: "#000",
        borderBottom: "1px solid",
        margin: 0,
      }}
    >
      <h2 style={{}}>POC: DOC CMS + API Spec</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link href="/mdx/github/">Documentation</Link>
        <Link href="/mdx/github/api-specs">API Spec</Link>
      </div>
    </div>
  );
};

export default Header;
