import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

interface ChallengePlayersProps {
    navigator: Navigator;
}

export default class ChallengePlayers extends React.Component<ChallengePlayersProps> {
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
                <Text style={{color: 'white', fontSize: 24}}>BIG MAN SAM</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24}}>HALAL ALAM</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24}}>KING CURLS</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24}}>MARCO BIZ</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24}}>HEADPHONES JON</Text>
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