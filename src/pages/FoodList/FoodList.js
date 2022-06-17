import React from 'react';
import { View, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import FoodCard from '../../components/Card/FoodCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './FoodList.styles';

const FoodList = ({ route,navigation }) => {

    const {strCategory} = route.params
    const {data, error, isLoading} = useFetch(`${Config.API_FOODS}${strCategory}`);

    if(isLoading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    const handleFoodSelect = (idMeal) => {
        navigation.navigate('FoodDetail',{idMeal});
    }

    const renderFood = ({ item }) =>
        <FoodCard food={item} onSelect={() => handleFoodSelect(item.idMeal) }/>


    return (
        <View style={styles.container}>
            <FlatList data={data.meals} renderItem={renderFood} />
        </View>
    );
}

export default FoodList;