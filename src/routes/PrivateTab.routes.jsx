import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Home from "../screens/Home";
import Category from "../screens/Category";
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const PrivateTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          paddingBottom: 2,
          paddingTop: 10,
        },
      }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="boxes-stacked"
                size={24}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color, fontFamily: 'Poppins_500Medium', fontSize: 13 }}>Produtos</Text>
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />
        <Tab.Screen name="Category" component={Category}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="shopping-cart"
                size={24}
                color={focused ? "#4B6584" : "#b9c3cd"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color, fontFamily: 'Poppins_500Medium', fontSize: 13 }}>Carrinho</Text>
            ),
            tabBarActiveTintColor: "#4B6584",
            tabBarInactiveTintColor: "#b9c3cd",
          }
          }
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default PrivateTab;