import { createStore } from 'redux';

interface RootState {
    users: {
        id: number;
        name: string;
    }[],

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
    // colA: string[];
    // colB: string[];
    // colC: string[];
    // colD: string[];
    // colE: string[];
    // colF: string[];
    // colG: string[];

    rTurn: boolean;
    turnNumber: number;
}

interface AddUserAction {
    type: 'ADD_USER';
    user: {
        id: number;
        name: string;
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

export const store = createStore((state: RootState, action: AddUserAction | AddTokenAction): RootState => {
    switch (action.type) {
        case 'ADD_USER':
            const newUsers = state.users.concat([action.user])
            return {
                ...state,
                users: newUsers
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
            const newTurn = !state.rTurn
            
            state.turnNumber++

            const newBoardState = state.boardState.concat([action.token])
            
            return {
                ...state,
                boardState: newBoardState,
                // colA: state.colA,
                // colB: state.colB,
                // colC: state.colC,
                // colD: state.colD,
                // colE: state.colE,
                // colF: state.colF,
                // colG: state.colG,
                rTurn: newTurn,
                turnNumber: state.turnNumber,
            }
    }
    return {
        users: [{ id: 1, name: 'Sam' }, { id: 2, name: 'Alam' }],
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
        // colA: [],
        // colB: [],
        // colC: [],
        // colD: [],
        // colE: [],
        // colF: [],
        // colG: [],
        rTurn: true,
        turnNumber: 1,
    }
})