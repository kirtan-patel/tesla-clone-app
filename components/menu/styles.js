import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItem:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    icon:{
        color:"white"
    },
    menuText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase"

    },
    menuRow:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15
    },
    menuTextBox:{
        flexGrow: 1,

    },
    arrowicon:{
        color: "#4D4D4E"
    },
    subtitle:{
        color: "grey",
        marginLeft: 15,
        fontSize: 14
    }
})

export default styles;