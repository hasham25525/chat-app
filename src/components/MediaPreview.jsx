import { CloseRounded } from "@mui/icons-material";

const MediaPreview = ({ closePreview, src }) => {
  if (!src) return null;
  return <div className="mediaPreview">
    <CloseRounded onClick={closePreview}/>
    <img src={src} alt="Preview"/>
  </div>;
};

export default MediaPreview;
