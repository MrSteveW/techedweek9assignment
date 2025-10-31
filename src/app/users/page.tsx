import { db } from "@/utils/connect";
import Link from "next/link";
import Image from "next/image";

export default async function AllUsersPage() {
  const users = (await db.query(`SELECT * FROM users`)).rows;
  return (
    <div className="h-screen">
      <div className="flex justify-center m-4">
        <div className="text-2xl px-10 py-2 text-center ">See all users</div>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 bg-white p-4 flex flex-wrap">
          {users.map((user) => (
            <div
              key={user.id}
              className="border border-gray-300 p-2 m-2 w-1/7 justify-items-center"
            >
              <Link href={`/users/${user.id}`}>
                {user?.avatar ? (
                  <div className="w-15 h-15 relative">
                    <Image src={user.avatar} alt="" fill={true} unoptimized />
                  </div>
                ) : null}

                <div>{user.username}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
