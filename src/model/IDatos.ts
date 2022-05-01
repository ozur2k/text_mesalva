
interface meta {
  title:string
  description: string
}
interface resultChildren{
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
export interface IDataresultConteudo{
  [key: string]: string //| number
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