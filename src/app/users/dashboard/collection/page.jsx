import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My COllection"}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
