import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
};

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="ação"
          description="Vivencie a história de Basim, um ladrão de rua astuto em busca de respostas e justiça, enquanto percorre as agitadas ruas de Bagdá do século IX. Por meio de uma antiga e misteriosa organização, conhecida como Ocultos, ele se tornará um Mestre Assassino mortal e transformará seu destino de maneiras que ele nunca poderia imaginar."
          image="//placehold.it/222x250"
          infos={["20%", "R$379,99"]}
          title="Assassin's Creed Mirage: Edição Mestre Assassino"
        />
        <Product
          category="Terror"
          description="Dead by Daylight é um jogo de terror multijogador (4vs1) onde um jogador assume o papel do assassino selvagem e os outros quatro jogadores jogam como sobreviventes, tentando escapar do assassino e evitar serem capturados, torturados e mortos."
          image="//placehold.it/222x250"
          infos={["15%", "R$192,90"]}
          title="Dead by Daylight - Gold Edition"
        />
        <Product
          category="Mundo Aberto"
          description="Produto com Acesso Antecipado"
          image="//placehold.it/222x250"
          infos={["10%", "R$88,99"]}
          title="Palworld"
        />
        <Product
          category="Terror"
          description="Phasmophobia é um jogo de terror psicológico cooperativo online para 4 jogadores. Você e sua equipe de investigadores paranormais entrarão em locais assombrados repletos de atividades paranormais e tentarão reunir o máximo de evidências possível. Use seu equipamento de caça a fantasmas para encontrar e registrar evidências para vender a uma equipe de remoção de fantasmas."
          image="//placehold.it/222x250"
          infos={["5%", "R$27,89"]}
          title="Phasmophobia"
        />
      </List>
    </div>
  </Container>
);

export default ProductsList;
