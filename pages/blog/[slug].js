import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../components/Layout";
import { notFound } from "next/navigation";

export default ({ frontmatter, content }) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <Layout title={title}>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      {/* dangerouslySetInnerHTML string olarak görderiğimiz html dosyalarını render etmek için kullanırız */}
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Layout>
  );
};

// Sayfa için statik destekleri oluşturun. Eğer sunucu taraflı SSR şekilden çalışsaydık getServerSideProps şekilinde kullanacaktık. Static yaptığımız için getStaticProps kullanıyoruz.
export async function getServerSideProps({ params: { slug } }) {
  let path = `posts/${slug}.md`;
  if (fs.existsSync(path)) {
    // fs file için dosyaları okumak için kullandığımız bir kütüphane
    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8"); //Dosyayı okur
    const { data: frontmatter, content } = matter(fileName); //dosyası aldıktan sonra matter datayı parçalıyor.
    return {
      props: {
        frontmatter,
        content,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
