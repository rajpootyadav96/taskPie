import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import styles from './style'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { saveData } from '../../utilities/asyncStorageHelper';
import { useNavigation } from '@react-navigation/core';



export default About = () => {
    const [data, setData] = useState([])
    const navigation = useNavigation();


    // get data from api
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setTimeout(() => {
                        setData(data)
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    // save data into async storage
    const Save = (data) => {
        saveData('data', (data),
            function () {
                console.log('success');
                navigation.navigate('Details')
            },
            function () { console.log('failure'); }
        )
    }


    const renderData = (dataItem) => {
        return (
            <View style={{ padding: 10 }}>
                <View
                    style={styles.cardContainer}>
                    <View style={{ width: '80%' }}>
                        <Text numberOfLines={1}
                            style={styles.title}>
                            {dataItem?.item?.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.cardButton}
                        onPress={() => Save(dataItem?.item)}>
                        <Text
                            style={{ color: 'white' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'About'} />
            {data?.length === 0 ?
                <View style={{ backgroundColor: 'white' }}>
                    {Array(5).fill(0).map((item, index) => (
                        <View
                            key={index.toString()}
                            style={styles.loaderContainer}>
                            <SkeletonPlaceholder>
                                <View style={styles.loaderView}>
                                    <View style={styles.loaderView1} />
                                    <View style={styles.loaderView2} />
                                </View>
                            </SkeletonPlaceholder>
                        </View>
                    ))}
                </View>
                :
                <FlatList
                    data={data}
                    renderItem={renderData}
                />}
        </SafeAreaView>
    )
}