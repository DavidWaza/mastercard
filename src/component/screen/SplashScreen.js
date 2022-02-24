import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  const pressNavigation = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require("../../../assets/MC.png")}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text}>Stay connected with everyone!</Text>
        <Text style={styles.subText}>Sign in with account</Text>
        <View style={styles.buttonSign}>
          <TouchableOpacity style={styles.button} onPress={pressNavigation}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 415,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    width: 415,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },
  text: {
    fontSize: 30,
    padding: 7,
    color: "#003153",
  },
  subText: {
    color: "#2e5090",
    paddingHorizontal: 7,
  },
  buttonSign: {
    marginLeft: 170,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#f65314",
    width: 150,
    height: 50,
    borderRadius: 50,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    padding: 13,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
