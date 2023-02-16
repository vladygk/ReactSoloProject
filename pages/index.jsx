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
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return (
    <div>
      <CollectorColumn items={[{
      name: "Vasko",
      nftsCount: 123,
      verified: true,
      id: 1
    },{
      name: "Tarev",
      nftsCount: 11,
      verified: true,
      id: 2
    },{
      name: "Kamen",
      nftsCount: 4444,
      verified: true,
      id: 3
    }]}/>
      </div>
  );
}
