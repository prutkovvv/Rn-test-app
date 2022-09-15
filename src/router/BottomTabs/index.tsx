import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@src/scenes/Home";
import { MainStack } from "../MainStack";
import { BottomTabsParamList } from "./types";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      backBehavior="history"
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
