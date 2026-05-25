import { Pressable, Text } from "react-native";

export default function PressableComponent() {
    return (
        <Pressable
            // Runs once when the user taps and releases the component
            onPress={() => console.log("Press")}

            // Runs immediately when the user starts touching the component
            onPressIn={() => console.log("Press In")}

            // Runs when the user removes their finger from the component
            onPressOut={() => console.log("Press Out")}

            // Runs when the user presses and holds for a while
            onLongPress={() => console.log("Press Long")}
        >
            <Text>Click Me</Text>
        </Pressable>
    )
}