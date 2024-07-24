import { SafeAreaProvider } from "react-native-safe-area-context";
import AllChatScreen from "./screens/AllChatsScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <AllChatScreen />
    </SafeAreaProvider>
  );
}
