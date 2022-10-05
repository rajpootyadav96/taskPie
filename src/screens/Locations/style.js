import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import * as colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: ms(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldText: {
        fontSize: ms(25),
        marginVertical: ms(16),
    },
    Button: {
        paddingHorizontal: ms(30),
        paddingVertical: ms(10),
        backgroundColor: colors.theme,
        borderRadius: ms(5)
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    text1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        color: colors.theme,
        fontWeight: 'bold',
    }
})