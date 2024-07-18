import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthText from "../components/AuthText";
import Button from "../components/Button";

const { width } = Dimensions.get("window");

const AuthScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace("Login");
  };

  const handleSignUp = () => {
    navigation.replace("SignUp");
  };
  return (
    <ImageBackground
      source={require("../../assets/images/doctor.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(43, 43, 43, 0)", "rgba(43, 43, 43, 0.8)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View>
            <AuthText
              mainText={
                "Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere"
              }
            />
            <View style={styles.btnContainer}>
              <Button
                variant={"primary"}
                btnText={"Sign In"}
                handleClick={handleLogin}
              />
              <Button
                variant={"outline"}
                btnText={"Sign Up"}
                handleClick={handleSignUp}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: "100%",
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    marginHorizontal: "auto",
    width: "90%",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 120,
  },
  logo: {
    marginTop: 70,
  },
  btnContainer: {
    marginTop: 20,
  },
});
