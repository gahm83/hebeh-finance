import classNames from "classnames"
import './styles.css'

export default function Ornament(props) {
  const { className } = props 
  return (
    <div className={classNames("ornament", className)} />
  )
}