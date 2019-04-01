import React from "react";
import App, { Container } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import Link from "next/link";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
@import url('https://fonts.googleapis.com/css?family=Droid+Serif');
    body {
        background-image: url('https://builddumbshit.wtf/static/bg-01a12d1cd0ce4af9811a2adc8a52ee6a.png');
        background-size: cover;
        margin: 0;
        color: white;
        padding: 0;
        font-family: 'Droid Serif', serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
    }

    html, body {height: 100%}
`;

const Section = styled.section`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: #fff;
  width: 60%;
  margin: 100px auto;
  border-radius: 4px;
  padding: 50px;
  max-width: 700px;
`;

const Main = styled.main`
  color: #303044;
`;

const Footer = styled.footer`
  width: 60%;
  margin: auto;
  font-size: 16px;
  margin-top: 60px;

  a {
    color: white;
  }

  ul {
    list-style: none;
    display: flex;

    li:not(:last-child) {
      margin-right: 1.2rem;
    }
  }
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
        <Main>
          <Section>
            <Component {...pageProps} />
          </Section>
        </Main>
        <Normalize />
        <Global />
        <Footer>
          <ul>
            <li>
              Made by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/NikkitaFTW"
              >
                @NikkitaFTW
              </a>
            </li>
            <li>
              <Link href="/api">
                <a>API</a>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.buymeacoffee.com/SaraVieira"
              >
                Buy me coffee
              </a>
            </li>
          </ul>
        </Footer>
      </Container>
    );
  }
}

export default MyApp;
