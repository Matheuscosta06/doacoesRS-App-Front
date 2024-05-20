import { useContext } from "react";
import { AuthContext } from "./src/contexts/AuthContext";
export default function App() {
  const { user } = useContext(AuthContext);
  return user ? <PrivateTab /> : <PublicTab />

}