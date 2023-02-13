import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo"
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return <div >
      <Card likes={1600} price="~12.1" currency="ETH" name="Clock" user={{avatar:{url:""},verified:true}}/>
     
  
  </div>
}
