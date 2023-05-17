"use server";
import prisma from "@/lib/prisma";
import { users } from "@prisma/client";

export async function addUser({ name, email }: users) {
  try {
    const response = await prisma.users.create({
      data: {
        name,
        email,
        image: "",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return "Error";
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await prisma.users.delete({
      where: {
        id,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return "Error";
  }
}
