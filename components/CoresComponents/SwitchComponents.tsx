import { useState } from "react";
import { Switch } from "react-native";

export default function SwitchComponents() {
    const [switchValue, setSwitchValue] = useState(true);
    return (
        <Switch value={switchValue} onValueChange={(value) => setSwitchValue(value)} trackColor={{ false: "red" }} />
    )
}
