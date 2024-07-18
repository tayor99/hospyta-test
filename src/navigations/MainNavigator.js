import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function MainNavigator({ handleLogout }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Calender") {
            iconName = focused ? "calendar-clear" : "calendar-clear-outline";
          } else if (route.name === "People") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "storefront" : "storefront-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: "rgba(68, 37, 245, 0.7)",
        inactiveTintColor: "#8696BB",
      }}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <HomeScreen {...props} handleLogout={handleLogout} />}
      </Tab.Screen>
      <Tab.Screen
        name="Calender"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="People"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
