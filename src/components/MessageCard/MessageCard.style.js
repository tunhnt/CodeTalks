import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        padding: 7,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'column',
        borderRadius: 10
    },
    inner_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    user: {
        color: "#000"
    },
    date: {
        color: "#000",
        fontStyle: "italic"
    },
    title: {
        color: "#000",
        fontWeight: 'bold'

    },
    footer: {
        flex: 1,
    },
    dislike_container: {
        alignSelf: "flex-end",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        
        
    },
    dislike_count_container: {
        marginRight: 7,
        backgroundColor: colors.darkgreen,
        padding: 2,
        borderRadius: 10

    },
    dislike_count_text: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 11
    },
    dislike_text: {
        fontWeight: "bold",
        color: colors.darkgreen
    },
});