import { users } from "@/utils/users";
import { Button, FlatList, SafeAreaViewBase, Text, View } from "react-native";
import { User } from "@/types/userTypes";

export default function FlatListComponents() {
    return (
        <FlatList
            data={users as User[]}
            renderItem={({ item, index }: { item: User, index: number }) => (
                <View style={styles.container} key={index}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.age}</Text>
                </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListEmptyComponent={() =>
                <View style={{ padding: 20, backgroundColor: "lightcoral", borderRadius: 10 }}>
                    <Text style={{ marginBottom: 10 }}>No users found.</Text>
                    <Button title="Add User" />
                </View>
            }
            ListHeaderComponent={() =>
                <View style={{ padding: 20, marginBottom: 20, backgroundColor: "lightcoral", borderRadius: 10 }}>
                    <Text>User List</Text>
                </View>
            }
            ListFooterComponent={() =>
                <View style={{ padding: 20, marginTop: 10, backgroundColor: "lightcoral", borderRadius: 10 }}>
                    <Text>End of List</Text>
                </View>
            }
        />
    );
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
    },
    separator: {
        height: 30,
    }
}