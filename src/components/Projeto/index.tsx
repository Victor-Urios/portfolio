import styled from 'styled-components'

import Paragrafo from '../Paragrafo'
import Title from '../Title'

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`
const LinkBotao = styled.a`
  color: #fff;
  font-size: 14px;
  background-color: #4476bf;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`

// o componente estilizado tem que estar ANTES do codigo do componente.
// este vai ser o unico que não farei dentro de um arquivo styles
// só pra ter a ideia que é uma das abordagens que pode ser utilizada c o styled components!

const Projeto = () => (
  <Card>
    <Title>projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
