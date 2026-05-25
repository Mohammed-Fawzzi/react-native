import Buttons from "@/components/CoresComponents/Buttons";
import Images from "@/components/CoresComponents/Images";
import Modals from "@/components/CoresComponents/Modals";
import PressableComponent from "@/components/CoresComponents/PressableComponent";
import StatusBarComponent from "@/components/CoresComponents/StatusBarComponent";
import { styles } from "@/components/IndexStyles";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {/* React Native - Images */}
      {/* <View style={styles.container}>
        <Images />
        <Images />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem eius, laudantium nihil optio distinctio similique ratione facere sequi nam deserunt rem accusamus, veniam debitis hic. Harum iure, aut reiciendis eum laborum commodi ab dolores esse nemo architecto blanditiis rem nulla facilis molestiae! Facere, possimus! Iste et repudiandae, laboriosam sequi aperiam nesciunt ea nisi quos libero rem. Vel iusto repudiandae ad consectetur, voluptates provident beatae, laborum veniam voluptatibus blanditiis aut tempora quia consequatur rerum inventore. Aliquid at quaerat illo doloremque debitis ad veritatis similique corrupti beatae architecto, facilis molestias! Ullam minima dolor eveniet, culpa aliquam assumenda beatae aspernatur, sunt officia non in nulla ipsa voluptatum facere harum labore molestias, ab similique obcaecati porro provident voluptates veritatis vitae! Facere dolorum ea esse dignissimos suscipit provident eaque, facilis eos error adipisci delectus tempora dolor vitae rem. Deserunt, tempora reprehenderit nostrum dicta ipsa placeat consectetur earum minus illum dolorum ut sunt possimus molestiae incidunt natus unde exercitationem odio quibusdam quam corporis fugiat sapiente doloribus. Omnis doloremque impedit autem enim consectetur deserunt corporis reiciendis corrupti, eius cumque, molestias ducimus vero quod provident officiis. Quaerat dolor recusandae sequi quidem aliquam inventore corporis placeat consectetur facilis! Quas voluptas quasi reiciendis, molestias, cumque aliquam vero eveniet tenetur obcaecati corrupti voluptatum, aperiam possimus necessitatibus ipsam ipsa optio accusamus deleniti dolor neque! Deleniti, voluptate adipisci, nisi in error sunt rem natus illo sequi iure hic numquam quae. Modi quos ea debitis vitae libero reiciendis maiores incidunt sunt, porro voluptas quam, voluptatibus praesentium? Debitis non sed repellendus quidem! Corporis, quos saepe blanditiis laudantium voluptatibus ad quia enim nostrum, tenetur neque omnis voluptatum maxime voluptatem dolor at itaque eveniet qui dolorum. Sit tempora, omnis quibusdam vel iste dolores inventore earum facilis dicta. Magnam nesciunt amet illo aspernatur vitae ad, pariatur, repellat eaque explicabo libero voluptatem fugiat ea. Provident voluptate nam ex in facere nostrum saepe, aperiam blanditiis. Quidem culpa numquam molestias blanditiis modi facere tenetur. Provident neque et nam! Repellat animi, itaque delectus cum expedita molestias? Quis cum ullam, doloribus quia alias necessitatibus assumenda cumque quos nisi quo minima nobis, corrupti ipsam, autem et beatae totam perspiciatis qui voluptatum laudantium dolorum harum maxime rerum repellat. Alias voluptatem ad ut labore officia omnis minima itaque dignissimos? Ullam non recusandae eveniet quidem totam perferendis distinctio! Explicabo expedita cupiditate beatae, inventore in, voluptatum error quia impedit ad facere enim id necessitatibus. Ipsam impedit amet quia consectetur facilis incidunt obcaecati magni eum, fuga minus veniam, animi aspernatur. Exercitationem at nihil officiis reiciendis quae voluptates debitis quod, distinctio fugit enim atque id laudantium est temporibus totam voluptatem? Similique natus magnam dignissimos quas iste maiores minima officiis blanditiis quod quis, suscipit ea, in culpa nihil consequatur sunt quasi repellendus dicta perferendis. Vel quidem et voluptas ullam suscipit voluptate debitis doloremque, numquam doloribus a amet itaque possimus dolorem, veniam minima corrupti! Harum iusto aliquam adipisci totam voluptatibus dignissimos, praesentium soluta voluptas excepturi odit, deleniti, iure distinctio omnis. Maxime illo totam qui provident culpa, necessitatibus perferendis esse. Inventore laudantium officiis autem vero, cum odit est quam in unde! Voluptas.</Text>
      </View> */}

      {/* React Native - Buttons */}
      {/* <View style={styles.container}>
        <Buttons />
      </View> */}

      {/* React Native - Pressable */}
      {/* <View style={styles.container}>
        <PressableComponent />
      </View> */}

      {/* React Native - Modals */}
      {/* <View style={styles.container}>
        <Modals />
      </View> */}

      {/* React Native - StatusBar */}
      <View style={styles.container}>
        <StatusBarComponent />
      </View>
    </ScrollView>
  );
}
