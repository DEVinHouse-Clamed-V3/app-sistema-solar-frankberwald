import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewSafe: {
    flex: 1
  },
  outerContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    margin: 40,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  planetView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  planetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: 350,
    height: 350,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: '#000',
    elevation: 150

  },
  planetImg: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 5,
    marginBottom: 5
  },
  planetName: {
    fontSize: 24,
    color: '#fff'
  },
  planetInfo: {
    textAlign: 'left',
    fontSize: 18,
    color: '#fff',
    lineHeight: 24
  },
  planetInfoView: {
    alignItems: 'left',
  },
  navButtonView: {
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-between',
    width: '100%'
  },
  navButton: {
    padding: 10,
    backgroundColor: '#cc91c8',
    borderRadius: 5
  },
  navButtonText: {
    color: '#fff',
    fontSize:24
  }
});