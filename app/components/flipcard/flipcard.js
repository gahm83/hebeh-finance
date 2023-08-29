import Image from 'next/image';
import './styles.css'

const FlipCard = (props) => {
  console.log(props);
  const { invertColors } = props;
  return (
    <div className={invertColors ? "flipCardNegative" : "flipCard"}>
      <div className="flipCardInner">
        <div className="flipCardFront space-y-5">
          <span className="block relative w-24 h-24">
            <Image src={`/images/${invertColors ? 'icono-hebeh-bco.svg' : 'icono-hebeh.svg'}`} fill alt="Hebeh icon for cards"/>
          </span>
          <p>{props.title}</p>
        </div>
        <div className="flipCardBack">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard;