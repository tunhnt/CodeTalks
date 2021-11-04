import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const base_style = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },

    text: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.main_color,
        },
    
        text: {
            ...base_style.text,
            color: '#fff',
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#fff',
        },
    
        text: {
            ...base_style.text,
            color: colors.background_color,
        }
    })
};