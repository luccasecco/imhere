import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  titleName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 56,
    
  },
  description: {
    color: '#6B6B6B',
    marginTop: 5
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    height: 55,
    color: '#FDFCFE',
    padding: 15,
    fontSize: 18,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listEmpty: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  }
})