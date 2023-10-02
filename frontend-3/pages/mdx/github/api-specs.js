import React from "react";
import Header from "../stuff/header";
import styles from "../stuff/styles";
import ghAPI from "./api";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";

// const Github = ({ guidesList, guidesLists }) => {
const ApiSpecs = (props) => {
  // const { guidesLists } = props;
  // console.log("aaaaa", guidesLists);
  // console.log("aaaaa2",         Object.entries(guidesLists).map([key, guidesList]=>)

  return (
    <>
      <style jsx>{styles}</style>

      <Header />
      <div className="guides-page-wrapper">
        {/* <SwaggerUI url="https://raw.githubusercontent.com/saltpay/public-apis/master/apis/public/pos-link/EPOSConnectAPI.json?token=GHSAT0AAAAAACGIZBUFAAJ4UP43EBAPT5DUZIW7FKA" /> */}
        <RedocStandalone specUrl="https://raw.githubusercontent.com/saltpay/public-apis/master/apis/public/pos-link/EPOSConnectAPI.json?token=GHSAT0AAAAAACGIZBUFAAJ4UP43EBAPT5DUZIW7FKA" />
      </div>
    </>
  );
};

export default ApiSpecs;

export async function getStaticProps() {
  return {
    props: {
      // guidesLists: a,
    },
    revalidate: 1,
  };
}
