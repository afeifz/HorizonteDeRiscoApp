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
import EventCard from "../components/EventCard";

export default function EventsScreen() {

  const [events, setEvents] =
    useState<any[]>([]);

  useEffect(() => {

    api.get("")
      .then((response) => {

        setEvents(
          response.data.events
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
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <EventCard item={item} />
        }
      />

    </View>
  );
}