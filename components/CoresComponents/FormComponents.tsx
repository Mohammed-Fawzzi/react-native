import { Button, Text, TextInput, View } from "react-native";

export default function FormComponents() {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>Registration Form</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter your name:</Text>
            <TextInput placeholder="Enter your name here..." style={style.input}></TextInput>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter your age:</Text>
            <TextInput placeholder="Enter your age here..." style={style.input} secureTextEntry={true} keyboardType="numeric"></TextInput>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter your email:</Text>
            <TextInput placeholder="Enter your email here..." style={[style.input, { marginBottom: 15 }]} multiline={true}></TextInput>
            <Button title="Submit"></Button>
        </View>
    )
}

const style = {
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "#ccc"
    },
}