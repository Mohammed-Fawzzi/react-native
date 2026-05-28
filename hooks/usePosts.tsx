import { useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Post } from "@/types/userPosts";

export default function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const pageLimit = 5;

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageLimit}`);
            const newData = response.data;
            setLoading(false);
            setPosts((prevPosts) =>
                page === 1
                    ? newData
                    : [...prevPosts, ...newData]
            );
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoading(false);
        }
    };

    const addPost = async () => {
        try {
            const addedPost = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: title || "New Post",
                body: body || "This is a new post.",
                userId: 1,
            });
            setPosts((prevPosts) => [
                {
                    ...addedPost.data,
                    id: Date.now(),
                },
                ...prevPosts,
            ]);
            setTitle("");
            setBody("");
            Toast.show({
                type: 'success',
                text1: 'Post Added',
                text2: 'Your post has been added successfully.',
            });
        } catch (error) {
            console.error("Error adding post:", error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to add post. Please try again.',
            });
        }
    };

    return { posts, setPosts, fetchPosts, loading, page, setPage, title, setTitle, body, setBody, addPost };
}