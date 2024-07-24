import { SafeAreaProvider } from "react-native-safe-area-context";
import AllChatScreen from "./screens/AllChatsScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
