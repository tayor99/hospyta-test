import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "#C2BCBC",
    marginVertical: 10,
    width: "100%",
  },
});

export default HorizontalLine;
