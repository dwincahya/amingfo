import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeRespons } from "@/app/service/api-service";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeRespons("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
