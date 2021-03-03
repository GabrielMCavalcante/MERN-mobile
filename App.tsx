/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import PushNotification from 'react-native-push-notification';

import Dashboard from './src/screens/Dashboard';
import UserPage from './src/screens/UserPage';

function App() {
  const Stack = createStackNavigator();

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const unsubscribe = messaging().onMessage(message => {
          console.log('Received notification with title: ' + message.data?.title);
          showNotification(message);
        });

        return unsubscribe();
      }
    }

    requestUserPermission();
  }, []);

  const showNotification = (message: any) => {
    PushNotification.localNotification({
      title: message.data?.title!,
      message: message.data?.body!,
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='dashboard'>
        <Stack.Screen name='dashboard' component={Dashboard} />
        <Stack.Screen name='userpage' component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;