import {StyleSheet,Dimensions} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_color
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white'
    },

    logo_container: {
        flex: 1,
        justifyContent: 'center'
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