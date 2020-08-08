import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const [category, setCategory] = useState(initialValues.category);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Blog Title</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.textInput}
                placeholder={'Blog Title Here'}
            />
            <Text style={styles.label}>Blog Content</Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.textInput}
                placeholder={'Blog Content Here'}
            />
            <Text style={styles.label}>Blog Category</Text>
            <TextInput
                value={category}
                onChangeText={text => setCategory(text)}
                style={styles.textInput}
                placeholder={'Blog Category Here'}
            />

            <TouchableOpacity
                onPress={() => onSubmit(title, content, category)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
        category: ''
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        color: colors.BLUE.PICTON,
    },
    textInput: {
        fontSize: 18,
        borderBottomWidth: 1.3,
        borderBottomColor: colors.BLUE.PICTON,
        marginBottom: 8,
    },
    button: {
        marginTop: 12,
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
});

export default BlogPostForm;
