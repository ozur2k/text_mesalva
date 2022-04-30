
type tipoDoc = 'video' | 'audio' | 'documento' | string
interface props{
  titulo: string 
  descricion: string 
  tipoDoc?: tipoDoc 
  mensaje?: string 
  children?: React.ReactNode;
}
function Contenido(props: props) {
  const {titulo, descricion, tipoDoc, mensaje, children} = props
  return (
  <>
    <h2>{titulo}</h2> 
    <h4>{descricion}</h4>
    <p>
      {mensaje}
    </p>
    {children}
  </>
  );
}

export default Contenido; 

