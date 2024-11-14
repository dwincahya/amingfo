import { authUserSession } from "@/service/auth-service";
import Link from "next/link";
import React from "react";

const UserButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "SIGN OUT" : "SIGN IN"
  const actionURL = user ? "/api/auth/signout": "/api/auth/signin"

  return (
    <div className="flex justify-between gap-2 font-semibold">
      {
        user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
      }
      <Link href={actionURL} className="bg-color-dark text-color-primary py-1 px-12">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserButton;
