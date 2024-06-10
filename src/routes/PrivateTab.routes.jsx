import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Gift from "../screens/Gift";
import Cart from "../screens/Cart";
import Category from "../screens/Category";
import OrderPlaced from "../screens/OrderPlaced";
import Sobre from "../screens/Sobre";
import Feedback from "../screens/Feedback";
import { Text } from "react-native";
import DetalhesPets from "../screens/DetalhesPets";
import DetalhesAlimentos from "../screens/DetalhesAlimentos";
import DonationHistory from "../screens/DonationHistory";
import DetalhesRoupas from "../screens/DetalhesRoupas";
import DetalhesHigiene from "../screens/DetalhesHigiene";
import DetalhesPix from "../screens/DetalhesPix";
import giftDetails from "../screens/GiftDetails";
import DetalhesHigieneGift from "../screens/DetalhesHigieneGift";
import DetalhesPetsGift from "../screens/DetalhesPetsGift";
import DetalhesAlimentosGift from "../screens/DetalhesAlimentosGift";
import DetalhesRoupasGift from "../screens/DetalhesRoupasGift";
import GiftCart from "../screens/GiftCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
                color={focused ? "#ffff" : "#366ED8"}
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
              zIndex: 210, // Added zIndex
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#ffff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="shopping-cart"
                size={38}
                color={focused ? "#fff" : "#366ED8"}
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
            tabBarActiveTintColor: "#ffff",
            tabBarInactiveTintColor: "#366ED8",
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
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#ffff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen
          name="DetalhesHigieneGift"
          component={DetalhesHigieneGift}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

          }}
        />

        <Tab.Screen
          name="DetalhesRoupasGift"
          component={DetalhesRoupasGift}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

          }}
        />


        <Tab.Screen
          name="DetalhesAlimentosGift"
          component={DetalhesAlimentosGift}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

          }}
        />
        <Tab.Screen
          name="DetalhesPetsGift"
          component={DetalhesPetsGift}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

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
                color={focused ? "#fff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
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
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

          }}
        />
        <Tab.Screen name="DetalhesAlimentos" component={DetalhesAlimentos}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="hamburger"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen name="DetalhesRoupas" component={DetalhesRoupas}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tshirt"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen name="DetalhesHigiene" component={DetalhesHigiene}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="soap"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen name="DetalhesPix" component={DetalhesPix}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="app-store"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen name="Feedback" component={Feedback}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="app-store"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />

        <Tab.Screen name="Cart" component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="app-store"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />

        <Tab.Screen name="giftDetails" component={giftDetails}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tshirt"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />


        <Tab.Screen name="OrderPlaced" component={OrderPlaced}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tshirt"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />
        <Tab.Screen
          name="DonationHistory"
          component={DonationHistory}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="dropbox"
                size={38}
                color={focused ? "#ffff" : "#366ED8"}
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",

          }}
        />


        <Tab.Screen name="GiftCart" component={GiftCart}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="shopping-cart"
                size={38}
                color={focused ? "#366ED8" : "#fff"} />
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
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#366ED8",
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default PrivateTab;
