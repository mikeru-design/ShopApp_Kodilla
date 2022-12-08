import clsx from 'clsx';
import styles from "./OptionSize.module.scss";

const OptionSize = (props) => {

  return (
    <ul className={styles.choices} onClick={props.addActive}>
      {props.sizes.map(size =>
        <li key={size.name}>
          <button type="button"
            className={clsx(size.name === props.currentSize && styles.active)}
            onClick={()=>{props.setPriceFunc(size.additionalPrice); props.setCurrentSize(size.name)}}>
            {size.name}
          </button>
        </li>)
      }
    </ul>
  )
}

export default OptionSize;