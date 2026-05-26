import { storeType } from "@/types/storeTypes";
import { data } from "@/utils/store";
import { SafeAreaView, SectionList, Text, View } from "react-native";

export function SectionListComponent() {
    return (
        <SafeAreaView>
            <SectionList
                sections={data as storeType[]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }: { item: string }) => (
                    <View style={{ padding: 12 }}>
                        <Text>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { type } }) => (
                    <View style={{ padding: 16, backgroundColor: "#eee" }}>
                        <Text style={{ fontWeight: "bold" }}>{type}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
