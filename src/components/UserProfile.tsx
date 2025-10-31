import Image from "next/image";

type UserType = {
  user: {
    username: string;
    avatar: string | null;
    bio: string;
  };
  numberChats: number;
};

export default function UserProfile({ user, numberChats }: UserType) {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 border border-gray-400 bg-white m-8">
        <div className="flex m-4 p-2 border border-gray-400">
          <div className="w-1/4">
            <div className="w-50 h-50 relative">
              {user.avatar ? (
                <div className="w-50 h-50 relative">
                  <Image src={user.avatar} alt="" fill={true} unoptimized />
                </div>
              ) : (
                <div className="w-50 h-50 relative">IMAGE TBD</div>
              )}
            </div>
          </div>
          <div className="w-3/4">
            <div className="text-3xl font-bold m-4">{user.username}</div>
            <div className="text-xl italic m-4">{user.bio}</div>
            <div className="text-xl italic m-4">Total chats: {numberChats}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
