import React from 'react'

const stylesClass = {
  backgroundColor: 'red',
  borderRadius: '4px', 
  border: 'solid 1px yellow'
}

function Search() {
  return (
    <>
      <input type={'search'} style={stylesClass}/>
    </>
  )
}

export default Search