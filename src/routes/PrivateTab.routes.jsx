import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Gift from "../screens/Gift";
import Category from "../screens/Category";
import Sobre from "../screens/Sobre";
import Feedback from "../screens/feedback";
import { Text } from "react-native";
import DetalhesPets from "../screens/DetalhesPets";
import DetalhesAlimentos from "../screens/DetalhesAlimentos";
import DetalhesRoupas from "../screens/DetalhesRoupas";
import DetalhesHigiene from "../screens/DetalhesHigiene";
import DetalhesPix from "../screens/DetalhesPix";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const PrivateTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
              />
            ),
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="list"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
              />
            ),
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen
          name="Gift"
          component={Gift}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="gift"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
              />
            ),
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="users"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
              />
            ),
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />

        <Tab.Screen
          name="DetalhesPets"
          component={DetalhesPets}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
              />
            ),
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",

          }}
        />
        <Tab.Screen name="DetalhesAlimentos" component={DetalhesAlimentos}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="hamburger"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen name="DetalhesRoupas" component={DetalhesRoupas}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tshirt"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen name="DetalhesHigiene" component={DetalhesHigiene}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="soap"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />
        <Tab.Screen name="DetalhesPix" component={DetalhesPix}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="pix"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarItemStyle: {
              display: "none",
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#FFA41B",
              borderRadius: 15,
              height: 90,
              borderColor: "transparent",
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#b9c3cd",
            tabBarInactiveTintColor: "#4B6584",
          }}
        />




        <Tab.Screen
          name="Feedback"
          component={Feedback}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="message-square"
                size={38}
                color={focused ? "#b9c3cd" : "#4B6584"}
                />
              ),
              tabBarStyle: {
                position: "absolute",
                bottom: 10,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: "#FFA41B",
                borderRadius: 15,
                height: 90,
                borderColor: "transparent",
              },
              tabBarShowLabel: false,
              tabBarActiveTintColor: "#b9c3cd",
              tabBarInactiveTintColor: "#4B6584",
            }}
          />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default PrivateTab;
