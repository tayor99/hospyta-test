import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function InputField({
  placeholderText,
  type,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.container}>
      {/* Icon */}

      <Ionicons name="person-outline" size={15} color="black" />

      <TextInput
        keyboardType={type}
        placeholder={placeholderText}
        style={styles.inputStyles}
        placeholderTextColor={"#2b2b2b"}
        secureTextEntry={secureTextEntry ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 10,
    backgroundColor: "#fff",
    height: 48,
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 16,
  },
  inputStyles: {
    fontSize: 16,
    color: "#2b2b2b",
    width: "95%",
  },
});
