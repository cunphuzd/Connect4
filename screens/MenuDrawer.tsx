import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-navigation';

interface MenuProps {
    navigator: Navigator;
}

export default class Menu extends React.Component<MenuProps> {
    public render() {
        return (
            <View style={{backgroundColor: 'red', flex: 1}}>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({
                    tabIndex: 2,
                })}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
}