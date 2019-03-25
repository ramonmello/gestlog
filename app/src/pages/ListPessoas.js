import React, { Component } from "react";
import axios from "axios";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid
} from "react-native";
import { PricingCard } from "react-native-elements";
import api from "../services/api";
export default class ListPessoas extends Component {
  static navigationOptions = {
    title: "Lista de Pessoas",
    headerStyle: {
      backgroundColor: "#005289"
    },
    headerTintColor: "#ffffff"
  };
  state = {
    products: []
  };
  async componentsDidMount() {
    const response = await api.get("getProdutoSubtipo");
    this.setState({ products: response.data });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={styles.ListItem}>
              <View style={styles.item}>
                <Text> {item.key}</Text>
              </View>
              <View style={styles.item}>
                <Text> {item.quant} </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const list = [
  {
    key: "Gilberto Souza",
    quant: "1"
  },
  {
    key: "Rafael Lopes",
    quant: "11"
  },
  {
    key: "Viviane Valter",
    quant: "10"
  },
  {
    key: "Renata Farias",
    quant: "38"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  ListItem: {
    padding: 10,
    fontSize: 18,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    flex: 1,
    flexDirection: "row"
  },
  item: {
    width: 150,
    height: 50
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => ListPessoas);
