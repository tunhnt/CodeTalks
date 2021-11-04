import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import database from '@react-native-firebase/database';

import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../modal/ContentInputModal';
import parseContentData  from '../../utils/parseContentData';
import RoomCard from '../../components/RoomCard';

const Rooms = ({navigation}) => {

    const [inputModalVisible, setInputModalVisible ] = useState(false); 
    const [contentList, setContentList ] = useState([]);

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();

                // if(!contentData) {
                //     return;
                // }    bu kısım bir hataya neden olduğu için aşağıda parseContentData içerisine || {} ekledim...

                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
            });
    }, []);

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    function sendContent(content) {
        const contentObject = {
            text: content,
        };

        database().ref('rooms/').push(contentObject);
    }

    function handleRoom(item) {
        navigation.navigate('Room', {item});
    }

    const renderContent = ({item}) => <RoomCard room={item} handleRoom={() => handleRoom(item)} />

    return (
        <View style={styles.container}>
            <FlatList 
                data={contentList}
                renderItem={renderContent}
                numColumns={2}
                style={styles.flat_list}
            />

            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal 
                visible={inputModalVisible} 
                onClose={handleInputToggle} 
                onSend={handleSendContent}
                my_placeholder="Oda adı..."
            />
        </View>
    )
}

export default Rooms;