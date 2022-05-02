
interface meta {
  title:string
  description: string
}
export interface resultChildren{
  type: string
  title: string
  slug: string
}

interface result {
  title: string
  type: string
  slug: string
  description: string
  children: resultChildren[]
}
interface pagination{
  currentPage: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
}
export interface ICursos{
  meta: meta
  result: result
  pagination:pagination
}
export interface IOpcRespuestas{
  text: string,
  isCorrect: boolean
  opcSelecCorrecta?: (isCorrect: boolean) => boolean
}
export interface IDataresultConteudo{
  answers?: IOpcRespuestas[],
  [key: string]:  string | any
}
export interface resultChildrenConteudo{
  type: string
  data: IDataresultConteudo

}
interface resultDetalles {
  title: string
  type: string
  slug: string
  description: string
  children: resultChildrenConteudo[]
}
export interface ICursoConteudos{
  meta: meta
  result: resultDetalles
  pagination?:pagination
}