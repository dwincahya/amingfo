import AnimeList from "./components/AnimeList";
import Search from "./components/Search/indes";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <>
      <h1>Paling Populer</h1>
      {anime.data.map((data) => {
        return <AnimeList title={data.title} images={data.images.webp.image_url} />;
      })}
    </>
  );
};

export default Home;
