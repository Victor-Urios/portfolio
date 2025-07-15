import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates
      earum vero, laborum molestias praesentium iusto! Libero eveniet nam
      repellendus eos, odio, minus temporibus exercitationem provident dolor,
      quo repudiandae ipsum?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Victor-Urios&show_icons=true&theme=radical&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Victor-Urios&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
