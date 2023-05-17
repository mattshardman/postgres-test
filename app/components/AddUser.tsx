"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import type { users } from "@prisma/client";

import { addUser } from "./userActions.server";

export function AddUser() {
  const router = useRouter();
  const { register, reset, handleSubmit } = useForm<users>();

  const onSubmit = async (user: users) => {
    await addUser(user);
    reset();
    router.refresh();
  };

  return (
    <form
      className="flex gap-6"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <input
        type="text"
        placeholder="Name"
        className="text-black px-6 py-2"
        {...register("name")}
      />
      <input
        type="email"
        placeholder="Email"
        className="text-black px-6 py-2"
        {...register("email")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
