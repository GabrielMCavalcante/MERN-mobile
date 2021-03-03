/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import '../../firebase/init';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import api from '../../services/api';

import PageCard from '../../components/PageCard';

import styles from './styles';
import { capitalize } from '../../util/stringCapitalize';

function Dashboard() {
  const [availablePages, setAvailablePages] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    dynamicLinks().resolveLink("/share")
    .then(link => {
      const nameParam = link.url.split('?')[1].split('=')[1];
      if (nameParam) {
        navigation.navigate("userpage", { name: capitalize(nameParam) });
      }
    }).catch(err => {
      console.log({...err});
    });

    setLoading(true);
    async function fetchPages() {
      const response = await (await api.get('/pages')).data;

      const pages = response.data as { _id: string, name: string }[];

      const cardList: JSX.Element[] = [];
      for (const page of pages) {
        cardList.push(
          <PageCard key={page._id} name={page.name} onCardPress={name => onCardPress(name)} />
        );
      }
      setAvailablePages([...cardList]);
      setLoading(false);
    }

    fetchPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCardPress = (name: string) => {
    navigation.navigate('userpage', { name });
  };

  return (
    <View style={styles.dashboard}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome</Text>
        </View>
        <ScrollView style={styles.pages}>
          <Text style={styles.availablePages}>Available pages: {availablePages.length}</Text>
          {loading ? <ActivityIndicator color="#666" size="large" /> : availablePages}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
