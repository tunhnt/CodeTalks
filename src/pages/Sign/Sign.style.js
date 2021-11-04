import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_color
    },

    body_container: {
        flex: 1
    },
    header_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    header: {
        color: '#fff',
        fontSize: 30,
        alignSelf: "center"
    }
});