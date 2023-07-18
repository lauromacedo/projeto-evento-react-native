import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    marginTop: 24,
    padding: 16,
    color: '#FDFCFE',
    fontSize: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#21CF67',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginLeft: 12
  },
  form: {
    marginTop: 12,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row'
  },

  textEmpty: {
    flex: 1,
    color: "#FFF",
    textAlign: "center"

  }
});