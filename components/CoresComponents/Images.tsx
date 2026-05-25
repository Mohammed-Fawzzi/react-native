import { Image, ImageBackground, Text, View } from 'react-native'
import { styles } from '../IndexStyles'

export default function Images() {
    return (
        // Basic - Image
        // <Image source={require("@/assets/images/icon.png")} style={styles.image}></Image>

        // Online - Image
        // <Image source={{
        //     uri: "https://reactnative.dev/img/tiny_logo.png"
        // }} style={styles.image}>
        // </Image>

        // ImageBackground Image
        <ImageBackground source={{
            uri: "https://reactnative.dev/img/tiny_logo.png"
        }} style={styles.image}>

            <Text style={styles.text}>Hello World</Text>
        </ImageBackground>
    )
}
