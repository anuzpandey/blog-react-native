import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context } from '../context/BlogContext';
import colors from '../config/colors';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <TouchableOpacity onPress={addBlogPost} style={styles.button}>
                <Text style={styles.buttonText}>ADD BLOG POST</Text>
            </TouchableOpacity>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', {id: item.id})}
                        >
                            <View style={styles.row}>
                                <Text style={styles.postTitle}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Icon
                                        name="x-circle"
                                        size={22}
                                        style={styles.blogIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    button: {
        marginBottom: 12,
        padding: 16,
        alignItems: 'center',
        backgroundColor: colors.BLUE.CORNFLOWER,
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderWidth: 2,
        borderColor: colors.BLUE.CORNFLOWER,
        // borderBottomLeftRadius: 12,
        // borderBottomRightRadius: 12,
        borderRadius: 12,
        marginBottom: 8,
    },
    postTitle: {
        fontSize: 16,
        color: colors.BLUE.CORNFLOWER,
    },
    blogIcon: {
        color: colors.RED,
    },
});

export default IndexScreen;
