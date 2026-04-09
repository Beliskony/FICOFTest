import NosParrains from "../Components/FICOF/NosParrains"
import NosRealisations from "../Components/FICOF/NosRealisations"
import NotreEquipe from "../Components/FICOF/NotreEquipe"
import ObjectifsMissions from "../Components/FICOF/ObjectifsMissions"
import QuiSommesNous from "../Components/FICOF/QuiSommesNous"
import VieFICOF from "../Components/FICOF/VieFicof"

function Ficof() {
  return (
    <main>
      <QuiSommesNous />
      <ObjectifsMissions />
      <NotreEquipe />
      <VieFICOF />
      <NosRealisations />
      <NosParrains />
    </main>
  )
}

export default Ficof