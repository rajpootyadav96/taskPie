import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style'

export default Profile = () => {
    const [heroUrl, setHeroUrl] = useState()

    const UploadFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            setHeroUrl(image?.path)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Profile'} />
            <View style={styles.subContainer} />
            <View style={styles.view1}>
                <ImageBackground style={styles.bgImg}
                    source={{ uri: heroUrl }}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.cameraButton}
                        onPress={() => UploadFromCamera()}>
                        <Image style={styles.icon}
                            source={require('../../constants/Images/camera.png')} />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.text}>John Parker</Text>
            </View>

            <View>
            </View>
        </SafeAreaView>
    )
}