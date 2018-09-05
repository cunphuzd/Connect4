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

interface IGameProps {
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
        'a': string[],
        'b': string[],
        'c': string[],
        'd': string[],
        'e': string[],
        'f': string[],
        'g': string[],
        [key: string]: string[];
    }
    rTurn: boolean;
    turnNumber: number;
    connect4: number;
}

// enum Columns {
//     a,
//     b,
//     c,
//     d,
//     e,
//     f,
//     g,
// }

class PureGame extends React.Component<IGameProps> {
    static navigatorStyle = {
        tabBarHidden: true,
    };

    socket: SocketIOClient.Socket | null;

    constructor(props: IGameProps) {
        super(props)
        this.socket = null;
    }

    componentWillMount() {
        this.socket = io('http://localhost:3030');
        // console.log('connecting to socketio')
        this.socket.on('add-token', (col: string) => {
            // const col = c
            // console.log(col);
            // console.log(this.props.column);
            const token =
                this.props.rTurn ?
                    { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                    { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
            this.props.addToken(token);
        })
    }

    componentWillUnmount() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    // declareWinner() {
    //     if (this.props.connect4 > 1) {
    //         alert('Red Wins!');
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.board}>
                    {['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((c: string) => {
                        return ( // COLUMNS
                            <TouchableWithoutFeedback key={c} onPress={() => {
                                // const col = c
                                // const token =
                                //     this.props.rTurn ?
                                //         { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                //         { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                                if (this.props.column[c].length >= 6 || this.props.connect4 > 0) {
                                    return;
                                } else {
                                    this.socket.emit('add-token', c);
                                    // this.props.addToken(token) // TESTING BOTH COLORS
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
                        // const col = 'a'
                        // const token =
                        //     this.props.rTurn ?
                        //         { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                        //         { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        // this.props.addToken(token);
                        this.socket.emit('add-token', 'a');
                    }}>
                        <Text>
                            A
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'b');
                    }}>
                        <Text>
                            B
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'c');
                    }}>
                        <Text>
                            C
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'd');
                    }}>
                        <Text>
                            D
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'e');
                    }}>
                        <Text>
                            E
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'f');
                    }}>
                        <Text>
                            F
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'g');
                    }}>
                        <Text>
                            G
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        const colOrder = 'abcdefg'
                        const col = colOrder[Math.floor(Math.random() * 7)]
                        const token =
                            this.props.rTurn ?
                                { id: this.props.turnNumber, type: 'R', col: col, row: this.props.column[col].length } :
                                { id: this.props.turnNumber, type: 'B', col: col, row: this.props.column[col].length };
                        if (this.props.column[col].length >= 6 || this.props.connect4 > 0) {
                            return;
                        } else {
                            this.props.addToken(token)
                        }
                    }}>
                        <Text>
                            R
                    </Text>
                    </AwesomeButton>
                    <AwesomeButton raiseLevel={5} width={50} onPress={() => {
                        this.socket.emit('add-token', 'g');

                    }}>
                        <Text>
                            H
                    </Text>
                    </AwesomeButton>
                </View>
                <Text>rTurn: {JSON.stringify(this.props.rTurn)}, boardState.length: {JSON.stringify(this.props.boardState.length)}, connect4:{this.props.connect4}</Text>
            </View>
        );
    }
}

const Game = connect((state: RootState) => {
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
        },
        connect4: state.connect4,
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
        // backgroundColor: 'blue',
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
