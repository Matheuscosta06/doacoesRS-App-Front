import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthContext";
import { useFonts, JosefinSans_500Medium, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_500Medium,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}