import { db } from "@/utils/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const useRooms = () => {
  const [snapshot] = useCollection(collection(db, "rooms"));
  const rooms = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return rooms;
};

export default useRooms;
