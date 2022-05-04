
import { Globals, Header,  ListCursos} from './styled'
import { Titulos } from '../micro/Titulos';
import Card, { ICard } from '../micro/Card';
import { useEffect, useState } from 'react';


const PagPrincipal = () => {
  const [datos, setDatos] = useState<ICard[] | undefined>(undefined)

  const data: ICard[] = [
    {titulo: 'Geografia', descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.', urlImg: '/img/maxresdefault.jpg', Bloqueado: false,
     link: '/meuaprendizado/introducao-a-geografia'},
    {titulo: 'Geografia II', descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.', urlImg: '/img/maxresdefault.jpg', Bloqueado: true},
    {titulo: 'Geografia III', descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.', urlImg: '/img/maxresdefault.jpg', Bloqueado: true},
    {titulo: 'Geografia IV', descrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.', urlImg: '/img/maxresdefault.jpg', Bloqueado: true}
  ]
  useEffect(() => {
    setDatos(data)
  }, [])
  
  return (

    <Globals>
      
      <Header>
        <img src="/img/maxresdefault.jpg" alt="" />
      </Header>
      <Titulos tamano={3}>
        <h2 style={{textAlign: 'center'}}>Cursos</h2>
      </Titulos>
      <ListCursos>
        {datos?.map((curso, i) => 
          <Card key={`card-curso-${i}`} titulo={curso.titulo} descrip={curso.descrip} urlImg={curso.urlImg} Bloqueado={curso.Bloqueado} link={curso.link}/>
        )}
      </ListCursos>
      

    </Globals>

    
    
  )
}

export default PagPrincipal;

/*
<Curso>
         <img src="/img/maxresdefault.jpg" alt="" />
         <h3>Geografia</h3>
          <p>Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons color={true? 'red': 'green'}>lock_open</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia - 2</h3>
          <p>Lorem 
            ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing. sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons color={true? 'red': 'green'}>lock</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia -3</h3>
          <p>Lorem 
            ipsum dolor sit Lorem ipsum dolor sit. amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons color={true? 'red': 'green'}>lock</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia -4</h3>
          <p>Lorem 
            ipsum Lorem, ipsum.lorem4 Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons color={true? 'red': 'green'} >lock</Icons>
        </Curso> 
*/

