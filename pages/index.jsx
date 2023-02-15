import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo";
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer"
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";
import Featured from "../src/components/feautured/Featured";
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return (
    <div>
      <Featured items={[
      {
        image:
          "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
        title: "Breakfast",
        rows: 2,
        cols: 3,
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
        title: "Burger",
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
        title: "Camera",
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
        title: "Coffee",
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
        title: "Hats",
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
        title: "Honey",
        href: "/about",
      },
      {
        image:
          "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
        title: "Basketball",
        href: "/about",
      },
    ]}/>
      </div>
  );
}
