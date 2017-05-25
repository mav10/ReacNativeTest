/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ImportView from './app/components/ImportView';
import EventsInfo from './app/components/ImportView/EventsInfo';
import { StackNavigator } from 'react-navigation';
import  Settings from './app/components/Settings';
import Help from './app/components/Help';
import Integrations from './app/components/Integrations';

const NFS = StackNavigator({
  ImportView: {screen: ImportView},
  EventsInfo: {screen: EventsInfo},
  Settings: {screen: Settings},
  Help: {screen: Help},
  Integrations: {screen: Integrations}

}, {
  headerMode: 'none' // <--------------------
});

AppRegistry.registerComponent('NFS', () => NFS);
