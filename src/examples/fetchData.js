import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: { info },
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>{info.author}</h1>
    </div>
  );
};

export default FetchData;
