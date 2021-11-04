import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.main_color,
        flex: 1
    },
    body_header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderColor: "#fff"
    },
    header_text: {
        color: '#fff'
    }
})
