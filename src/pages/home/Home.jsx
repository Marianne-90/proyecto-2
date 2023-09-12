import "./style.css";
import { SubNavbar, Promotions, GalleryIMG } from "./index";

export const Home = () => {
  return (
    <div className="home pages">
      <SubNavbar />
      <Promotions />
      <GalleryIMG />
    </div>
  );
};
