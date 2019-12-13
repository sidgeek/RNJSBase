import React, { useState, useRef } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MySelect() {
  const [filterList, setFilterList] = useState(["Show all", "Show moderators"]);
  const modalDropdownRef = useRef(null);

  const onSelect = value => {
    console.log("dg>> value:", value);
  };

  const showDropDown = () => {
    modalDropdownRef.current.show();
  };

  return (
    <TouchableWithoutFeedback onPress={showDropDown}>
      <View style={styles.container}>
        <ModalDropdown
          defaultIndex={1}
          options={filterList}
          style={styles.select}
          textStyle={styles.textSelect}
          dropdownStyle={styles.dropdownStyle}
          dropdownTextHighlightStyle={{ backgroundColor: "#e9ebee" }}
          onSelect={onSelect}
          ref={r => {
            modalDropdownRef.current = r;
          }}
        />
        <Icon name="angle-down" size={25} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#e7ebee",
    alignItems: "center"
  },
  select: {
    height: 40,
    justifyContent: "center",
    borderRadius: 2,
    paddingLeft: 6,
    paddingRight: 4
  },
  textSelect: {
    fontSize: 20
  },
  dropdownStyle: {
    width: 150,
    borderRadius: 10,
    height: -1
  }
};
