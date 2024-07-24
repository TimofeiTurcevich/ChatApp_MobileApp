import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ChatItem() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image}></View>

      <View style={styles.messageInfo}>
        <Text style={{ fontSize: 20 }}>Some username</Text>

        <View style={styles.message}>
          <View
            style={{
              flex: 14,
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <Text style={{ fontSize: 15 }} numberOfLines={3}>
              Some user text Some user text Some user text Some user text Some
              user text Some user text Some user text Some user text Some user
              text Some user text Some user text Some user text Some user text
              Some user text Some user text Some user text Some user text Some
              user text Some user textSome user text Some user text Some user
              text Some user text Some user text Some user text Some user text
              Some user text Some user text Some user text Some user text
            </Text>
          </View>

          <View
            style={{
              flex: 2,
              height: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 13 }}>16:02</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.11,
    width: "100%",
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  image: {
    flex: 1,
    borderWidth: 2,
    borderRadius: Dimensions.get("window").height * 0.11 * 0.8,
    marginRight: 10,
    height: Dimensions.get("window").width * (1 / 5.3),
  },
  messageInfo: {
    flex: 4.3,
    flexDirection: "column",
    borderBottomWidth: 2,
    borderColor: "rgba(163, 163, 163, 0.57)",
  },
  message: {
    flex: 4,
    flexDirection: "row",
  },
});
