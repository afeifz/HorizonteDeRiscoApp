import { View, Text } from "react-native";

export default function EventCard({ item }: any) {

  const riskColor =
    item.riskLevel === "CRITICAL"
      ? "#ff4d4d"
      : item.riskLevel === "MEDIUM"
      ? "#ffb84d"
      : "#4caf50";

  return (
    <View
      style={{
        backgroundColor: "#fff",
        margin: 10,
        padding: 16,
        borderRadius: 12,
        elevation: 4,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        {item.title}
      </Text>

      <Text
        style={{
          color: "#666",
          marginBottom: 6,
        }}
      >
        Categoria: {item.category}
      </Text>

      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: riskColor,
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {item.riskLevel}
        </Text>
      </View>
    </View>
  );
}