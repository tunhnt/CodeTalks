import React, {useState, useEffect} from 'react';
import { View, FlatList, Text } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Room.style';
import RoomHeader from '../../components/RoomHeader'
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../modal/ContentInputModal';
import MessageCard from '../../components/MessageCard';
import parseContentData  from '../../utils/parseContentData';

const Room = ({route, navigation}) => {

    const {item} = route.params;

    const [inputModalVisible, setInputModalVisible ] = useState(false); 
    const [contentList, setContentList ] = useState([]);

    useEffect(() => {
        database()
            .ref(`messages/${item.id}/`)
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
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0], // username'i almak için 
            date: (new Date()).toISOString(),
        };

        database().ref(`messages/${item.id}/`).push(contentObject);
    }


    function handleBack(){
        navigation.goBack();
    }

    const renderContent = ({item}) => <MessageCard message={item} />
    // HER ODANIN MESAJI AYRI OLACAK bunu yap

    return(
        <View style={styles.container}>
            <RoomHeader text={item.text} handleBack={handleBack} />           
            <FlatList 
                ListHeaderComponent={() => (
                    <View style={styles.body_header}>        
                        <Text style={styles.header_text}>{item.text} odası kuruldu!</Text>
                    </View>
                )}
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal 
                visible={inputModalVisible} 
                onClose={handleInputToggle} 
                onSend={handleSendContent}
                my_placeholder="Mesajın..."
            />
        </View>
    );
}

export default Room;