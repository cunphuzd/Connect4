/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Navigator } from 'react-native-navigation';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface RootState {
  users: {
      id: number;
      name: string;
  }[];

  boardState: {
      id: number,
      type: string,
      col: string,
      row: number,
  }[];

  column: {
      'a': string[],
      'b': string[],
      'c': string[],
      'd': string[],
      'e': string[],
      'f': string[],
      'g': string[],
  }

  rTurn: boolean;
  turnNumber: number;
  connect4: number;
}

interface Props {
  addUser: () => void;
  navigator: Navigator;
  users: {
    id: number,
    name: string,
  }[];
}

class PureApp extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.addUser()}>
          <Text style={styles.welcome}>
            ADD
          </Text>
        </TouchableOpacity>
        {/* <FlatList
          data={this.props.users} // BACKEND
          renderItem={(row) => (
            <TouchableOpacity key={row.item.id} onPress={() => this.props.navigator.resetTo({
              screen: 'ProfileScreen',
              title: 'This is for ' + row.item.name,
              passProps: { // passes data below into Info props
                selectedItem: row.item,
              },
              // animated: true,
              // animationType: 'fade',
              // backButtonHidden: true,
            })}>
              <Text style={styles.welcome}>
                Name: {row.item.name}
              </Text>
            </TouchableOpacity>
          )}>
        </FlatList> */}
        <TouchableOpacity onPress={() => this.props.navigator.push({
          screen: 'MenuScreen',
          title: 'Menu'
        })}>
          <Text style={styles.welcome}>MENU</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const App = connect((state: RootState) => {
  return {
    users: state.users
  };
}, (dispatch) => {
  return {
    addUser: () => dispatch({
      type: 'ADD_USER',
      user: {
        id: 3,
        name: 'Mike',
      }
    })
  }
})(PureApp);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
