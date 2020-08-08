import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content, category) => {
                addBlogPost(title, content, category, () => {
                    navigation.navigate('Index');
                });
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
