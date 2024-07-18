import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ViewAll({ text }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: "#000",
          fontWeight: "600",
          marginBottom: 8,
        }}
      >
        {text}
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: "#6798E1",
            fontWeight: "400",
            marginBottom: 8,
          }}
        >
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 26,
  },
});
