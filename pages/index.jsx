import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo"
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";

export default function Index() {
  //return <User name="Vaskoi" verified={true} info="134 items"/>;
  return <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padd:"center"}}>
      <User name="Vasko" info="144 items" verified={true}/>
     
  </div>
}
