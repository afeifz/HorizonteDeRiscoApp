import { View, Text } from "react-native";

export default function EventCard({ item }: any) {

  return (
    <View
      style={{
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
      }}
    >

      <Text>{item.title}</Text>

      <Text>
        {item.category}
      </Text>

      <Text>
        {item.riskLevel}
      </Text>

    </View>
  );
}