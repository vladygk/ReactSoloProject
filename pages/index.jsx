import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo";
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return (
    <div>
      <Trending
        cards={[
          {
            name: "Ivy",
            user: {
              avatar: {
                url: "",
              },
              verified: true,
            },
            mediaUrl: "",
            price: 1,
            currency: "ETH",
          },
          {
            name: "Judie",
            user: {
              avatar: {
                url: "",
              },
              verified: true,
            },
            mediaUrl: "",
            price: 2.3,
            currency: "ETH",
          },
          {
            name: "Juniper",
            user: {
              avatar: {
                url: "",
              },
              verified: true,
            },
            mediaUrl: "",
            price: 5,
            currency: "ETH",
          },
          {
            name: "Maple",
            user: {
              avatar: {
                url: "",
              },
              verified: true,
            },
            mediaUrl: "",
            price: 10,
            currency: "ETH",
          },
        ]}
      />
    </div>
  );
}
