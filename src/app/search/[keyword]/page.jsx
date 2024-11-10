import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodekeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodekeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodekeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
