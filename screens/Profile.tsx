import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-navigation';

interface ProfileProps {
    navigator: Navigator;
    selectedItem: {
        id: number,
        name: string,
    }
}

export default class Profile extends React.Component<ProfileProps> {
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({
                    tabIndex: 2,
                })}>
                    <Text>{this.props.selectedItem.name}'s Profile</Text>
                    <Text>Hi, {this.props.selectedItem.name}.</Text>
                </TouchableOpacity>
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