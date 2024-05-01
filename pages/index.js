import Layout from "../components/Layout";

export default ({ locale, t }) => (
  <Layout title={`${t.Index.title} ${locale}`}>{t.Index.description}</Layout>
);

//çevirilerin bağlantısını yapıyoruz. locale göre alıyoruz.
export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale,
      t: {
        ...require(`../lang/index/${locale}.json`),
      },
    },
  };
}
