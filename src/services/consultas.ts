import api from "./api"

const getList = async() => {
  const result = await api.get('desafio-mesalva-web').then(res => res.data).catch( error => {
    console.log('algo salio mal')
    return 'error'
  })
  return result
}

export default getList


