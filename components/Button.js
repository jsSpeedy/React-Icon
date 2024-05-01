import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
`;

export default ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
