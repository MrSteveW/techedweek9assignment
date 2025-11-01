import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type UserType = {
  avatar: string;
  bio: string;
  clerk_id: string;
  created_at: Date;
  id: number;
  drink: string;
  username: string;
};

interface UserDetailsProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
  user?: UserType | null;
}

export default function UserSignUpForm({
  handleSubmit,
  user,
}: UserDetailsProps) {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 bg-white">
        <div className="flex flex-col m-4 p-2 border">
          <form action={handleSubmit}>
            {/* USERNAME */}
            <div className="flex m-4 items-center">
              <label className="w-40 text-2xl text-gray-700 d mr-10">
                Username
              </label>
              <input
                className="w-full border boder-gray-300 rounded-lg p-2"
                name="username"
                defaultValue={user?.username || ""}
                required
              />
            </div>
            {/* USERNAME */}
            <div className="flex items-center m-4 ">
              <label className="w-40 block text-2xl text-gray-700 mr-10">
                Bio
              </label>
              <input
                className="w-full border boder-gray-300 rounded-lg p-2"
                name="bio"
                defaultValue={user?.bio || ""}
                required
              />
            </div>
            {/* DRINKS */}
            <div className="flex items-center m-4 ">
              <label className="w-40 block text-2xl text-gray-700 mr-10">
                Drink option
              </label>
              <div className="w-full">
                <Select name="drink" defaultValue={user?.drink || ""}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white tea">white tea</SelectItem>
                    <SelectItem value="green tea">green tea</SelectItem>
                    <SelectItem value="peppermint tea">
                      peppermint tea
                    </SelectItem>
                    <SelectItem value="black coffee">black coffee</SelectItem>
                    <SelectItem value="hot chocolate">hot chocolate</SelectItem>
                    <SelectItem value="matcha latte">matcha latte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* AVATAR */}
            <div className="flex items-center m-4 ">
              <label className="w-40 block text-2xl text-gray-700 mr-10">
                Avatar
              </label>
              <input
                className="w-full border boder-gray-300 rounded-lg p-2"
                name="avatar"
                defaultValue={user?.avatar || ""}
              />
            </div>
            <div className="text-center">
              <Button variant="default" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
