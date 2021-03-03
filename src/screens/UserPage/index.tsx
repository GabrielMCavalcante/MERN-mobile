/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import '../../firebase/init';
import messaging from '@react-native-firebase/messaging';

import styles from './styles';
import { capitalize } from '../../util/stringCapitalize';

function UserPage() {
  const { name } = useRoute().params as { name: string };

  const sendNotification = async () => {
    const message = {
      data: {
        title: 'New Message!',
        body: 'Notification from ' + capitalize(name),
      },
    }
    messaging().sendMessage(message).then(() => {
      console.log('Message sent: ' + message.data.title);
    }).catch(err => {
      console.log('Error whilst sending notification: ' + err);
    });
  };

  return (
    <View >
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageMessage}>This page is for {name}</Text>

        <RectButton onPress={sendNotification} style={styles.notificationBtn}>
          <Text style={styles.notificationBtnText}>Send Notification</Text>
        </RectButton>
      </SafeAreaView>
    </View>
  );
};

export default UserPage;
