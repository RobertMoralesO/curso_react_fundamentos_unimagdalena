import React from 'react'

const Variables = () => {
    const saludo = "Hola Mundo"
    //const imagen ="https://cdn.resfu.com/img_data/estadios/original_new/547.jpg?size=720x&lossy=1"
    const imagen = "https://picsum.photos/500"
    const texto_alt = "Esto es una imagen"
    
    return (
    <div>
        <h1>{saludo}</h1>
        <img src={imagen} alt={texto_alt} />
    </div>
  )
}

export default Variables