import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const MovieCard = styled.div`
  display: grid;
  gap: 10px;
  max-width: 200px;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  justify-content: space-between;
`;

export default function Movies() {
  const [data, setData] = useState([]);

  //useEffect ne değiştiği zaman render olayım anlamına geliyor [] kullandığımız yer bunu sağlıyor [] boş olması sayfanın ilk yüklenmesinde tetikleniyor yani ilk defa render oluyor.
  useEffect(() => {
    console.log("Render Oldu");
    fetch("https://api.sampleapis.com/movies/animation") //şu adresten veriyi çekiyoruz
      .then((res) => res.json()) //bize bir cevap geliyor gelen cevabı json olarak alıyoruz
      .then((data) => setData(data)); //gelen response artık bir data
  }, []);

  return (
    <Layout title="Filmler">
      <MovieList>
        {data.map((item) => (
          <MovieCard key={item.id}>
            <img width="200" src={item.posterURL} loading="lazy" />
            <b>{item.title}</b>
          </MovieCard>
        ))}
      </MovieList>
    </Layout>
  );
}
