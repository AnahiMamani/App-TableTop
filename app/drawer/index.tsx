import { Redirect } from "expo-router";

export default function DrawerIndex() {
  // Quando abrir o Drawer, ele redireciona direto para /drawer/tabs/feed
  return <Redirect href="/drawer/tabs/feed" />;
}
