import Video from '../Video'
import './style.scss';

const Galeria = () => {

  return (
    <section id="galeria">
      <div className="grid">
        <Video url='https://www.youtube.com/embed/Uvf9383-HtM' title='Como usar Parrilla' />
        <Video url='https://www.youtube.com/embed/8Avbnz-JBq8' title='O que é Parrilla?' />
        <Video url='https://www.youtube.com/embed/_xOYnFd-n4E' title='Parrilla Argentina' />
      </div>
    </section>
  )
}

export default Galeria