import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.styles';

const CategoryCard = ({ category,onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoryCard;
