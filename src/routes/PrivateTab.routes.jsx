import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Gift from "../screens/Gift";
import Category from "../screens/Category";
import Sobre from "../screens/Sobre";
import { Text } from 'react-native';
import DetalhesPets from "../screens/DetalhesPets";
import DetalhesAlimentos from "../screens/DetalhesAlimentos";
import DetalhesRoupas from "../screens/DetalhesRoupas";
import DetalhesHigiene from "../screens/DetalhesHigiene";
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const PrivateTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 104,
          paddingBottom: 2,
          paddingTop: 10,
          backgroundColor: '#FFA41B',
          margin: 10,
          borderRadius: 10,
  
        },
      }}>

        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),

            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />
        <Tab.Screen name="Category" component={Category}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="list"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />
        <Tab.Screen name="Gift" component={Gift}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="gift"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="users"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />

        <Tab.Screen name="DetalhesPets" component={DetalhesPets}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="dog"
                size={38}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />





      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default PrivateTab;