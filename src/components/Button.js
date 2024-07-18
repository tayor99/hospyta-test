import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ variant, btnText, handleClick }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        variant === "primary" ? styles.primary : styles.variant,
      ]}
      onPress={() => handleClick()}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 48,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 14,
  },
  primary: {
    backgroundColor: "#4425f5",
  },
  variant: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
  },
});
