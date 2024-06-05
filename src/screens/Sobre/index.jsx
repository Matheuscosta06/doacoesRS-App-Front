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
              source={require("../../../assets/enrico.jpg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Enrico Lona</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>Um membro essencial da nossa equipe, Enrico é Comunicativo e dedicado, ele cursa Desenvolvimento de Sistemas no Senai e está no 3° ano do Ensino Médio no Sesi. Trazendo energia e dinamismo para nosso time.






            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/fp.jpeg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Felipe Pedro</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
             Felipe é um membro com uma personalidade forte e um espírito de liderança marcante, ele se destaca em qualquer desafio que enfrenta. Fazendo dele uma peça chave para o nosso sucesso coletivo.
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
            João é um dos membros mais criativos e dedicados da nossa equipe. Com uma mente inovadora e um comprometimento exemplar, João traz ideias frescas e soluções eficazes. Sua dedicação incansável é uma inspiração para todos nós.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/fervas.jpeg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Matheus Carvalho</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
            Matheus Carvalho é o mestre da lógica na nossa equipe. Com um conhecimento profundo em diversas tecnologias, ele é a referência na resolução de problemas complexos. Sua expertise técnica é indispensável para o nosso sucesso.






            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/pravel.jpeg")}
            />
          </View>
          <View style={styles.cardDetalhe}>
            <Text style={styles.nomeMembro}>Matheus Gomes</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
            Matheus Gomes é  um verdadeiro gênio em programação. Com um talento excepcional para desenvolver soluções, ele combina brilhantismo técnico com uma abordagem colaborativa que enriquece todo o time.
            </Text>
          </View>
          <View style={styles.backImg}>
            <Image
              style={styles.fotoMembro}
              source={require("../../../assets/Zambon.jpg")}
            />
          </View>
          <View style={styles.cardDetalheZ}>
            <Text style={styles.nomeMembro}>Matheus Zambon</Text>
            <Text style={styles.membro}>membro</Text>
            <Text style={styles.textMembro}>
            Matheus Zambon é o membro mais animado e o melhor em trabalho em equipe. Sua energia contagiante e habilidade para colaborar eficazmente com todos tornam ele um elemento essencial para o nosso sucesso coletivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
