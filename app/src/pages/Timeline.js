import React, { Fragment, Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  View,
  Fab,
  List,
  ListItem,
  Thumbnail,
  Text,
  Badge,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Card,
  CardItem
} from "native-base";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import api from "../services/api";

const messages = [
  {
    key: 1,
    name: "Diego de Paula",
    avatar_url: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
    last_message: "Lorem ipsum",
    time: "18:20 PM"
  },
  {
    key: 2,
    name: "Claudio Orlandi",
    avatar_url:
      "https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g",
    last_message: "Lorem ipsum",
    time: "10:12 AM"
  }
];

const blogList = [
  {
    key: 1,
    title: "Gestão de produtos entrada",
    author: "Quantidade : 100",
    likes: 1290,
    comments: 129,
    time: "14 de Dezembro",
    prior: "56",
    prioridade: "Produto Prioritário:"
  }
];
const blogList2 = [
  {
    key: 1,
    title: "Gestão de pedidos Saída",
    author: "Quantidade : 38",
    likes: 1290,
    time: "14 de Dezembro"
  }
];

const list = [
  {
    key: 1,
    title: "Gestão de Operadores",
    time: "14 de Dezembro"
  }
];

const Messages = ({ messages }) => (
  <Fragment>
    <List>
      {messages.map(message => (
        <ListItem avatar key={message.key}>
          <Left>
            <Thumbnail source={{ uri: message.avatar_url }} />
          </Left>
          <Body>
            <Text>{message.name}</Text>
            <Text note>{message.last_message}</Text>
          </Body>
          <Right>
            <Text note>{message.time}</Text>
          </Right>
        </ListItem>
      ))}
    </List>
    <Fab
      direction="up"
      position="bottomRight"
      style={{ backgroundColor: "#005289" }}
    >
      <Icon type="FontAwesome" name="plus" />
    </Fab>
  </Fragment>
);

export default class Timeline extends Component {
  static navigationOptions = {
    title: "Dashboard",
    headerStyle: {
      backgroundColor: "#005289"
    },
    headerTintColor: "#ffffff"
  };

  handleLogin2 = async () => {
    this.navigateToTimeline2();
  };

  navigateToTimeline2 = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: "ListSaida" })
    );
  };

  handleLogin = async () => {
    this.navigateToTimeline();
  };

  navigateToTimeline = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: "ListDocas" })
    );
  };

  handle = async () => {
    this.navigateToTime();
  };

  navigateToTime = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: "ListPessoas" })
    );
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Tabs>
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="MaterialIcons" name="sync" />
                  <Text>Processos</Text>
                </TabHeading>
              }
            >
              <Content>
                {blogList.map(blog => (
                  <TouchableOpacity
                    key={blog.key}
                    style={styles.button}
                    onPress={this.handleLogin}
                  >
                    <Card key={blog.key} style={styles.button}>
                      <CardItem>
                        <Left>
                          <Body>
                            <Text>{blog.title}</Text>
                            <Text note>{blog.author}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody />
                      <CardItem>
                        <Left>
                          <Button transparent>
                            <Text>{blog.prioridade}</Text>
                            <Text>{blog.prior}</Text>
                          </Button>
                        </Left>
                        <Right>
                          <Text note>{blog.time}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                ))}
                {blogList2.map(blog => (
                  <TouchableOpacity
                    key={blog.key}
                    style={styles.button}
                    onPress={this.handleLogin2}
                  >
                    <Card key={blog.key} style={styles.button}>
                      <CardItem>
                        <Left>
                          <Body>
                            <Text>{blog.title}</Text>
                            <Text note>{blog.author}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody />
                      <CardItem>
                        <Left>
                          <Button transparent>
                            <Text>{blog.prioridade}</Text>
                            <Text>{blog.prior}</Text>
                          </Button>
                        </Left>
                        <Right>
                          <Text note>{blog.time}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                ))}
              </Content>
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="MaterialIcons" name="people-outline" />
                  <Text>Pessoas</Text>
                </TabHeading>
              }
            >
              <Content>
                {list.map(blog => (
                  <TouchableOpacity
                    key={blog.key}
                    style={styles.button}
                    onPress={this.handle}
                  >
                    <Card key={blog.key} style={styles.button}>
                      <CardItem>
                        <Left>
                          <Body>
                            <Text>{blog.title}</Text>
                            <Text note>{blog.author}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody />
                      <CardItem>
                        <Left>
                          <Button transparent>
                            <Text>{blog.likes}</Text>
                          </Button>
                        </Left>
                        <Right>
                          <Text note>{blog.time}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                ))}
              </Content>
            </Tab>

            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="FontAwesome" name="bell-o" />
                  <Text>Mensagens</Text>
                </TabHeading>
              }
            >
              <Messages messages={messages} />
            </Tab>
          </Tabs>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#005289"
  },
  header: {
    backgroundColor: "#005289"
  },
  container: {
    flex: 1
  }
});
