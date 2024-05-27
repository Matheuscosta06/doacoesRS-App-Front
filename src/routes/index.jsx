import { useContext } from "react";
import PrivateTab from "./PrivateTab.routes";
import PublicTab from "./PublicTab.routes";
import { AuthContext } from "../contexts/AuthContext";

function Routes() {
  // const { user } = useContext(AuthContext);
  // return user ? <PrivateTab /> : <PublicTab />
  return <PrivateTab />
}

export default Routes;