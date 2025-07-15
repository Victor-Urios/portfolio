import { P } from './styles'

export type Props = {
  children: string // pra interagirmos com ele precisamos acessar o children.
  tipo?: 'principal' | 'secundario' // ao inves de string utilizarei uma pipe pra deixar os valores apenas " principal " | "secundario" se o valor for algum fora desses, sera bloqueado
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
