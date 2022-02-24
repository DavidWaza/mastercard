import { StyleSheet,View, TouchableOpacity ,Text} from "react-native";



const Button =(props)=>{
    return(
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#f65314",
        width:150,
        height:50,
        borderRadius:50,
        elevation:2
    },
    text:{
        textAlign:"center",
        padding:13,
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
})