import { CircularProgress } from "@mui/material";
import SidebarListItems from "./SidebarListItems";

const SidebarList = ({title,data}) => {

    if(!data){
        return(
            <div className="loader__container sidebar__loader">
                <CircularProgress/>
            </div>
        )
    }

  return (
    <div className="sidebar__chat--container">
      <h2>{title}</h2>
      {data.map(item=>(
        <SidebarListItems key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default SidebarList;
