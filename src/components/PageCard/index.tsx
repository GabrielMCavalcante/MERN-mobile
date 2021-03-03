/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getRandomColor } from '../../util/getRandomColor';
import { capitalize } from '../../util/stringCapitalize';

import styles from './styles';

interface PageCardProps {
  name: string;
  onCardPress: (name: string) => void;
}

function PageCard({ name, onCardPress }: PageCardProps) {
  return (
    <RectButton onPress={() => onCardPress(capitalize(name))} style={styles.pageCard}>
      <View style={{...styles.cardVisual, backgroundColor: getRandomColor() }}>
        <Text style={styles.cardVisualText}>{capitalize(name).charAt(0)}</Text>
      </View>
      <Text style={styles.pageName}>Page for: {capitalize(name)}</Text>
    </RectButton>
  )
};

export default PageCard;
