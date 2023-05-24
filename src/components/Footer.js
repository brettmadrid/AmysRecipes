import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Amy's Recipes</span> Built by{" "}
        <span>Brett Madrid </span>with <a href="https://gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
