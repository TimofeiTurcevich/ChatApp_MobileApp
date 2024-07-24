import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function TopBar({ text, backButton }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.topBar, { paddingTop: insets.top }]}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          position: "absolute",
          width: "100%",
          top: 0,
          height: "100%",
          marginTop: insets.top,
          alignItems: "center",
          justifyContent: backButton ? "flex-start" : "flex-end",
          zIndex: 2,
        }}
      >
        {backButton ? (
          <Ionicons name="arrow-back" size={34} color="blue" />
        ) : (
          <FontAwesome6 name="plus" size={34} color="blue" />
        )}

        {backButton && (
          <Text style={{ color: "blue", fontSize: 24 }}>Back</Text>
        )}
      </TouchableOpacity>

      <Text style={{ fontSize: 24, textAlign: "center", flex: 1 }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    minHeight: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingHorizontal: 5,
  },
});
