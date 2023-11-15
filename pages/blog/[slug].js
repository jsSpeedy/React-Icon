import { useRouter } from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";

const data = [
  {
    slug: "gunluk-1",
    title: "Günlük 1",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    slug: "gunluk-2",
    title: "Günlük 2",
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
  },
];

export default ({}) => {
  //[slug].js dinamik anlamına geliyor. useRoutger ile içerisindeki iç yapıları sayfa olarak tanımladık.
  const router = useRouter();
  const { slug } = router.query;

  let foundItem = data.find((dataItem) => dataItem.slug === slug); // burada bizim slugumuz yani adresimiz data içerisinde ki slug ile eşleşiyor mu kontrol ediyoruz. eşleşiyor ise içerisindeki bilgileri alıyoruz.

  console.log(foundItem);

  if (!foundItem) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={foundItem?.title}>
      <h1>{slug}</h1>
      <p>{foundItem?.text}</p>
    </Layout>
  );
};
