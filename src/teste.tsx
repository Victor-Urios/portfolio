import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string // colocando interrogação ele vira opcional e não obrigatório!
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`
// o styled components possui similaridades do SASS e o Less
// estamos escrevendo css com a possibilidade de acessar propriedades que estão dentro de outros elementos

// usando o props desta forma o principal true é green e o false é azul, dando maior customização.
// não só em cor como em tamanho ou outras coisas.
function Teste() {
  return (
    <>
      <Botao principal>Clique Aqui!</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não Clique Aqui!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
