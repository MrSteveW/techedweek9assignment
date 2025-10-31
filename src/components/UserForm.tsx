type UserType = {
  user: {
    username: string;
    avatar: string | null;
    bio: string;
  };
};

interface UserDetailsProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
}

export default async function UserSignUpForm(
  handleSubmit: UserDetailsProps,
  user: UserType
) {
  return (
    <div className="flex justify-center">
      <form action={handleSubmit}>
        <div className="w-4/5 h-100 border border-gray-400 bg-white m-8">
          <div className="flex m-4 p-2 border border-gray-400">
            <div className="w-1/4">
              <div className="w-50 h-50 relative">AVATAR</div>
            </div>
            <div className="w-3/4">
              <div className="text-3xl font-bold m-4">
                <input name="username" defaultValue={user?.username || ""} />
              </div>
              <div className="text-xl italic m-4">
                <label className="block text-gray-700 text-bg font-bold mb-2">
                  Bio
                </label>
                <input name="bio" defaultValue={user?.username || ""} />
              </div>
            </div>
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
