import { Add, ExitToApp, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

export default function Sidebar({ user }) {
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

      {/* Create Room Button */}
      <div className="sidebar__chat--addRoom">
        <IconButton>
            <Add/>
        </IconButton>
      </div>
    </div>
  );
}
