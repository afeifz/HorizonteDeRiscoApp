import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveUser(email: string) {
  await AsyncStorage.setItem("user", email);
}

export async function getUser() {
  return AsyncStorage.getItem("user");
}

export async function logout() {
  await AsyncStorage.removeItem("user");
}