import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {

  return (
    <View style={{ padding: 20 }}>

      <Text>
        Horizonte de Risco
      </Text>

      <Button
        title="Eventos"
        onPress={() =>
          navigation.navigate("Eventos")
        }
      />

      <Button
        title="Alertas"
        onPress={() =>
          navigation.navigate("Alertas")
        }
      />

      <Button
        title="Perfil"
        onPress={() =>
          navigation.navigate("Perfil")
        }
      />

    </View>
  );
}