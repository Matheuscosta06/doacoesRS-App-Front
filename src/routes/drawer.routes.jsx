import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";


const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Category" component={Category} />

    </Drawer.Navigator>
  );
};

export default DrawerRoutes;