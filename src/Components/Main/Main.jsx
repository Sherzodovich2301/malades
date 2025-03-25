import AsosiyPage from "../../Compo/AsosiyPage/AsosiyPage";
import BeshinchiPage from "../../Compo/BeshinchiPage/BeshinchiPage";
import IkkinchiPage from "../../Compo/IkkiPage/IkkiPage"
import LogIn from "../../Compo/LogInPage/LogIn";
import TortinchiPage from "../../Compo/TortinchiPage/TortinchiPage";
import UchinchiPage from "../../Compo/UchinchiPage/UchinchiPage";
import YettinchiPage from "../../Compo/YettinchiPage/YettinchiPage";


export default function Main() {
  return (
    <div>
      <AsosiyPage/>
      <IkkinchiPage/>
      <UchinchiPage/>
      <TortinchiPage/>
      <BeshinchiPage/>
      <YettinchiPage/>
      <LogIn/>
    </div>
  )
}
