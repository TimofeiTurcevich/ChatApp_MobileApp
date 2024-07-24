import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();

  const [loginInputColor, setLoginInputColor] = useState("black");
  const [passwordInputColor, setpasswordInputColor] = useState("black");

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Start chatting right now
      </Text>

      <TextInput
        style={[styles.input, { borderColor: loginInputColor }]}
        placeholder="Enter your email here"
        onFocus={() => setLoginInputColor("rgba(68, 131, 251, 0.83)")}
        onBlur={() => setLoginInputColor("black")}
        multiline={false}
      />

      <TextInput
        style={[styles.input, { borderColor: passwordInputColor }]}
        placeholder="Enter your password"
        multiline={false}
        onFocus={() => setpasswordInputColor("rgba(68, 131, 251, 0.83)")}
        onBlur={() => setpasswordInputColor("black")}
        secureTextEntry={true}
      />

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <TouchableOpacity style={styles.registerButton}>
          <Text style={{ fontSize: 24 }}>Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ fontSize: 24, color: "white" }}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 25,
    padding: 8,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "rgba(4, 5, 6, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 25,
    flex: 1,
    marginLeft: 5,
  },
  registerButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "rgba(4, 5, 6, 0.6)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
