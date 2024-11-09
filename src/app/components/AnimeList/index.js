import Image from "next/image";

const AnimeList = ({title, images}) => {
  return (
      <div className="bg-blue-700">
        <Image src={images} alt=".../" width={600} height={400}/>
        <h3>J{title}</h3>
      </div>
  );
};

export default AnimeList;
