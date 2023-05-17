import prisma from "@/lib/prisma";
import { AddUser } from "./components/AddUser";
import { DeleteUser } from "./components/DeleteUser";

export default async function Home() {
  const users = await prisma.users.findMany({
    orderBy: {
      name: "asc",
    }
  });

  return (
    <div className="p-6">
      <div className="py-6">
        <h1 className="font-bold pb-4">Users</h1>
        <table className="p-4 border border-white">
          <thead>
            <tr className="border-b border-white">
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-1">{user.name}</td>
                <td className="px-4 py-1">{user.email}</td>
                <td><DeleteUser  id={user.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUser />
    </div>
  );
}
