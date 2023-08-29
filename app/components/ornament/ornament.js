import classNames from "classnames"
import Image from "next/image"
import './styles.css'

export default function Ornament(props) {
  const { classes } = props 
  return (
    <div className={classNames("ornament", classes)}>
      <div></div>
      <div></div>
    </div>
  )
}