import { Navigation } from 'react-native-navigation';

import App from '../App';

import Settings from './Settings';
import Profile from './Profile';
import Menu from './Menu';
import MenuDrawer from './MenuDrawer';
import ActiveGames from './ActiveGames';
import ChallengePlayers from './ChallengePlayers';
import Scoreboard from './Scoreboard';
import Game from './Game';

import { store } from '../store';
import { Provider } from 'react-redux'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('AppScreen', () => App, store, Provider);
  Navigation.registerComponent('SettingsScreen', () => Settings, store, Provider);
  Navigation.registerComponent('ProfileScreen', () => Profile, store, Provider);
  Navigation.registerComponent('MenuScreen', () => Menu, store, Provider);
  Navigation.registerComponent('MenuDrawerScreen', () => MenuDrawer, store, Provider);
  Navigation.registerComponent('ActiveGamesScreen', () => ActiveGames, store, Provider);
  Navigation.registerComponent('ChallengePlayersScreen', () => ChallengePlayers, store, Provider);
  Navigation.registerComponent('GameScreen', () => Game, store, Provider);
  Navigation.registerComponent('ScoreboardScreen', () => Scoreboard, store, Provider);
}