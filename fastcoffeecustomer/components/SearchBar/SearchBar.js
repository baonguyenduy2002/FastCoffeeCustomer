import React from "react";
import { StyleSheet, TextInput, View, Keyboard, TouchableOpacity, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, data, setFilter}) => {
  
  const searchFilterFunction = (text) => {
    if(text){
        const newData = data.filter(item => {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        setFilter(newData);
    } else {
      setFilter(data);
    }
}
  
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={(text) => {
            setSearchPhrase(text);
            searchFilterFunction(text);
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("");
              searchFilterFunction("");
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              setSearchPhrase("");
              searchFilterFunction("");
            }}
          >
            <Text
                style={{
                    color: '#2676FF',
                    fontSize: 17,
                    fontWeight: '500'

                }}
            >Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
    heigh: 40,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    alignItems: "center",
    opacity: 0.5,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    opacity: 0.5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
  button: {
    marginHorizontal: 10,
  },
});