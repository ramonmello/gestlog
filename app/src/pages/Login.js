import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  Image
} from "react-native";

import { StackActions, NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

// import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    username: "",
    password: ""
  };

  handleLogin = async () => {
    const { username, password } = this.state;

    if (!username.length) return;
    if (!password.length) return;

    await AsyncStorage.setItem("@Gestlog:username", username);
    await AsyncStorage.setItem("@Gestlog:password", password);
    if (username == "Admin" && password == "Admin") {
      this.navigateToTimeline();
    }
  };

  navigateToTimeline = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Timeline" })]
    });

    this.props.navigation.dispatch(resetAction);
  };

  handleInputChangeUsername = username => {
    this.setState({ username });
  };
  handleInputChangePassword = password => {
    this.setState({ password });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={require("../img/logotipo.png")} />
          <Input
            placeholder="Usuário"
            leftIcon={<Icon name="user" size={24} color="black" />}
            style={styles.input}
            value={this.state.username}
            onChangeText={this.handleInputChangeUsername}
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />
          <Input
            placeholder="Senha"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            style={styles.input}
            onChangeText={this.handleInputChangePassword}
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Image
            style={styles.logoDelage}
            source={require("../img/delage.gif")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#005289",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    width: 300,
    height: 130,
    resizeMode: "contain"
  },
  logoDelage: {
    padding: 80,
    width: 150,
    height: 65,
    resizeMode: "contain"
  }
});
