import {
  View,
  Text,
  Button
} from "react-native";

import { logout }
from "../storage/authStorage";

export default function ProfileScreen(
  { navigation }: any
) {

  async function sair() {

    await logout();

    navigation.navigate(
      "Login"
    );
  }

  return (

    <View
      style={{
        padding: 20
      }}
    >

      <Text>
        Usuário FIAP
      </Text>

      <Button
        title="Logout"
        onPress={sair}
      />

    </View>
  );
}