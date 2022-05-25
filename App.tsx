import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import { LogBox } from "react-native";
import { ToastProvider } from 'react-native-toast-notifications'

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const Main = () => (
  <ToastProvider>
  <Provider theme={theme}>
    <App />
  </Provider>
  </ToastProvider>
);

export default Main;
