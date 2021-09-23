import React, {useState} from 'react'
import { ScrollView,View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog,faToolbox,faFan,faKey,faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../menu/index'

 const CarItem = () => {
     const[locked, setLocked]= useState(true)
     const clicklock= () =>{
         if(locked){
             setLocked(false)
         }else{
             setLocked(true)
         }
     }
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={ require("../../assets/background.png")}
                style={styles.backgroundImage } />
           {/* header  */}
           <View style={styles.header} >
               <TouchableOpacity>
                    <FontAwesomeIcon icon={ faCog } style={styles.icon}  size={24}  />
                </TouchableOpacity>
                 <Text style={styles.headertitle}>Model Y</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={ faToolbox } style={styles.icon}  size={24}  />
                </TouchableOpacity>
           </View>
            {/* battery section */}
           <View style={styles.batterysection}>
                <Image
                    source={require("../../assets/battery.png")}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>150 mi</Text>
           </View>
           {/* status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            <ScrollView>
                {/* controlicon */}
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon icon={ faFan } style={styles.icon}  size={24}  />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon icon={ faKey } style={styles.icon}  size={24}  />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clicklock}>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon icon={ locked ? faLock : faUnlockAlt  } style={styles.icon}  size={24}  />
                        </View>
                    </TouchableOpacity>

                    
                </View>
                {/* Menu */}
                <Menu/>
            </ScrollView>
        </View>
    )
}

export default CarItem;

