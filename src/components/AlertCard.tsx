import { View, Text } from "react-native";

export default function AlertCard({ item }: any) {

  return (

    <View
      style={{
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      }}
    >

      <Text>
        {item.riskLevel}
      </Text>

      <Text>
        {item.message}
      </Text>

    </View>
  );
}