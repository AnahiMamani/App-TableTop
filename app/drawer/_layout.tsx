import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        headerStyle: {
          backgroundColor: "#1B1F2F",
        },
        headerTintColor: "#E6E1FF",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 20,
          color: "#C9B6FF",
        },
        drawerStyle: {
          backgroundColor: "#141824",
          width: 250,
        },
        drawerActiveBackgroundColor: "#877cd2ff",
        drawerActiveTintColor: "#C9B6FF",
        drawerInactiveTintColor: "#A3A8B9",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
        },
        title: "Principal"
      }}
    >

      {/* ✅ "Principal" vem primeiro */}
      <Drawer.Screen
        name="index"
        options={{
          title: "Principal",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
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
        name="pistas"
        options={{
          title: "Pistas",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trail-sign-outline" color={color} size={size} />
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
  name="tabs"
  options={{
    drawerItemStyle: { display: "none" }, // 👈 oculta do menu
  }}
/>


    </Drawer>
  );
}
