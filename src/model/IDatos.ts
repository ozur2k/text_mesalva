
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
export interface IDatos{
  meta: meta
  result: result
  pagination:pagination
}

export interface resultChildrenDetalles{
  type: string
  title: string
  slug: string

}
interface resultDetalles {
  title: string
  type: string
  slug: string
  description: string
  children: resultChildrenDetalles[]
}
export interface IDetalleDato{
  meta: meta
  result: resultDetalles
  pagination?:pagination
}