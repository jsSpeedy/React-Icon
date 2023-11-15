import Header from "./Header";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 20px;
`;

const Footer = styled.footer`
  padding: 20px;
  background: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px;
`;

export default ({ children, title }) => (
  <div>
    <Header />
    <H1>{title}</H1>
    <Content>{children}</Content>
    <Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by vercel
      </a>
    </Footer>
  </div>
);
