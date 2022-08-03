import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#E23C44',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
})