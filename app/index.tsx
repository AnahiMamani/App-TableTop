import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (senha === "12") {
      setErro("");
      router.replace("/drawer/tabs/feed"); // leva direto ao feed
    } else {
      setErro("Senha incorreta! Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Mestres do Mistério</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <Button title="Entrar" onPress={handleLogin} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
