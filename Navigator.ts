/** @format */

import App from './App';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'AppScreen', // this is a registered name for a screen
            icon: require('./img/avengers.png'),
            //   selectedIcon: require('./img/avengers-red.png'), // iOS only
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'SettingsScreen',
            icon: require('./img/avengers.png'),
            //   selectedIcon: require('./img/avengers-red.png'), // iOS only
            title: 'Screen Two'
        },
        {
            label: 'Three',
            screen: 'ActiveGamesScreen', // this is a registered name for a screen
            icon: require('./img/avengers.png'),
            //   selectedIcon: require('./img/avengers-red.png'), // iOS only
            title: 'Screen Three'
        },
        {
            label: 'Four',
            screen: 'ChallengePlayersScreen',
            icon: require('./img/avengers.png'),
            //   selectedIcon: require('./img/avengers-red.png'), // iOS only
            title: 'Screen Four'
        },
    ],
    drawer: {
        left: {
            // screen: 'MenuDrawerScreen'
            screen: 'MenuScreen',
            fixedWidth: 800,
        }
    }
});