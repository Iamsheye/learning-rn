/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import IndexScreen from './src/IndexScreen';

AppRegistry.registerComponent(appName, () => IndexScreen);
