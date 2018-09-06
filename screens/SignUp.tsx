import * as React from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { Navigator } from 'react-native-navigation';
import AwesomeButton from 'react-native-really-awesome-button';
import { connect } from 'react-redux';

import * as t from 'tcomb-form-native';
// var t = require('tcomb-form-native');
// index.ios.js
// 'use strict';
const Form = t.form.Form;

// here we are: define your domain model
const User = t.struct({
    handle: t.String,
    password: t.String,              // a required string
    // surname: t.maybe(t.String),  // an optional string
    // age: t.Number,               // a required number
    // rememberMe: t.Boolean        // a boolean
});

var options = {}; // optional rendering options (see documentation)

// interface RootState {
//     users: {
//         id: number;
//         name: string;
//     }[];

//     user: {
//         handle: string;
//     };

//     boardState: {
//         id: number,
//         type: string,
//         col: string,
//         row: number,
//     }[];

//     column: {
//         'a': string[],
//         'b': string[],
//         'c': string[],
//         'd': string[],
//         'e': string[],
//         'f': string[],
//         'g': string[],
//     }

//     rTurn: boolean;
//     turnNumber: number;
//     connect4: number;
// }

interface ISignUpProps {
    navigator: Navigator;
    // signUp: () => void;
    // user: {
    //     handle: string,
    // };
}

export default class SignUp extends React.Component<ISignUpProps> {
    static navigatorStyle = {
        // tabBarHidden: true,
    };

    // constructor(props: ISignUpProps) {
    //     super(props);
    // }

    // onPress() {
    //     // call getValue() to get the values of the form
    //     const value = this.refs.form.getValue();
    //     if (value) { // if validation fails, value will be null
    //         console.log(value); // value here is an instance of Person
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>

                <Form
                    ref="form"
                    type={User}
                    options={options}
                />
                {/* <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableHighlight> */}

                {/* <TextInput
                    style={{ height: 40 }}
                    placeholder="handle"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 0, fontSize: 42 }}>
                    {this.props.user.handle.split(' ').map((word) => word).join(' ')}
                </Text> */}

                <AwesomeButton raiseLevel={5} width={300} onPress={() => this.props.navigator.resetTo({
                    screen: 'MenuScreen',
                    title: 'Menu',
                })}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Sign Up</Text>
                </AwesomeButton>

            </View>
        );
    }
}

// const SignUp = connect((state: RootState) => {
//     return {
//         user: state.user,
//     };
// }, (dispatch) => {
//     return {
//         signUp: () => dispatch({
//             type: 'SIGN_UP',
//             user: {
//                 id: 3,
//                 name: 'Michael',
//             }
//         }),
//     }
// })(PureSignUp);

// export default SignUp;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});