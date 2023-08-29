import classNames from "classnames"
import Image from "next/image"
import './styles.css'

export default function Ornament(props) {
  const { className } = props 
  return (
    <div className={classNames("ornament", className)}>
      <div></div>
      <div></div>
    </div>
  )
}