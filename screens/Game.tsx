import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { Navigator } from 'react-native-navigation';
import { connect } from 'react-redux';
import AwesomeButton from 'react-native-really-awesome-button';

import io from 'socket.io-client';

import 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text as SVGText,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

interface Props {
    navigator: Navigator;
    addUser: () => void;
    users: {
        id: number,
        name: string,
    }[];
    addToken: (token: {
        id: number,
        type: string,
        col: string,
        row: number,
    }, ) => void;
    boardState: {
        id: number,
        type: string,
        col: string,
        row: number,
    }[];
    column: {
        'a': ( string | number ) [],
        'b': ( string | number ) [],
        'c': ( string | number ) [],
        'd': ( string | number ) [],
        'e': ( string | number ) [],
        'f': ( string | number ) [],
        'g': ( string | number ) [],
    }
    // colA: [],
    // colB: [],
    // colC: [],
    // colD: [],
    // colE: [],
    // colF: [],
    // colG: [],
    rTurn: boolean;
    turnNumber: number;
}

class PureGame extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.board}>
                    {['a', 'b', 'c', 'd', 'e', 'f', 'g'].map(c => {
                        return ( // COLUMNS
                            <TouchableWithoutFeedback key={c} onPress={() => {
                                const col = c
                                const token =
                                    this.props.rTurn ?
                                        { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                        { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                                if (this.props.column[col].length >= 6) {
                                    return;
                                } else {
                                    this.props.addToken(token) // TESTING BOTH COLORS
                                }
                                // UNCOMMENT BELOW IF YOU WANT TO ACTIONS TO BE DEPENDENT ON TURNS
                                // if (this.props.rTurn) {
                                //     this.props.addToken(token, column)
                                // }
                            }}>
                                <View style={styles.column} >
                                    {[0, 1, 2, 3, 4, 5].map(r => {
                                        return ( // INDIVIDUAL TOKEN ROW
                                            <Svg key={r}
                                                height="32"
                                                width="32"
                                            >
                                                <Circle
                                                    cx="16"
                                                    cy="16"
                                                    r="15"
                                                    // IS THERE A BETTER WAY TO WRITE THE CODE BELOW?
                                                    stroke={this.props.column[c][r] === undefined ? 'black'
                                                        : this.props.column[c][r] === 'R' ? 'red' : 'blue'}
                                                    strokeWidth="1.5"
                                                    fill={this.props.column[c][r] === undefined ? 'white'
                                                        : this.props.column[c][r] === 'R' ? 'red' : 'blue'}
                                                    fillOpacity=".3"
                                                />
                                            </Svg>
                                        )
                                    })}
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </View>
                <View style={styles.letters}>
                    <Text style={styles.welcome}>{this.props.column.a}</Text>
                    <Text style={styles.welcome}>{this.props.column.b}</Text>
                    <Text style={styles.welcome}>{this.props.column.c}</Text>
                    <Text style={styles.welcome}>{this.props.column.d}</Text>
                    <Text style={styles.welcome}>{this.props.column.e}</Text>
                    <Text style={styles.welcome}>{this.props.column.f}</Text>
                    <Text style={styles.welcome}>{this.props.column.g}</Text>
                </View>
                <View style={styles.buttons}>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'a'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            A
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'b'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            B
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'c'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            C
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'd'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            D
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'e'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            E
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'f'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            F
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const col = 'g'
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        this.props.addToken(token);
                    }}>
                        <Text>
                            G
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const socket = io('http://localhost:3030');
                        socket.emit('drop-token', 'H');
                    }}>
                        <Text>
                            H
                    </Text>
                    </AwesomeButton>
                </View>
                <Text>{JSON.stringify(this.props.rTurn)}{JSON.stringify(this.props.boardState.length)}</Text>
            </View>
        );
    }
}

const Game = connect((state) => {
    return {
        users: state.users,
        boardState: state.boardState,
        rTurn: state.rTurn,
        turnNumber: state.turnNumber,
        column: {
            'a': state.column.a,
            'b': state.column.b,
            'c': state.column.c,
            'd': state.column.d,
            'e': state.column.e,
            'f': state.column.f,
            'g': state.column.g,
        }
        // colA: state.colA,
        // colB: state.colB,
        // colC: state.colC,
        // colD: state.colD,
        // colE: state.colE,
        // colF: state.colF,
        // colG: state.colG,
    };
}, (dispatch) => {
    return {
        addUser: () => dispatch({
            type: 'ADD_USER',
            user: {
                id: 3,
                name: 'Michael',
            }
        }),
        addToken: (token) => dispatch({
            type: 'ADD_TOKEN',
            token: {
                id: token.id,
                type: token.type,
                col: token.col,
                row: token.row,
            },
        })
    }
})(PureGame);

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'blue',
    },
    letters: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'green',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'purple',
    },
    board: {
        // flex: 3,
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
    },
    column: {
        width: 34,
        flexDirection: 'column-reverse',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        // borderWidth: 1,
    },
    welcome: {
        flex: 1,
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
