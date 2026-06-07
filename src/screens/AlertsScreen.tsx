import {
  FlatList,
  View
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

    <View style={{ flex: 1 }}>

      <FlatList
        data={alerts}
        renderItem={({ item }) =>
          <AlertCard item={item} />
        }
      />

    </View>
  );
}