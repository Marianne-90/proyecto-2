import "./style.css";
import { SubNavbar, Promotions, GalleryIMG, HistoryValues } from "./index";

export const Home = () => {
  return (
    <div className="home pages">
      <SubNavbar />
      <Promotions />
      <GalleryIMG />
      <HistoryValues />
    </div>
  );
};
