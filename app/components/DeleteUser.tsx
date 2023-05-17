"use client";
import { useRouter } from "next/navigation";

import { deleteUser } from "./userActions.server";

type Props = {
  id: number;
};

export function DeleteUser({ id }: Props) {
  const router = useRouter();
  const onClick = async () => {
    await deleteUser(id);
    router.refresh();
  };

  return (
    <button type="button" className="bg-red-500" onClick={onClick}>
      Delete
    </button>
  );
}
