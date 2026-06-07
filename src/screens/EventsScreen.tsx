import {
  FlatList,
  View
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

    <View   style={{
    flex: 1,
    backgroundColor: "#f2f4f7",
  }}
>

      <FlatList
        data={events}
        renderItem={({ item }) =>
          <EventCard item={item} />
        }
      />

    </View>
  );
}