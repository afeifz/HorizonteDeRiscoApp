import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { saveUser } from "../storage/authStorage";

export default function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function login() {

    if (
      email === "fiap@teste.com" &&
      senha === "123456"
    ) {

      await saveUser(email);

      navigation.navigate("Home");
    }
  }

  return (
    <View style={{ padding: 20 }}>

      <Text>Email</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha</Text>

      <TextInput
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Entrar"
        onPress={login}
      />

    </View>
  );
}