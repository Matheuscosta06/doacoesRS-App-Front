// Carrossel.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

const entries = [
    { title: 'Legend 1', illustration: '../../../assets/test1.jpg' },
    { title: 'Legend 2', illustration: '../../../assets/test2.jpg' },
    { title: 'Legend 3', illustration: '../../../assets/test3.jpg' },
 
];

const Carrossel = () => {
    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={{ uri: item.illustration }} style={styles.image} />
            <Text style={styles.legend}>{item.title}</Text>
        </View>
    );

    return (
        <Carousel
            data={entries}
            renderItem={renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            layout={'default'}
        />
    );
};

export default Carrossel;
