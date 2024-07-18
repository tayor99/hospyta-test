import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthText = ({ mainText }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{mainText}</Text>
      <Text style={styles.smallText}>With Hospyta</Text>
    </View>
  );
};

export default AuthText;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Poppins-Black",
    fontSize: 40,
    fontWeight: "600",
    color: "#fff",
    lineHeight: 40,
  },
  smallText: {
    fontFamily: "Poppins-Black",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 48,
    color: "#E32654",
  },
});
