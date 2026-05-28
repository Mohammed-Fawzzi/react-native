import usePosts from "@/hooks/usePosts";
import { TextInput, View, Pressable, Text, StyleSheet } from "react-native";

export default function AddPostForm({
    title,
    setTitle,
    body,
    setBody,
    addPost,
}: any) {
    return (
        <View style={styles.formContainer}>
            <TextInput
                placeholder="Post title..."
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />

            <TextInput
                placeholder="Write your post..."
                value={body}
                onChangeText={setBody}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={[styles.input, styles.textarea]}
            />

            <Pressable
                style={styles.button}
                onPress={addPost}
            >
                <Text style={styles.buttonText}>
                    Add Post
                </Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        marginBottom: 20,
        gap: 12,
    },

    input: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: "#f9fafb",
    },

    textarea: {
        minHeight: 120,
    },

    button: {
        backgroundColor: "#2563eb",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});