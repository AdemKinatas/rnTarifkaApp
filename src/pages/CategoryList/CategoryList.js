import React from 'react';
import { View, FlatList } from 'react-native';
import Config from 'react-native-config'; 
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/Card/CategoryCard';

import styles from './CategoryList.styles';

const CategoryList = ({navigation}) => {

    const {data, error, isLoading} = useFetch(Config.API_CATEGORY);

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('FoodList',{strCategory});
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />

    return (
        <View style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategory} />
        </View>
    );
}
export default CategoryList;
