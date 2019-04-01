import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Quote = styled.blockquote`
  text-align: center;
  font-size: 20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  position: relative;

  p,
  a {
    margin: 20px 0;
  }

  :after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='256' y1='437' x2='256' y2='79' gradientTransform='matrix(1 0 0 -1 0 514)'%3E%3Cstop offset='0' stop-color='%232af598'/%3E%3Cstop offset='1' stop-color='%23009efd'/%3E%3C/linearGradient%3E%3Cpath d='M177.126 435H89.543l7.216-25.455C103.812 384.665 115 339.712 115 325c0-3.591-.107-6.216-.251-8.119-30.471-1.311-58.917-13.961-80.375-35.812C12.208 258.497 0 228.641 0 197 0 130.832 53.832 77 120 77s120 53.832 120 120c0 135.148-54.68 224.797-57.007 228.547L177.126 435zm-35.067-40h12.13C167.164 369.834 200 296.32 200 197c0-44.112-35.888-80-80-80s-80 35.888-80 80c0 43.262 35.176 79.141 78.413 79.979l.878.022c17.538.099 26.09 9.106 30.178 16.669C154.06 302.162 155 312.336 155 325c0 15.959-7.194 47.416-12.941 70zm-22.123-77.958zM449.126 435h-87.583l7.216-25.455C375.812 384.665 387 339.712 387 325c0-3.591-.107-6.216-.251-8.119-30.471-1.311-58.917-13.961-80.375-35.812C284.208 258.497 272 228.641 272 197c0-66.168 53.832-120 120-120s120 53.832 120 120c0 135.148-54.68 224.797-57.007 228.547L449.126 435zm-35.067-40h12.13C439.164 369.834 472 296.32 472 197c0-44.112-35.888-80-80-80s-80 35.888-80 80c0 43.262 35.176 79.141 78.413 79.979l.878.022c17.538.099 26.09 9.106 30.178 16.669C426.06 302.162 427 312.336 427 325c0 15.959-7.194 47.416-12.941 70zm-22.123-77.958z' fill='url(%23a)'/%3E%3C/svg%3E");
    position: absolute;
    left: 50%;
    bottom: calc(100% - 20px);
    background-color: #fff;
    height: 55px;
    width: 55px;
    transform: translateX(-50%);
  }
`;

const Button = styled.button`
  background: none;
  border: 2px solid;
  color: #ef6eae;
  transition: 0.25s;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  margin: auto;
  display: block;
  margin-top: 30px;

  :hover,
  :focus,
  :active {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #ef8f6e;
    }
  }
`;

const Link = styled.a`
  color: #ef6eae;
  text-decoration: none;
`;

export default () => {
  const [idea, setIdea] = useState(null);

  const getIdea = async () => {
    const req = await fetch("/api/random");
    const json = await req.json();

    return setIdea(json);
  };

  useEffect(() => {
    getIdea();
  }, []);

  return (
    <>
      {idea && (
        <Quote>
          <p>{idea.idea}</p>
          by:{" "}
          <Link target="_blank" href={`https://twitter.com/${idea.author}`}>
            @{idea.author}
          </Link>
        </Quote>
      )}
      <Button onClick={getIdea}>New Idea</Button>
    </>
  );
};
