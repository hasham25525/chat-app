import Login from "@/components/Login";
import useAuthUser from "@/hooks/useAuthUsers";

export default function Home() {
  useAuthUser();
  return (
    <>
      <Login />
    </>
  );
}
