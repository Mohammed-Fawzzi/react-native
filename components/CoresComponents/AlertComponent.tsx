import { Alert, Button } from "react-native";

export default function AlertComponent() {
    return (
        <>
            <Button title="Toggle Alert" onPress={() => Alert.alert("Alert", "Are you sure?", [
                { text: "OK", onPress: () => Alert.alert("OK Pressed", "Your Account has been deleted.") },
                { text: "Cancel", onPress: () => Alert.alert("Cancel Pressed", "Operation cancelled."), style: "cancel" }
            ])}></Button>
        </>
    )
}
