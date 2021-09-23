import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";



const styles= StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor:"black"
    },
    header: {
        marginTop: 40,
        marginLeft: 20,
        marginRight:20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",

    },
    headertitle:{
        color: "white",
        fontWeight:"bold",
        fontSize: 16,
        alignItems:"center",
        justifyContent:"center"
    },
    icon:{
        color:"white"
    },
    backgroundImage:{
        width: "100%",
        height: "100%",
        resizeMode:"cover",
        position: "absolute",

    },
    batterysection:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    batteryImage:{
        height: 26,
        width: 70,
        marginRight: 12
    },
    batteryText:{
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    status:{
      alignItems: "center",
      marginBottom: 20
    },
    statusText:{
        color: "white",
        
    },
    controls:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 175

    },
    controlsButton:{
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25,
        
    }
})

export default styles;