import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={16}>Nebula Stardust</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Victor-Urios
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
