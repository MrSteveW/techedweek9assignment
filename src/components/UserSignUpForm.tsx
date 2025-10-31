interface UserDetailsProps {
  handleSubmit: (formData: FormData) => void | Promise<void>;
}

export default async function UserSignUpForm({
  handleSubmit,
}: UserDetailsProps) {
  return (
    <form action={handleSubmit}>
      <input name="username" placeholder="enter username..." />
      <input name="bio" placeholder="enter bio..." />
      <button type="submit">submit</button>
    </form>
  );
}
