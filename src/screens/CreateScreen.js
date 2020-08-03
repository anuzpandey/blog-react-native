import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import colors from '../config/colors';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const { addBlogPost } = useContext(Context);

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
                onPress={() => {
                    addBlogPost(title, content, category, () => {
                        navigation.navigate('Index');
                    });
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        color: colors.BLUE.PICTON
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

export default CreateScreen;
