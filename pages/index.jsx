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
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return (
    <div>
      
      <How items={[
        {title:"First title", description:"Lorem ipsum dolor sit amet velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title:"Second title", description:"Lorem ipsum dolor sit amet velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title:"Third title", description:"Lorem ipsum dolor sit amet velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]} title="HOW IT WORKS" link="/about" description="Lorem ipsum dolor sit amet velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </div>
  );
}
