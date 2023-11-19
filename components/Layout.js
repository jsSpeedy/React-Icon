import Header from "./Header";
import styled from "styled-components";

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ContentInner = styled.div`
  padding: 20px;
`;

const H1 = styled.h1`
  padding: 20px;
`;

const Footer = styled.footer`
  background: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterInner = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export default ({ children, title }) => (
  <div>
    <Header />
    <Content>
      <H1>{title}</H1>
      <ContentInner>{children}</ContentInner>
    </Content>
    <Footer>
      <FooterInner>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by vercel - Sun Nov 19 2023 14:32:22 GMT+0300 (GMT+03:00)
        </a>
      </FooterInner>
    </Footer>
  </div>
);
