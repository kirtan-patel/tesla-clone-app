import React from 'react'
import { ScrollView,View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMusic, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styles from './styles';
import items from './items';

 const Menu = () => {
    return (
        <View style={styles.menuItem}>
            {items.map(items=>(
                <TouchableOpacity key={items.id}>
                    <View style={styles.menuRow}> 
                        <FontAwesomeIcon icon={ items.icon } style={styles.icon}  size={24}  />
                        <View style={styles.menuTextBox}>
                            <Text style={styles.menuText}>{items.title}</Text>
                            {items.subTitle &&(
                                <Text style={styles.subtitle}>{items.subTitle}</Text>
                            )}
                        </View>
                        <FontAwesomeIcon icon={ faChevronRight} style={styles.arrowicon}  size={24}  />
                    </View>
                </TouchableOpacity>
            ))}
            
        </View>
    )
}
export default Menu;
