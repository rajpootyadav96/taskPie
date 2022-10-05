import { StyleSheet } from "react-native";
import { ms } from 'react-native-size-matters';
import * as colors from '../../constants/colors'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalBody: {
        backgroundColor: 'white',
        height: ms(200),
        width: ms(300),
        borderRadius: ms(10),
        elevation: ms(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: ms(1),
    },
    galaryButton: {
        width: '100%',
        paddingVertical: ms(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtName: {
        fontSize: 14,
        color: colors.theme,
        fontWeight: 'bold',
    },
    subContainer: {
        width: '100%',
        height: ms(150),
        backgroundColor: 'gray',
    },
    view1: {
        width: '100%',
        height: ms(200),
        alignItems: 'center'
    },
    bgImg: {
        height: ms(120),
        width: ms(120),
        borderRadius: ms(60),
        top: ms(-50),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'lightblue'
    },
    cameraButton: {
        backgroundColor: 'white',
        height: ms(24),
        width: ms(24),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ms(12),
        top: ms(-5),
        left: ms(-5),
        elevation: 11,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: ms(3),
    },
    icon: {
        height: ms(16),
        width: ms(16),
        resizeMode: 'contain',
        tintColor: colors.theme,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#038cfc'
    }
})