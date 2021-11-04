import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './RoomCard.style';

const MessageCard = ({room, handleRoom}) => {

    return(
        <TouchableOpacity style={styles.container} onPress={handleRoom}>
            <Text style={styles.title}> {room.text} </Text>
        </TouchableOpacity>
    );
};

export default MessageCard;