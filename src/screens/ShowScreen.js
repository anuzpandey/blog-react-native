import React, { useContext } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import colors from '../config/colors';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.blogTitle}>{blogPost.title}</Text>
            <Text style={styles.blogContent}>{blogPost.content}</Text>
            <Text style={styles.blogContent}>{blogPost.content}</Text>
            <Text style={styles.blogDate}>Created Date: {blogPost.createdDate}</Text>
            <View style={styles.categoryContainer}>
                <Text style={[styles.blogCategory, styles.bgBlue]}>{blogPost.category}</Text>
                <Text style={[styles.blogCategory, styles.bgGreen]}>{blogPost.category}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', { id: blogPost.id })}
                    style={[styles.button, styles.btnSuccess]}
                >
                    <Text style={styles.buttonText}>EDIT BLOG</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: colors.WHITE,
    },
    blogTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.BLUE.CORNFLOWER,
        marginBottom: 12,
    },
    blogContent: {
        fontSize: 16,
        textAlign: 'justify',
        color: colors.GREY,
        marginBottom: 12,
        lineHeight: 30,
    },
    blogDate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.GREY,
        marginBottom: 12,
        lineHeight: 30,
    },
    categoryContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    blogCategory: {
        fontSize: 14,
        color: colors.WHITE,
        padding: 8,
        borderRadius: 24,
        marginRight: 12,
        alignContent: 'center',
    },
    bgGreen: {
        backgroundColor: colors.GREEN,
    },
    bgBlue: {
        backgroundColor: colors.BLUE.CORNFLOWER,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    btnSuccess: {
        backgroundColor: colors.GREEN
    },
    btnDanger: {
        backgroundColor: colors.RED
    },
    button: {
        padding: 16,
        alignItems: 'center',
        borderRadius: 12,
        margin: 8,
        width: '40%'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default ShowScreen;
