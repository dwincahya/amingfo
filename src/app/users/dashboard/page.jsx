import { authUserSession } from "@/service/auth-service";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex flex-col justify-center mt-8 items-center">
      <h5 className="text-2xl font-vold">Hai, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <div className="py-8 flex gap-4 flex-wrap">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
