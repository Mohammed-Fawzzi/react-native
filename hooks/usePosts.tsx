import { useState } from "react";
import axios from "axios";

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const data = response.data;
            setLoading(false);
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoading(false);
        }
    };

    return { posts, setPosts, fetchPosts, loading };
}