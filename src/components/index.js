import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert, FlatList } from "react-native";
import CustomPressable from "./Pressable/pressableWrapper";
import InputFilter from "./Pressable/searchArea";

export default function Items({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  const filterTitle = (filterText) => {
    const lowercasedFilter = filterText.toLowerCase();
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredData(filtered);
  };

  const clickItem = () => {
    Alert.alert("pressed");
  };

  const renderItem = ({ item }) => (
    <CustomPressable onPress={clickItem}>
      <View key={item.id} style={styles.item__wrapper}>
        <View style={styles.item__mainImage}>
          <Image source={item.images[0].main} style={styles.itemImg} />
        </View>
        <View style={styles.item__mainContent}>
          <View style={styles.item__textWrapper}>
            <View style={styles.item__titleWrapper}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Image
                source={item.images[0].favourites}
                style={styles.favourites}
              />
            </View>
            <View style={styles.item__priceWrapper}>
              <Text style={styles.textNewPrice}>{item.newPrice}</Text>
              <Text style={styles.textOldPrice}>{item.oldPrice}</Text>
            </View>
            <Text numberOfLines={1} style={styles.textDesc}>
              {item.desc}
            </Text>
          </View>
          <CustomPressable>
            <View style={styles.item__store}>
              <Image source={item.images[0].basket} style={styles.basket} />
              <Text style={styles.item__btn}>Buy</Text>
            </View>
          </CustomPressable>
        </View>
      </View>
    </CustomPressable>
  );

  const keyExtractor = (item) => item.id.toString();

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <InputFilter
        filterTitle={filterTitle}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <FlatList
        RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item__wrapper: {
    width: 350,
    height: 175,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  item__mainImage: {
    width: 100,
    height: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  itemImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  item__mainContent: {
    width: "70%",
    paddingVertical: 15,
    paddingLeft: 15,
  },
  item__titleWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  favourites: {
    width: 20,
    height: 20,
  },
  item__priceWrapper: {
    marginVertical: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textNewPrice: {
    fontSize: 24,
    fontWeight: "800",
    marginRight: 5,
    color: "red",
  },
  textOldPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textDecorationLine: "line-through",
  },
  textDesc: {
    fontSize: 12,
    fontWeight: "300",
    color: "black",
    marginBottom: 10,
  },
  item__store: {
    width: 125,
    height: 35,
    fontSize: 12,
    backgroundColor: "green",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  basket: {
    width: 25,
    height: 20,
  },
  item__btn: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    paddingLeft: 10,
  },
});
