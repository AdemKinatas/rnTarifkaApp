import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';

import styles from './FoodDetail.styles';

const FoodDetail = ({ route }) => {

    const { idMeal } = route.params;
    const { data, error, isLoading } = useFetch(`${Config.FOOD_DETAIL}${idMeal}`);

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: data.meals[0].strMealThumb }} style={styles.image} />
            <View style={styles.cardBody}>
                <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                <Text style={styles.country}>{data.meals[0].strArea}</Text>
            </View>
            <View style={styles.border}></View>
            <View style={styles.cardBody}>
                <Text style={styles.instructions}>{data.meals[0].strInstructions}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        Linking.openURL(data.meals[0].strYoutube);
                    }}
                >
                    <Text style={styles.buttonText}>Watch On Youtube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


export default FoodDetail;