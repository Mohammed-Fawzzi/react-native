import usePosts from "@/hooks/usePosts";
import { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Posts() {
    const { posts, fetchPosts, loading } = usePosts();

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#2020aa" />;
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {posts.map((post: any) => (
                <View key={post.id} style={styles.card}>
                    <Text style={styles.title}>
                        {post.title}
                    </Text>
                    <Text style={styles.body}>
                        {post.body}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
    },

    contentContainer: {
        padding: 16,
        gap: 16,
    },

    card: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
    },

    body: {
        fontSize: 14,
        lineHeight: 22,
        color: "#6b7280",
    },
});