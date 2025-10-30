import { db } from "@/utils/connect";
import Link from "next/link";

export default async function AllUsersPage() {
  const users = (await db.query(`SELECT * FROM users`)).rows;
  return (
    <div>
      <div>See all users</div>
      <div>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}> Username: {user.username}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
