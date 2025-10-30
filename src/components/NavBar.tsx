import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-10 flex items-center bg-chat-dark font-fugaz text-black text-xl">
      <nav>
        <Link href="/" className="m-4 hover:text-sliced-cyan">
          Home
        </Link>
        <Link href="/chats" className="m-4  hover:text-sliced-cyan">
          Chats
        </Link>
        <Link href="/users" className="m-4  hover:text-sliced-cyan">
          Users
        </Link>
        <Link href="/users/profile" className="m-4  hover:text-sliced-cyan">
          My Profile
        </Link>
      </nav>

      <div className="fixed right-30">
        {/* Remove all auth calls from NavBar for now */}
      </div>
    </div>
  );
}
