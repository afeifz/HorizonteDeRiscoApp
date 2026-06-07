import { View, Text } from "react-native";

export default function AlertCard({ item }: any) {

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
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: riskColor,
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 20,
          marginBottom: 10,
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

      <Text
        style={{
          fontSize: 16,
          color: "#333",
        }}
      >
        {item.message}
      </Text>
    </View>
  );
}