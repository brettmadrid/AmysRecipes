import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const site = useStaticQuery(query);
  const metaTitle = site.site.siteMetadata.title;
  const desc = description || site.site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${metaTitle}`}
      meta={[{ name: `description`, content: { desc } }]}
    ></Helmet>
  );
};

export default SEO;
