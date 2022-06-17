import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './FoodCard.styles';

const FoodCard = ({ food, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <Image style={styles.image} source={{ uri: food.strMealThumb }} />
                <View style={styles.opacityview} ></View>
                <Text style={styles.text} numberOfLines={1} >{food.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default FoodCard;