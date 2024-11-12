import { getAnimeRespons } from "@/app/service/api-service";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeRespons(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 overflow-x-auto px-4 flex gap-4 text-color-primary">
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Musim</h3>
          <p>{anime.data.season}</p>
        </div>
        <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
          <h3>Favorit</h3>
          <p>{anime.data.favorites}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
      </div>
    </>
  );
};

export default Page;
