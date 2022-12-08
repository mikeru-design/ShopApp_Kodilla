import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types';


const ProductForm = (props) => {

  return (
    <form onSubmit={props.addProduct}>

          {/* ----------------------SIZES--------------------------- */}
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <OptionSize addActive={props.addActive} sizes={props.sizes} currentSize={props.currentSize} setPriceFunc={props.setPriceFunc} setCurrentSize={props.setCurrentSize}/>
          </div>

          {/* ----------------------COLORS--------------------------- */}
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>

            <OptionColor addActive={props.addActive} colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
    </form>
  )
}

ProductForm.propTypes = {
  addActive: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  setPriceFunc: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default ProductForm;