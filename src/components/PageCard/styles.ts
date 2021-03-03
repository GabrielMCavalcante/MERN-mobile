/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pageCard: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 8,
    padding: 4,
    backgroundColor: '#d6d6d6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardVisual: {
    textAlign: 'center',
    borderRadius: 100,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  cardVisualText: {
    color: '#e6e6e6',
    fontSize: 80,
    fontWeight: 'bold',
  },

  pageName: {
    fontWeight: 'bold',
    color: '#666',
  }
});

export default styles;
