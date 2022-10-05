import React from 'react';
import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { ImageSlider } from "react-native-image-slider-banner";
import styles from './style';

export default Home = () => {
    return (
        <SafeAreaView>
            <Header title={'Home'} />
            <ImageBackground resizeMode='cover' style={styles.imgBackground} source={require('../../constants/Images/backgroundimg.jpg')}>
                <View style={{ top: -19 }}>
                    <ImageSlider
                        data={[
                            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
                            { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
                            { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' },
                            { img: 'https://images.pexels.com/photos/3586517/pexels-photo-3586517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
                            { img: 'https://images.pexels.com/photos/3597448/pexels-photo-3597448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
                        ]}
                        autoPlay={false}
                        closeIconColor="#fff"
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}