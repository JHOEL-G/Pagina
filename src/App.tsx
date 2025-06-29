import { Inicio } from './componente/Inicio'
import { AbautMe } from './componente/seccion/AbautMe'
import { Accion } from './componente/seccion/Accion'
import { Brands } from './componente/seccion/Brands'
import { Hero } from './componente/seccion/Hero'
import { Pricing } from './componente/seccion/Pricing'
import { Services } from './componente/seccion/Services'
import Model from './utils/Model'

function App() {

  return (
    <>
      <Inicio titulo='MASTER ENGINEER'>
        < Hero />
        <Brands />
        <Services />
        <AbautMe />
        <Pricing />
        <Accion />
        <Model />
      </Inicio>
    </>
  )
}

export default App
