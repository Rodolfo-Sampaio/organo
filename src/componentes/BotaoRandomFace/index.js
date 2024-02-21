import './BotaoRandomFace.css'

const BotaoRandomFace = ({ onClick }) => {
   return (
      <button type="button" className='botao-random-face' onClick={onClick}>
         ou use o Random Face
      </button>
   )
}

export default BotaoRandomFace