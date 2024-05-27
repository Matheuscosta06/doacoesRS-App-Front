import { View, Text, Image } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { ScrollView } from "react-native-gesture-handler";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardPrincipal}>
          <Image
            style={styles.fotoRS}
            source={require("../../../assets/mapa.png")}
          />
          <Text style={styles.sobreA}>Sobre a</Text>
          <Text style={styles.novaG}>NovaGenix</Text>
          <Text style={styles.solut}>Solutions</Text>
        </View>
        <View style={styles.cardObj}>
          <Text style={styles.tituloObj}>
            Um pouco sobre nosso objetivo com esse projeto:
          </Text>
          <Text style={styles.textObj}>
            Desde o início, a equipe de desenvolvedores sabia que criar um site
            para organizar doações no Rio Grande do Sul seria especial. Com
            especialistas em várias áreas, a missão era criar uma plataforma
            intuitiva e eficiente. O designer criou uma interface amigável,
            enquanto os desenvolvedores trabalharam no código e na
            infraestrutura. O gerente de projetos coordenava as tarefas, e o
            responsável pela comunicação lia feedbacks e conectava-se com ONGs e
            doadores. Superaram desafios técnicos e emocionais. No lançamento,
            ver as doações e pedidos de ajuda concretizados foi gratificante. O
            site continua a crescer, ajudando muitos gaúchos e mostrando o poder
            da tecnologia e da colaboração.
          </Text>
        </View>
        <View style={styles.cardEquipe}>
          <hr style={styles.linha1}></hr>
          <Text style={styles.nomeEquipe}>NovaGenix Solutions</Text>
          <View style={styles.cardImg}>
            <Image
              style={styles.fotoEquipe}
              source={require("../../../assets/imgEquipe.jpg")}
            />
          </View>
          <hr style={styles.linha2}></hr>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Enrico.png")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Enrico Lona</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Enrico.png")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Enrico Lona</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Enrico.png")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Felipe Pedro</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Night.jpeg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>João Victor</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Enrico.png")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Matheus Carvalho</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Enrico.png")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Matheus Gomes</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Zambon.jpg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Matheus Zambon</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
