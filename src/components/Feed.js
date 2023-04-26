import React from 'react';
import { StyleSheet, View, FlatList, Image, Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 250,
    },
    card: {
        margin: 16,
        backgroundColor: '#aee3a4',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        marginHorizontal: 16,
        marginBottom: 16,
    },
});

const Feed = () => {
    const data = [
        { id: 1, imageUrl: 'https://picsum.photos/id/756/200/300' },
        { id: 2, imageUrl: 'https://picsum.photos/id/238/200/300' },
        { id: 3, imageUrl: 'https://picsum.photos/id/243/200/300' },
        { id: 4, imageUrl: 'https://picsum.photos/id/154/200/300' },
        { id: 5, imageUrl: 'https://picsum.photos/id/242/200/300' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>Description</Text>
        </View>
    );

    return (

        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Feed;
