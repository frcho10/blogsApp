import { Text, View } from "react-native"
import HomeView from "../HomeView"



export default function BlogView () {
    return (
        <HomeView tabSelected={0}>
        <View>
            <Text>Hola Blog</Text>
        </View>
        </HomeView>
    )
}