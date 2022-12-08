import styles from "./ProductOptions.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

const ProductOptions = (props) => {

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

export default ProductOptions;