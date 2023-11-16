import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../components/Layout";

export default ({ frontmatter, content }) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;
  //[slug].js dinamik anlamına geliyor. useRoutger ile içerisindeki iç yapıları sayfa olarak tanımladık.
  // const router = useRouter();
  //const { slug } = router.query;

  // let foundItem = data.find((dataItem) => dataItem.slug === slug); // burada bizim slugumuz yani adresimiz data içerisinde ki slug ile eşleşiyor mu kontrol ediyoruz. eşleşiyor ise içerisindeki bilgileri alıyoruz.

  // if (!foundItem) {
  //   return <Error statusCode={404} />;
  // }

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

// Her gönderi için yollar oluşturma. getStaticPaths ile slug kaç tane değer alır onu belirleriz.
export async function getStaticPaths() {
  // posts dizinimizdeki tüm dosyaların listesini alın
  const files = fs.readdirSync("posts"); //posts klasörünü oku demiş oluyoruz. Bütün dosyaları almış olduk bize array olarak gelmiş oldu

  // Her biri için bir yol oluşturun. arrayları map ile dönerek her bir dosya adı bize fileName olarak gelir bu fileNameleri alıp sonundaki md leri kaldırarak dosya isimlerini algılayabiliyoruz.
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // yolların listesini döndür
  return {
    paths,
    fallback: false,
  };
}

// Sayfa için statik destekleri oluşturun. Eğer sunucu taraflı SSR şekilden çalışsaydık getServerSideProps şekilinde kullanacaktık. Static yaptığımız için getStaticProps kullanıyoruz.
export async function getStaticProps({ params: { slug } }) {
  // fs file için dosyaları okumak için kullandığımız bir kütüphane
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8"); //Dosyayı okur
  const { data: frontmatter, content } = matter(fileName); //dosyası aldıktan sonra matter datayı parçalıyor.
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
