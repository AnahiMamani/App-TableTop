import { View, Text, StyleSheet } from "react-native";

interface DefaultScreenProps {
  title: string;
  emoji?: string;
}

export default function personagens({ title, emoji = "📜" }: DefaultScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{emoji} {title}</Text>
      <Text style={styles.text}>Conteúdo da tela {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
});
