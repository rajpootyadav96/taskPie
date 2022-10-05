import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import * as colors from '../../constants/colors'

export default StyleSheet.create({
    HeaderContainer: {
        height: ms(55),
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        elevation: 11,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    subContainer: {
        height: ms(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%'
    },
    img: {
        height: ms(24),
        width: ms(24),
        tintColor: colors.theme
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.theme
    },
    backButton: {
        height: ms(50),
        width: ms(50),
        justifyContent: 'center',
        alignItems: 'center',
    }
})
