import { useState } from "react";
import {
    Button,
    Modal,
    Text,
    View,
    StyleSheet
} from "react-native";

export default function Modals() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <View style={styles.container}>

            <Button
                title="Open Modal"
                onPress={() => setIsOpen(true)}
            />

            <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <Text>Important Info</Text>

                        <Button
                            title="Close"
                            onPress={() => setIsOpen(false)}
                        />

                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
});