import * as React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

interface SettingProps {
    navigator: Navigator;
}

export default class Setting extends React.Component<SettingProps> {
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({
                    tabIndex: 2,
                })}>
                    <Text>Settings</Text>
                </TouchableOpacity>
                <AwesomeButton raiseLevel={5} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                <Text style={{color: 'white', fontSize: 24}}>Mwahahahaha!!!</Text>
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