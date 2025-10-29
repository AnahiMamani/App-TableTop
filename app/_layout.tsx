import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />          {/* Tela de Login */}
      <Stack.Screen name="drawer" />         {/*Navegação principal*/}
    </Stack>
  );
}
