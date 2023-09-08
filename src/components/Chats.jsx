import { AddPhotoAlternate, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import useRoom from "src/hooks/useRoom";
import MediaPreview from "./MediaPreview";
import { use, useState } from "react";
import ChatFooter from "./ChatFooter";
import { nanoid } from "nanoid";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/utils/firebase";

export default function Chats({ user }) {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [input, setInput] = useState("");
  const [src, setSrc] = useState("");

  const roomId = router.query.roomId ?? "";
  const userId = user.uid;
  const room = useRoom(roomId, userId);
  console.log(room);

  function showPreview(e) {
    const file = e?.target?.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSrc(reader.result);
      };
    }
  }

  function closePreview() {
    setSrc("");
    setImage(null);
  }

  async function sendMessage(e) {
    e.preventDefault();

    setInput("");
    if (image) closePreview();
    const imageName = nanoid();

    await setDoc(doc(db, `user/${userId}/chats/${roomId}`), {
      name: room.name,
      photoURL: room.photoURL || null,
      timestamp: serverTimestamp(),
    });

    await addDoc(collection(db, `rooms/${roomId}/messages`), {
      name: user.displayName,
      message: input,
      uid: user.uid,
      timestamp: serverTimestamp(),
      time: new Date().toUTCString(),
      ...(image ? { imageUrl: "uploading", imageName } : {}),
    });
  }

  if (!room) return null;

  return (
    <div className="chat">
      <div className="chat__backgroud" />

      {/* chat header */}
      <div className="chat__header">
        <div className="avatar__container">
          <Avatar src={room.photoURL} alt={room.name} />
        </div>

        <div className="chat__header--info">
          <h3>{room.name}</h3>
        </div>

        <div className="chat__header--right">
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            onChange={showPreview}
          />
          <IconButton>
            <label style={{ cursor: "pointer", height: 24 }} htmlFor="image">
              <AddPhotoAlternate />
            </label>
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Menu id="menu" keepMounted>
            <MenuItem>Delete Room</MenuItem>
          </Menu>
        </div>
      </div>
      <MediaPreview src={src} closePreview={closePreview} />
      <ChatFooter
        input={input}
        onChange={(e) => setInput(e.target.value)}
        image={image}
        user={user}
        room={room}
        roomId={roomId}
        sendMessage={sendMessage}
      />
    </div>
  );
}
