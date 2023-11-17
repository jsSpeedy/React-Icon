import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/Layout";

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

export default ({ posts }) => (
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
      {posts.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, author, category, date, bannerImage, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article key={title}>
            <Link href={`/blog/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })}
    </BlogWrapper>
  </Layout>
);

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
