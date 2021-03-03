/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#b6b6b6',
    padding: 8,
  },

  headerTitle: {
    color: '#666',
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  pages: {
    padding: 10,
  },

  availablePages: {
    color: '#666',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  pagesGrid: {
    flex: 1,
  }
});

export default styles;
