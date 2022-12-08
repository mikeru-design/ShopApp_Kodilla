import clsx from 'clsx';
import styles from "./OptionColor.module.scss";
import PropTypes from 'prop-types';


const OptionColor = (props) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <ul className={styles.choices} onClick={props.addActive}>
      {props.colors.map(color =>
        <li key={color}>
          <button type="button"
            onClick={()=>{props.setCurrentColor(color)}}
            className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)}>
          </button>
        </li>)
      }
    </ul>
  )
}

OptionColor.propTypes = {
  addActive: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default OptionColor;