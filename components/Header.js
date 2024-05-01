import Button from "./Button";
import styled from "styled-components";
import Icon from "./Icon";

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
        <Icon icon="home" color="white" />
        <span>Anasayfa</span>
      </Button>

      <Button href="/about" passHref>
        <Icon icon="user" color="white" />
        <span>Hakkımda</span>
      </Button>

      <Button href="/movies" passHref>
        Filmler
      </Button>

      <Button href="/blog" passHref>
        Blog
      </Button>

      <Button href="/contact" passHref>
        İletişim
      </Button>

      <Button href="/hooks" passHref>
        Hooks
      </Button>
    </HeaderInner>
  </HeaderDiv>
);
