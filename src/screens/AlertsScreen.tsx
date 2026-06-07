import {
  FlatList,
  View,
  Text
} from "react-native";

import {
  useEffect,
  useState
} from "react";

import { api } from "../services/api";

import AlertCard
from "../components/AlertCard";

export default function AlertsScreen() {

  const [alerts, setAlerts] =
    useState<any[]>([]);

  useEffect(() => {

    api.get("/alerts")
      .then((response) => {

        setAlerts(
          response.data
        );
      });

  }, []);

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f4f7",
        padding: 15
      }}
    >

      <Text
        style={{
          fontSize: 12,
          color: "#666",
          marginBottom: 10,
          textAlign: "center"
        }}
      >
        A primeira consulta pode levar até 3 minutos,
        pois a API está acordando....
      </Text>

      <FlatList
        data={alerts}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) =>
          <AlertCard item={item} />
        }
      />

    </View>
  );
}