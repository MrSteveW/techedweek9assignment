import Link from "next/link";

export default function NavBar() {
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

      <div className="fixed right-30">
        {/* Remove all auth calls from NavBar for now */}
      </div>
    </div>
  );
}
