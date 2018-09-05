import { createStore } from 'redux';

interface RootState {
    users: {
        id: number;
        name: string;
    }[],

    user: {
        handle: string;
    },

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

const initialState = {
    users: [{ id: 1, name: 'Sam' }, { id: 2, name: 'Alam' }],
    user: { handle: "mike" },
    boardState: [],
    column: {
        'a': [],
        'b': [],
        'c': [],
        'd': [],
        'e': [],
        'f': [],
        'g': [],
    },
    rTurn: true,
    turnNumber: 1,
    connect4: 0,
}

interface AddUserAction {
    type: 'ADD_USER';
    user: {
        id: number;
        name: string;
    }
}

interface SignUpAction {
    type: 'SIGN_UP';
    user: {
        handle: string;
    }
}

interface AddTokenAction {
    type: 'ADD_TOKEN';
    token: {
        id: number,
        type: string,
        col: string,
        row: number,
    };
}

export const store = createStore((state: RootState = initialState, action: AddUserAction | AddTokenAction | SignUpAction): RootState => {
    switch (action.type) {
        case 'ADD_USER':
            const newUsers = state.users.concat([action.user])
            return {
                ...state,
                users: newUsers
            }
        case 'SIGN_UP':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TOKEN':
            switch (action.token.col) {
                case 'a':
                    state.column.a.push(action.token.type);
                    break;
                case 'b':
                    state.column.b.push(action.token.type);
                    break;
                case 'c':
                    state.column.c.push(action.token.type);
                    break;
                case 'd':
                    state.column.d.push(action.token.type);
                    break;
                case 'e':
                    state.column.e.push(action.token.type);
                    break;
                case 'f':
                    state.column.f.push(action.token.type);
                    break;
                case 'g':
                    state.column.g.push(action.token.type);
                    break;
            }

            const newBoardState = state.boardState.concat([action.token])

            const colOrder = 'abcdefg';
            const tokenColorInPlay = newBoardState.filter(token => token.type === (state.rTurn ? 'R' : 'B'))
            const checkConnect4 = () => {
                for (let i = 0; i < tokenColorInPlay.length; i++) {
                    for (let j = 0; j < tokenColorInPlay.length; j++) {
                        for (let k = 0; k < tokenColorInPlay.length; k++) {
                            for (let l = 0; l < tokenColorInPlay.length; l++) {
                                if ((colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[j].col) + 1 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[k].col) + 2 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[l].col) + 3)
                                    &&
                                    (tokenColorInPlay[i].row === tokenColorInPlay[j].row &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[k].row &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[l].row)
                                ) {
                                    state.connect4++;
                                } else if ((colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[j].col) &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[k].col) &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[l].col))
                                    &&
                                    (tokenColorInPlay[i].row === tokenColorInPlay[j].row + 1 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[k].row + 2 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[l].row + 3)
                                ) {
                                    state.connect4++;
                                } else if ((colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[j].col) + 1 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[k].col) + 2 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[l].col) + 3)
                                    &&
                                    (tokenColorInPlay[i].row === tokenColorInPlay[j].row + 1 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[k].row + 2 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[l].row + 3)
                                ) {
                                    state.connect4++;
                                } else if ((colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[j].col) - 1 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[k].col) - 2 &&
                                    colOrder.indexOf(tokenColorInPlay[i].col) === colOrder.indexOf(tokenColorInPlay[l].col) - 3)
                                    &&
                                    (tokenColorInPlay[i].row === tokenColorInPlay[j].row + 1 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[k].row + 2 &&
                                        tokenColorInPlay[i].row === tokenColorInPlay[l].row + 3)
                                ) {
                                    state.connect4++;
                                }
                            }
                        }
                    }
                }
            }
            checkConnect4();

            state.turnNumber++

            return {
                ...state,
                boardState: newBoardState,
                rTurn: !state.rTurn,
                turnNumber: state.turnNumber,
                connect4: state.connect4,
            }
    }
    return initialState;
})