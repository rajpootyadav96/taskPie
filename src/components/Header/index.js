import React from 'react'
import { View, Image, TouchableOpacity, ImageBackground, Text } from 'react-native'
import styles from './style'

export default function Header(props) {

    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity style={styles.backButton}>
                <Image style={styles.img} source={require('../../constants/Images/back.png')} />
            </TouchableOpacity>
            <View style={styles.subContainer}>
                <Text style={[styles.title, props.title]}>{props.title}</Text>
            </View>
        </View>
    )
}
