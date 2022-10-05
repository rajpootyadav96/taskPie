import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import * as colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.theme,
    },
    subContainer: {
        height: ms(500),
        width: ms(300),
        borderRadius: ms(10),
        borderWidth: ms(1),
        backgroundColor: 'white',
        borderColor:colors.theme,
    }
})