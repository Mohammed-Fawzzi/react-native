import { Button } from "react-native";

export default function Buttons() {
    return (
        <Button title="Click Me" color="red" onPress={() => console.log(`Clicked`)} disabled={true} />
    )
}
