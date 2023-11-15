import styled from "styled-components";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

const blogContents = [
  {
    href: "gunluk-1",
    title: "Günlük yazı 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    href: "gunluk-2",
    title: "Günlük yazı 2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
];

const H2 = styled.h2`
  margin: 0;
`;

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
`;

const BlogWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 10px;
`;

export default () => (
  <Layout title="Blog">
    There are many variations of passages of Lorem Ipsum available, but the
    majority have suffered alteration in some form, by injected humour, or
    randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything
    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
    the Internet tend to repeat predefined chunks as necessary, making this the
    first true generator on the Internet. It uses a dictionary of over 200 Latin
    words, combined with a handful of model sentence structures, to generate
    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
    always free from repetition, injected humour, or non-characteristic words
    etc.
    <BlogWrapper>
      {blogContents.map(({ title, content, href }, index) => (
        <BlogDiv key={index}>
          <H2>{title}</H2>
          <p>{content}</p>
          <Button href={`blog/${href}`}>Devamı</Button>
        </BlogDiv>
      ))}
    </BlogWrapper>
  </Layout>
);
