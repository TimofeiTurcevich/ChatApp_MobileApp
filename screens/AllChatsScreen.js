import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";

export default function AllChatScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        // { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <TopBar text={"All chats"} backButton={false} />

      <Text style={{ color: "black" }}>Some text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
