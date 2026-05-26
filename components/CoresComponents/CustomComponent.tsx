import { Platform, Text } from "react-native";

export default function CustomComponent({ name, age }: { name: string; age: number }) {
    return (
        <>
            <Text>Your name is <Text style={{
                fontWeight: 'bold', ...Platform.select(
                    {
                        ios: { color: 'blue' },
                        android: { color: 'red' },
                        default: { color: 'black' }
                    }
                )
            }}>{name}</Text></Text>
            <Text>You are <Text style={{ fontWeight: 'bold' }}>{age}</Text> years old</Text>
        </>
    )
}
