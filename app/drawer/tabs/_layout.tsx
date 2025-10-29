import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // o Drawer já tem header
        tabBarStyle: {
          backgroundColor: "#1B1F2F", // fundo escuro
          borderTopColor: "#2A3045", // linha superior discreta
          height: 60,
          paddingBottom: 6,
        },
        tabBarActiveTintColor: "#8C7BFF", // roxo principal ativo
        tabBarInactiveTintColor: "#A3A8B9", // cinza claro para inativo
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="ficha"
        options={{
          title: "Ficha",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="dado"
        options={{
          title: "Dado",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="dice-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
