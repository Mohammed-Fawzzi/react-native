import { TextInput, View } from "react-native";

export default function InputComponents() {
    return (
        <View>
            <TextInput placeholder="Enter text here..." style={style.input} keyboardType="numeric" secureTextEntry={true}></TextInput>
            <TextInput placeholder="Description..." style={style.textArea} multiline={true}></TextInput>
        </View>
    )
}

const style = {
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
    },
    textArea: {
        width: 300,
        height: 100,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
    }
}