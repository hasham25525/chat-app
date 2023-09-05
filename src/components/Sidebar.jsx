"use client";
import {
  Add,
  ExitToApp,
  Home,
  Message,
  PeopleAlt,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SidebarTab from "./SidebarTab";
import SidebarList from "./SidebarList";

const tabs = [
  {
    id: 1,
    icon: <Home />,
  },
  {
    id: 2,
    icon: <Message />,
  },
  {
    id: 3,
    icon: <PeopleAlt />,
  },
];

export default function Sidebar({ user }) {
  const [menu, setMenu] = useState(1);
  const [roomName, setRoomName] = useState("second");
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  const data = [
    {
      id: 1,
      name: "Hasham",
      photoURL:
        "https://lh3.googleusercontent.com/a/AAcHTtcJ0Nn-pfb-hsK59x1GoCwHDPNCbUKSUNMdmE_0Uy5oLuCu=s96-c",
    },
  ];

  async function createRoom() {
    console.log(roomName);
    setIsCreatingRoom(false)
  }
  return (
    <div className="sidebar">
      {/* Sidebar */}
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user?.photoURL} alt={user?.displayname} />
          <h4>{user.displayname}</h4>
        </div>
        <div className="sidebar__header--right">
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar__search">
        <from className="sidebar__search--container">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search for users or rooms"
            id="search"
          />
        </from>
      </div>

      {/* Menu */}
      <div className="sidebar__menu">
        {tabs.map((tab) => (
          <SidebarTab
            key={tab.id}
            onClick={() => setMenu(tab.id)}
            isActive={tab.id == menu}
          >
            <div className="sidebar__menu--home">
              {tab.icon}
              <div className="sidebar__menu--line"></div>
            </div>
          </SidebarTab>
        ))}
      </div>

      {menu === 1 ? (
        <SidebarList title="Chats" data={data} />
      ) : menu === 2 ? (
        <SidebarList title="Rooms" data={data} />
      ) : menu === 3 ? (
        <SidebarList title="Users" data={data} />
      ) : menu === 4 ? (
        <SidebarList title="Search Results" data={data} />
      ) : null}

      {/* Create Room Button */}
      <div className="sidebar__chat--addRoom">
        <IconButton onClick={() => setIsCreatingRoom(true)}>
          <Add />
        </IconButton>
      </div>

      {/* Create Room Dialog */}
      <Dialog
        maxWidth="xs"
        open={isCreatingRoom}
        onClose={() => setIsCreatingRoom(false)}
      >
        <DialogTitle>Create New Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the name of the public room. Every user will be able to join
            this room.
          </DialogContentText>
          <TextField
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
            value={roomName}
            autoFocus
            margin="normal"
            id="roomName"
            label="Room Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCreatingRoom(false)}>Cancel</Button>
          <Button onClick={() => createRoom()} color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}