
import { Globals, Header, Curso, ListCursos} from './styled'

import Image from 'next/image';
import { Titulos } from '../micro/Titulos';
import { Icons } from '../micro/Icons';


const PagPrincipal = () => {
  return (

    <Globals>
      
      <Header>
        <img src="/img/maxresdefault.jpg" alt="" />
      </Header>
      <Titulos tamano={3}>
        <h2 style={{textAlign: 'center'}}>Cursos</h2>
      </Titulos>
      <ListCursos>
        
        <Curso>
         <img src="/img/maxresdefault.jpg" alt="" />
         <h3>Geografia</h3>
          <p>Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons>lock_open</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia - 2</h3>
          <p>Lorem 
            ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing. sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons>lock</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia -3</h3>
          <p>Lorem 
            ipsum dolor sit Lorem ipsum dolor sit. amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons>lock</Icons>
        </Curso> 
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>Geografia -4</h3>
          <p>Lorem 
            ipsum Lorem, ipsum.lorem4 Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Dolorem, culpa.
          </p>
          <Icons classNamen='icons-blok' >lock</Icons>
        </Curso> 



      </ListCursos>
      

    </Globals>

    
    
  )
}

export default PagPrincipal;

