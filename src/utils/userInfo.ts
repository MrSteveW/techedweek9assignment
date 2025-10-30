import { auth } from "@clerk/nextjs/server";
import { db } from "./connect";

type UserInfoType = {
  avatar: string;
  bio: string;
  clerk_id: string;
  created_at: Date;
  id: number;
  username: string;
};

export async function getUserInfo(): Promise<UserInfoType | null> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return null;
    }
    const res = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [
      userId,
    ]);

    if (res.rows.length === 0) {
      return null;
    }

    const userInfo: UserInfoType = res.rows[0];
    return userInfo;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}
