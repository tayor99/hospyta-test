import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import Button from "../components/Button";
import HorizontalLine from "../components/HorizontalLine";

export default function SignupScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Register Account</Text>
        <Text style={styles.smallerText}>
          Fill your details to continue with social media
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholderText={"First Name"} type={"default"} />
        <InputField placeholderText={"Last Name"} type={"default"} />
        <InputField
          placeholderText={"example@gmail.com"}
          type={"email-address"}
        />
        <InputField
          placeholderText={"***********"}
          secureTextEntry={true}
          type={"default"}
        />
        <Text>I accept all the Terms & Conditions</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          variant={"primary"}
          btnText={"Register"}
          handleClick={handleLogin}
        />
        <View style={styles.altSignin}>
          <View style={styles.line}>
            <HorizontalLine />
          </View>

          <Text style={styles.lineText}>Or sign in with</Text>
          <View style={styles.line}>
            <HorizontalLine />
          </View>
        </View>
        <TouchableOpacity style={styles.googleBtn}>
          <Image
            source={require("../../assets/images/gLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.googleText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <View style={styles.altTextContainer}>
          <Text style={styles.altText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => handleLogin()}>
            <Text style={styles.altTextBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    color: "#F6F8FA",
  },
  headerSection: {
    marginTop: 120,
    paddingHorizontal: 20,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "gothampro_black",
    fontWeight: "600",
    fontSize: 40,
    marginBottom: 20,
  },
  smallerText: {
    fontFamily: "gothampro_black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#717171",
    marginBottom: 20,
  },
  inputContainer: {
    width: "92%",
    marginHorizontal: "auto",
  },
  btnContainer: {
    width: "92%",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  altSignin: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  line: {
    flex: 0.4,
  },
  lineText: {
    flex: 0.3,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "#717171",
  },
  googleBtn: {
    flexDirection: "row",
    justifyContent: "center",
    height: 48,
    gap: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  googleText: {
    color: "#555555",
    fontWeight: "500",
    fontSize: 16,
  },
  altTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  altText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#555555",
  },
  altTextBtn: {
    fontWeight: "500",
    fontSize: 16,
    color: "#4425f5",
  },
});
