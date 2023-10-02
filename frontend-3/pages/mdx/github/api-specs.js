import React from "react";
import Header from "../stuff/header";
import styles from "../stuff/styles";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";

const ApiSpecs = (props) => {
  // https://github.com/saltpay/partner-service-api/blob/main/guide/openapi/partner-service-api.yaml
  const specUrl =
    "https://raw.githubusercontent.com/saltpay/partner-service-api/main/guide/openapi/partner-service-api.yaml?token=GHSAT0AAAAAACG2VEFQIKBFEKQQJV6MXJMYZI263ZA";
  return (
    <>
      <style jsx>{styles}</style>

      <Header />
      <div className="guides-page-wrapper">
        {/* <SwaggerUI url="https://raw.githubusercontent.com/saltpay/public-apis/master/apis/public/pos-link/EPOSConnectAPI.json?token=GHSAT0AAAAAACGIZBUFAAJ4UP43EBAPT5DUZIW7FKA" /> */}
        <RedocStandalone specUrl={specUrl} />
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
