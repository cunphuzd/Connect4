import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

// const AwesomeButton = require('react-native-really-awesome-button').default;

interface ActiveGamesProps {
    navigator: Navigator;
}

export default class ActiveGames extends React.Component<ActiveGamesProps> {
    static navigatorStyle = {
        tabBarHidden: true,
    };
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({
                    tabIndex: 2,
                })}>
                    <Text>Active Games</Text>
                </TouchableOpacity>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24, fontWeight:"700" }}>ALEX vs GORDON</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24, fontWeight:"700" }}>MICHAEL vs GALILEO</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24, fontWeight:"700" }}>LEVINE vs AI</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24, fontWeight:"700" }}>DONNA vs AI ZERO</Text>
                </AwesomeButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
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