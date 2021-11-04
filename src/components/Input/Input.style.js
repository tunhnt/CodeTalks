import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        borderRadius: 5,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        color: '#fff'
        //padding: Platform.OS === 'android' ? 5 : 5,
    }
});