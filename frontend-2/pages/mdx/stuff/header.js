import Link from "next/link";

const Header = ({ href }) => {
  return (
    <Link
      href={href || "/mdx"}
      style={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        color: "#000",
        borderBottom: "1px solid",
      }}
    >
      &lt;- Go Back
    </Link>
  );
};

export default Header;
