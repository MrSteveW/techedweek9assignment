import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function NavBar() {
  const user = await currentUser();
  return (
    <div className="w-full h-10 flex items-center bg-chat-dark font-fugaz text-black text-xl">
      <nav>
        <Link href="/" className="m-4 hover:text-sliced-cyan">
          Home
        </Link>
        <Link href="/chats" className="m-4  hover:text-sliced-cyan">
          Chats
        </Link>
        <Link href="/add-chat" className="m-4  hover:text-sliced-cyan">
          Add new chat
        </Link>
      </nav>
      {/* The following needs to change to a db call of username - not Clerk!! */}
      <div className="fixed right-30">{user?.username}</div>
    </div>
  );
}
