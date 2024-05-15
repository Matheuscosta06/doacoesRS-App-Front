import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";



const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons name="home" color={"#131313"} size={24} />;
          }
        }}

      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons name="account" color={"#131313"} size={24} />;
          }
        }}

      />
      <Tab.Screen name="Category" component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons name="format-list-bulleted" color={"#131313"} size={24} />;
          }
        }}

      />

    </Tab.Navigator>
  );
};

export default TabRoutes;