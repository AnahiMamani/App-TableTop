import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#1B1F2F", // fundo escuro do header
        },
        headerTintColor: "#E6E1FF", // cor do texto do header
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 20,
          color: "#C9B6FF",
        },
        drawerStyle: {
          backgroundColor: "#141824", // fundo do menu lateral
          width: 250,
        },
        drawerActiveBackgroundColor: "#2E275A", // fundo quando item está selecionado
        drawerActiveTintColor: "#C9B6FF", // texto ativo
        drawerInactiveTintColor: "#A3A8B9", // texto inativo
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
        title: "Principal "
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Perfil",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="campanhas"
        options={{
          title: "Campanhas",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="personagens"
        options={{
          title: "Personagens",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="pistas"
        options={{
          title: "Pistas",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trail-sign-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}
