import Image from "next/image";

type UserInfoType = {
  user: {
    avatar: string;
    bio: string;
    clerk_id: string;
    created_at: Date;
    id: number;
    drink: string;
    username: string;
  };
  numberChats: number;
};

export default function UserProfile({ user, numberChats }: UserInfoType) {
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
            <div className="text-xl m-4">Drinks {user.drink}</div>
            <div className="text-xl m-4">Total chats: {numberChats}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
