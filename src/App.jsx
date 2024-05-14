import './App.css'
import Team from './componentes/Team'
import desarrolladores from './datos/desarrolladores'

function App() {

  const ListasDesarrolladores= desarrolladores.map((l,index)=>{
    return<Team key={index} nombre={l.nnombre} especialidad={l.nespecialidad} />
  })

  return (

      <div className = 'App'>
       <h1>Equipo  de Programación </h1> 
       <div className='container'>
       {ListasDesarrolladores} 
       
       </div>
      </div>


  )
}

export default App
