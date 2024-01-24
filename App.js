// [] {}

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Items from "./src/components";

const data = [
  {
    id: 1,
    title: "Orange",
    newPrice: 36.99,
    oldPrice: 48.59,
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
    newPrice: 16.99,
    oldPrice: 23.29,
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
    newPrice: 52.39,
    oldPrice: 61.45,
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
    newPrice: 12.89,
    oldPrice: 15.64,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/apple.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 5,
    title: "Grape",
    newPrice: 44.99,
    oldPrice: 58.19,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/grape.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 6,
    title: "Kiwi",
    newPrice: 87.65,
    oldPrice: 110.12,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/kiwi.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 7,
    title: "Cherry",
    newPrice: 6.54,
    oldPrice: 8.25,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/cherry.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 8,
    title: "Pineapple",
    newPrice: 68.11,
    oldPrice: 77.13,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/pineapple.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 9,
    title: "Pomegranate",
    newPrice: 38.66,
    oldPrice: 44.37,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/pomegranate.png"),
        favourites: require("./assets/star.png"),
        basket: require("./assets/basket.png"),
      },
    ],
  },
  {
    id: 10,
    title: "Lemon",
    newPrice: 9.73,
    oldPrice: 12.45,
    desc: "Store at temperatures from +1C to +10C",
    images: [
      {
        main: require("./assets/lemon.png"),
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
    backgroundColor: "#80D9FF",
    alignItems: "center",
    paddingTop: 10,
  },
});
