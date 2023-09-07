import { useRouter } from "next/router";
import useRoom from "src/hooks/useRoom";

export default function Chats({ user }) {
  const router = useRouter();
  const roomId = router.query.roomID ?? "";
  const userId = user.uid;
  const room = useRoom(roomId, userId);
  console.log(room);
  return <div>chat</div>;
}
