import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import Navigation from "./Navigation";

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <MainNavigator handleLogout={handleLogout} />
      ) : (
        <Navigation handleLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
