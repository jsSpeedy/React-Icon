import Link from "next/link";
import Button from "./Button";
import styled from "styled-components";

const HeaderDiv = styled.div`
  padding: 30px;
  display: flex;
  gap: 20px;
  background-color: #000;
`;
export default () => (
  <HeaderDiv>
    <Button href="/" passHref>
      Anasayfa
    </Button>

    <Button href="/about" passHref>
      Hakkımda
    </Button>

    <Button href="/contact" passHref>
      İletişim
    </Button>
  </HeaderDiv>
);
