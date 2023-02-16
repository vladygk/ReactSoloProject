import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo";
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return (
    <div>
      <TopCollectors
        collectors={[
        { name: "Vasko", nftsCount: 22, verified: true },
        { name: "Vladi", nftsCount: 33, verified: true },
        { name: "Taev", nftsCount: 0, verified: false },
        { name: "Kamen", nftsCount: 2200, verified: false },
        { name: "Eli", nftsCount: 13, verified: true },
        { name: "Lena", nftsCount: 1, verified: false },
        { name: "Gogeto", nftsCount: 681, verified: true },
        { name: "Lena", nftsCount: 1, verified: false },
        { name: "Gogeto", nftsCount: 681, verified: true },
        { name: "Gogeto", nftsCount: 681, verified: true },
        { name: "Lena", nftsCount: 1, verified: false },
        { name: "Gogeto", nftsCount: 681, verified: true }]}
      />
    </div>
  );
}
