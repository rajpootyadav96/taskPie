import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { getData } from '../../utilities/asyncStorageHelper';
import styles from './style'

export default Details = () => {
    const [details, setDetails] = useState()

    useEffect(() => {
        {
            getData('data', function (data) {  // success
                console.log(data)
                if (data) {
                    setDetails(data)
                }
            },
                function () { } // failure
            )
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'Details'} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Saveed Data</Text>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.Text}>{details?.title}</Text>
                            <Text style={styles.Text}>{details?.id}</Text>
                            <Text style={styles.Text}>{details?.userId}</Text>
                            <Text style={styles.Text}>{details?.completed}</Text>

                        </View>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}