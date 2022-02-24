import { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [data, setData] = useState({
    email: " ",
    password: " ",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
    
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const signupNavigation=()=>{
      navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
         <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Animatable.View animation="pulse" style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        {/* email */}
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color="black" />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          <Animatable.View animation="bounceIn">
            {data.check_textInputChange ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : null}
          </Animatable.View>
        </View>
        {/* password */}
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={20}
            color="black"
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textSign}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={signupNavigation}
            style={{
              ...styles.button,
              backgroundColor: "white",
              borderColor: "green",
              borderWidth: 1,
            }}
          >
            <Text style={{ ...styles.textSign, color: "#009387" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 415,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    width: 415,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text_header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginVertical: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    padding: 10,
    marginBottom: -40,
    backgroundColor: "#009387",
    elevation: 2,
    borderRadius: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
