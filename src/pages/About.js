import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Hi, I'm Amy. These are my go to meals</h2>
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
      </main>
    </Layout>
  );
};

export default About;
