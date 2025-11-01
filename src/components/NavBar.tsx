import Link from "next/link";
import { getUserInfo } from "@/utils/userInfo";

export default async function NavBar() {
  const user = await getUserInfo();
  return (
    <div className="w-full h-15 flex items-center bg-brew-darkblue font-fugaz text-black text-xl">
      <nav>
        <Link href="/" className="m-4 hover:text-brew-orange">
          Home
        </Link>
        <Link href="/chats" className="m-4  hover:text-brew-orange">
          Chats
        </Link>
        <Link href="/users" className="m-4  hover:text-brew-orange">
          Users
        </Link>
        <Link href="/users/profile" className="m-4  hover:text-brew-orange">
          My Profile
        </Link>
      </nav>

      <div className="fixed right-30">{user?.username}</div>
    </div>
  );
}
