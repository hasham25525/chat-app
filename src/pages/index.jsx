import Chats from "@/components/Chats";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import useAuthUser from "@/hooks/useAuthUsers";

export default function Home() {
 const user = useAuthUser();
  return (
    <>
     {
      !user ?  <Login/> : (
        <div className="app">
          <div className="app__body">
            <Sidebar user={user}/>
            <Chats user={user}/>
          </div>
        </div>
      )
     }
    </>
  );
}
