import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 7
    },
    header_text: {
        fontSize: 18,
        color: colors.background_color,
    }
})
