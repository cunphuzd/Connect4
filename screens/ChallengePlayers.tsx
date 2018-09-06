import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

interface IChallengePlayersProps {
    navigator: Navigator;
}

interface IChallengePlayersState {
    players: { handle: string }[];
}

export default class ChallengePlayers extends React.Component<IChallengePlayersProps, IChallengePlayersState> {
    static navigatorStyle = {
        tabBarHidden: true,
    };

    constructor(props: IChallengePlayersProps) {
        super(props)
        this.state = {
            players: []
        }
    }

    async componentWillMount() {
        const userId = 4;
        const data: any = await fetch(`http://localhost:3030/api/users/${userId}`, {
            method: 'Get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const players = await data.json();
        this.setState({
            players: players,
        })
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>Players</Text>
                {this.state.players.map((player) => {
                    return (
                        <AwesomeButton key={player.handle} raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                            screen: 'GameScreen',
                            title: 'Game',
                        })}>
                            <Text style={{ color: 'white', fontSize: 24, fontWeight: "700" }}>{player.handle}</Text>
                        </AwesomeButton>
                    )
                })}
                {/* <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
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
                </AwesomeButton> */}
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