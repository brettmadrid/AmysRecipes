import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs and powder"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>amy's recipes</h1>
              <h4>Favorite recipes I feed my family</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
