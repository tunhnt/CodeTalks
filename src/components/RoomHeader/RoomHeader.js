import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import styles from './RoomHeader.style';

const RoomHeader = ({text, handleBack}) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} >
                <Icon name="arrow-left" size={30} color={colors.main_color} />
            </TouchableOpacity>
            <Text style={styles.header_text} >{text}</Text>
            <View />
        </View>
    )
}

export default RoomHeader;