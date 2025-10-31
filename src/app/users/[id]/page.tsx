// VIEW INDIVIDUAL USER PAGE
import { db } from "@/utils/connect";
import { notFound } from "next/navigation";
import UserProfile from "@/components/UserProfile";
import Link from "next/link";

type paramsType = {
  params: {
    id: string;
  };
};

export default async function IndividualUserPage({ params }: paramsType) {
  const { id } = await params;
  const user = (await db.query(`SELECT * FROM users WHERE id = ${id}`)).rows[0];

  if (!user) {
    notFound();
  }

  const chats = (
    await db.query(`SELECT 
      chats.id,
      chats.title,
      chats.content,
      chats.created_at
    FROM chats
    JOIN users ON chats.user_id = users.id
    WHERE user_id = ${id}
     ORDER BY chats.created_at DESC
  `)
  ).rows;

  const numberChats = chats.length;

  return (
    <div className="h-screen">
      <UserProfile user={user} numberChats={numberChats} />
      <div className="flex justify-center">
        <div className="w-4/5 bg-white">
          {chats.map((chat) => (
            <Link href={`/chats/${chat.id}`} key={chat.id}>
              <div className="border border-gray-300 flex m-4 p-2">
                <div className="w-5/6">
                  <div className="font-bold">{chat.title}</div>
                  <div>{chat.content}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
