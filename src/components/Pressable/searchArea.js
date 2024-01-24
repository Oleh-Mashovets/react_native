import React, { useState } from "react";
import {
  View,
  TextInput,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import CustomPressable from "./pressableWrapper";

export default function InputFilter({
  filterTitle,
  filteredData,
  setFilteredData,
}) {
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterIcon, setFilterIcon] = useState("unpressed");
  const [sortItem, setSortItem] = useState("unsorted");

  const toggleInputShow = () => {
    setShowInput(!showInput);
  };

  const toggleModalShow = () => {
    setShowModal(true);
  };

  const pressModalClose = () => {
    setShowModal(false);
    setShowFilterModal(false);
    filterSortItems();
  };

  const closeModalOutside = () => {
    setShowModal(false);
    setShowFilterModal(false);
  };

  const findTitleItem = (text) => {
    setFilter(text);
    filterTitle(text);
  };

  const clickFilterMenu = () => {
    setShowFilterModal(true);
  };

  const filterSortItems = () => {
    if (filteredData) {
      const newItems = sortItem === "expensive" ? "cheap" : "expensive";
      setSortItem(newItems);

      const sortedData = [...filteredData].sort((a, b) =>
        newItems === "expensive"
          ? a.newPrice - b.newPrice
          : b.newPrice - a.newPrice
      );
      setFilteredData(sortedData);
      setFilterIcon(newItems === "expensive" ? "pressed" : "unpressed");
    }
  };

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputBlock}>
        {showInput && (
          <>
            <TextInput
              style={styles.searchInput}
              onChangeText={findTitleItem}
              value={filter}
            />
            <CustomPressable
              style={styles.filterShape}
              onPress={clickFilterMenu}
            >
              <Text style={styles.filterButton}>Filter</Text>
            </CustomPressable>
            <Modal
              visible={showFilterModal}
              animationType="fade"
              transparent={true}
              onRequestClose={pressModalClose}
            >
              <TouchableWithoutFeedback>
                <View style={styles.filterModal}>
                  <TouchableOpacity
                    style={styles.filterTopBlock}
                    activeOpacity={1}
                    onPress={() => {}}
                  >
                    <View style={styles.choiceBlock}>
                      <TouchableWithoutFeedback onPress={filterSortItems}>
                        {filterIcon === "unpressed" ? (
                          <Image
                            source={require("../../../assets/unpressed.png")}
                            style={styles.choiceImage}
                          />
                        ) : (
                          <Image
                            source={require("../../../assets/pressed.png")}
                            style={styles.choiceImage}
                          />
                        )}
                      </TouchableWithoutFeedback>
                      <Text style={styles.cheapest} onPress={filterSortItems}>
                        lowest / highest price
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.filterBottomBlock}
                    activeOpacity={0}
                    onPress={() => {
                      closeModalOutside(true);
                    }}
                  ></TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </>
        )}
      </View>
      <View style={styles.buttonsBlock}>
        <CustomPressable onPress={toggleModalShow}>
          <Image
            source={require("../../../assets/menu.png")}
            style={styles.searchImage}
          />
        </CustomPressable>
        <CustomPressable onPress={toggleInputShow}>
          <Image
            source={require("../../../assets/search.png")}
            style={styles.searchImage}
          />
        </CustomPressable>
      </View>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={pressModalClose}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalWrapper}>
            <TouchableOpacity
              style={styles.topBlock}
              activeOpacity={0}
              onPress={closeModalOutside}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomBlock}
              activeOpacity={1}
              onPress={() => {}}
            >
              <Text style={styles.textModal} onPress={closeModalOutside}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  inputBlock: {
    width: "65%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  buttonsBlock: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 5,
  },
  searchInput: {
    width: "100%",
    height: 45,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },
  searchImage: {
    width: 35,
    height: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.1,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomBlock: {
    height: "50%",
    width: "100%",
    backgroundColor: "#0487E2",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topBlock: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textModal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
  },
  filterShape: {
    paddingHorizontal: 0,
    paddingTop: 10,
  },
  filterButton: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  filterModal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filterTopBlock: {
    height: "20%",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  choiceBlock: {
    height: 100,
    width: "100%",
    backgroundColor: "#0487E2",
    justifyContent: "flex-start",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  filterBottomBlock: {
    height: "80%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  choiceImage: {
    height: 30,
    width: 30,
  },
  cheapest: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
  },
});
