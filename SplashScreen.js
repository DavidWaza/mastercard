import { StyleSheet, Text, View,Dimension } from 'react-native';


const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/splash.png")}/>
            </View>
            <View style={styles.footer }>

            </View>

        </View>
    )
}
export default SplashScreen;

const {height} = Dimension.get("screen")
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#009387"
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    }
})