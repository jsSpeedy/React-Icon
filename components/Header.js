import Button from "./Button";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #000;
`;

const HeaderInner = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 30px;
  display: flex;
  gap: 20px;
`;

export default () => (
  <HeaderDiv>
    <HeaderInner>
      <Button href="/" passHref>
        Anasayfa
      </Button>

      <Button href="/about" passHref>
        Hakkımda
      </Button>

      <Button href="/blog" passHref>
        Blog
      </Button>
    </HeaderInner>
  </HeaderDiv>
);
