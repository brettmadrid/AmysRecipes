import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  console.log(recipes);
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm Amy. These are my go to meals</h2>
            <p>
              I love cooking, but let's face it, coming up with meal ideas every
              week can be a drag. So my partner created this site for me to
              organize my meals and make it easier to meal plan.
            </p>
            <p>
              If you have any other delicious fresh food ideas please do not
              hesitate to send me an email.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in a bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        contentful_id
        cookTime
        id
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
