import Gestures from "@/components/Gestures";
import Link from "next/link";
import Image from "next/image";

type UserType = {
  user: {
    id: number;
    username: number;
    avatar: string;
  };
};

export default function UserCard({ user }: UserType) {
  return (
    <div
      key={user.id}
      className="border border-brew-orange rounded-2xl p-2 m-2 w-1/7 justify-items-center"
    >
      <Gestures>
        <Link href={`/users/${user.id}`}>
          {user?.avatar ? (
            <div className="w-15 h-15 relative">
              <Image src={user.avatar} alt="" fill={true} unoptimized />
            </div>
          ) : null}

          <div>{user.username}</div>
        </Link>
      </Gestures>
    </div>
  );
}
