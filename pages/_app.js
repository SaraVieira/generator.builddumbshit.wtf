import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
@import url('https://fonts.googleapis.com/css?family=Droid+Serif');
    body {
        margin: 0;
        color: white;
        padding: 0;
        background: #485563;
        background: linear-gradient(to right, #485563, #29323c);
        font-family: 'Droid Serif', serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
    }

    html, body {height: 100%}
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <Normalize />
        <Global />
      </Container>
    );
  }
}

export default MyApp;
