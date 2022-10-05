import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import * as colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cardContainer: {
        width: '100%',
        paddingVertical: ms(20),
        paddingHorizontal: ms(20),
        elevation: 11,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: ms(14),
        fontWeight: 'bold',
        color: colors.theme,
    },
    cardButton: {
        height: ms(30),
        width: ms(50),
        backgroundColor: '#3486eb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ms(5)
    },
    loaderContainer: {
        height: ms(70),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loaderView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loaderView1: {
        height: ms(20),
        width: '70%'
    },
    loaderView2: {
        height: ms(30),
        width: '10%'
    }
})