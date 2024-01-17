// [] {}

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Items from "./src/components";

const data = [
  {
    id: 1,
    title: "Orange",
    newPrice: "36.99",
    oldPrice: "48.59",
    desc: "Store at temperatures from +5C to +18C",
    images: [
      {
        main: require("./assets/orange.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 2,
    title: "Banana",
    newPrice: "16.99",
    oldPrice: "23.29",
    desc: "Store at temperatures from +1C to +7C",
    images: [
      {
        main: require("./assets/banana.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 3,
    title: "Peach",
    newPrice: "52.39",
    oldPrice: "61.45",
    desc: "Store at temperatures from +2C to +15C",
    images: [
      {
        main: require("./assets/peach.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 4,
    title: "Apple",
    newPrice: "12.89",
    oldPrice: "15.64",
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/apple.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Items data={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
