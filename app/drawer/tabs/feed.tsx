import { FlatList, StyleSheet, Text, View } from "react-native";

const comentarios = [
  { id: "1", autor: "Luna", texto: "Que legal foi a campanha de hoje!!" },
  { id: "2", autor: "Amanda", texto: "Amei o mistério!" },
  { id: "3", autor: "Rafael", texto: "A história ficou incrível 😍" },
  { id: "4", autor: "Davi", texto: "Mal posso esperar pela próxima sessão!" },
  { id: "5", autor: "Sofia", texto: "Os personagens estão evoluindo muito bem!" },
  { id: "6", autor: "Carla", texto: "O enigma das pistas foi genial!" },
];

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Feed da Campanha</Text>
      <Text style={styles.subtitle}>
        O que os aventureiros estão dizendo hoje...
      </Text>

      <FlatList
        data={comentarios}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.commentCard}>
            <View style={styles.headerComment}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.autor.charAt(0).toUpperCase()}
                </Text>
              </View>
              <Text style={styles.author}>{item.autor}</Text>
            </View>
            <Text style={styles.text}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1B1F2F", // Fundo escuro e elegante
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#B0B6C2",
    textAlign: "center",
    marginBottom: 20,
  },
  commentCard: {
    backgroundColor: "#272C3C",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  headerComment: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#8C7BFF", // Roxo temático
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F5F5F5",
  },
  text: {
    fontSize: 15,
    color: "#B0B6C2",
    lineHeight: 20,
  },
});
