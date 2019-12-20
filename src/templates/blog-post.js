import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import { blog } from "../constants/cardData";
import theme from "../styles/theme";
import * as ui from "./ui";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog-Post" />
        <Card h1={blog.h1} textContent={blog.textContent} />
        <ui.PageContent>
          <ui.GoBackSpan>
            <Link to="/blog">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>

          <h4>{frontmatter.date}</h4>
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>Greetings Marco</p>
          <ui.GoBackSpan>
            <Link to="/blog">Go back to other Blog Posts</Link>
          </ui.GoBackSpan>
        </ui.PageContent>
      </Layout>
    </ThemeProvider>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
