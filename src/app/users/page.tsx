import { getUserInfo } from "@/utils/userInfo";

export default async function UserPage() {
  // const { isAuthenticated, redirectToSignIn, userId } = await auth();
  const user = await getUserInfo();

  return (
    <div>
      <h2>Your profile:</h2>
      <p className="text-2xl">{user?.username}</p>
      <p>{user?.bio}</p>
    </div>
  );
}
