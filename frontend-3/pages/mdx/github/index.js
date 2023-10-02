import React from "react";
import SideMenu from "../../../src/components/SideMenu";
import { getAllRepos } from "../stuff/repos";
import styles from "../stuff/styles";
import Header from "../stuff/header";

const Github = ({ guidesLists }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <Header />
      <SideMenu guidesLists={guidesLists} />
    </>
  );
};

export default Github;

export async function getStaticProps() {
  const repos = await getAllRepos();

  // console.log("!!!!!!!!!", repos);

  return {
    props: {
      guidesLists: repos,
    },
    revalidate: 1,
  };
}
