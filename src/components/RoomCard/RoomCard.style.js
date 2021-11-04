import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
       width: windowWidth / 2.2,
       height: windowHeight / 4,
       margin: 7,
       borderRadius: 5,
       borderWidth: 0.1,
       borderColor: "f2f2f2",
       justifyContent: 'center',
       alignItems: 'center'
       
    },
    title: {
        color: colors.main_color,
        fontSize: 18,
    }
})
