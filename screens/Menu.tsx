import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

interface IMenuProps {
    navigator: Navigator;
}

export default class Menu extends React.Component<IMenuProps> {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ActiveGamesScreen',
                    title: 'Observe Active Games',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Observe Games</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ChallengePlayersScreen',
                    title: 'Challenge Players',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Challenge Players</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'GameScreen',
                    title: 'Play vs AI',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Play vs AI</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'GameScreen',
                    title: 'Play vs AI Zero',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Play vs AI Zero</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                {/* <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton>
                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'ScoreboardScreen',
                    title: 'Scoreboard',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scoreboard</Text>
                </AwesomeButton> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
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