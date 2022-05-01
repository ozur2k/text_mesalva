
type tipoDoc = 'video' | 'audio' | 'documento' | string
interface props{
  tipoDoc?: tipoDoc 
  children?: React.ReactNode;
}
function Contenido(props: props) {
  const { tipoDoc, children} = props
  return (
  <>
    {children}
  </>
  );
}

export default Contenido; 

