import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/connect";
import UserSignUpForm from "@/components/UserSignUpForm";

export default async function UserPage() {
  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (isAuthenticated == false) {
    redirectToSignIn();
  }

  const res = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [
    userId,
  ]);
  const userInfo = res.rows[0];

  const isNotDB = userInfo === undefined;

  if (isNotDB) {
    return (
      <div>
        <UserSignUpForm />
      </div>
    );
  }

  return (
    <div>
      <h2>Your profile:</h2>
      <p className="text-2xl">{userInfo.username}</p>
      <p>{userInfo.bio}</p>
    </div>
  );
}
