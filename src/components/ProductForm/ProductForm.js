import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types';
import { useCallback } from "react";



const ProductForm = (props) => {

  const addActive = useCallback((e) => {
    if (e.target.localName === 'button'){
      const buttons = e.target.parentElement.parentElement.querySelectorAll('button');
      for (let button of buttons){
        if( button.classList.contains(styles.active)){
          button.classList.remove(styles.active)
        }
      }
      e.target.classList.add(styles.active)
    }
  })

  const addProduct = (e) => {
    e.preventDefault();
    const productSummary = {
      name: props.name,
      price: props.price,
      size: props.currentSize,
      Color: props.currentColor,
    }
    const productSummaryString =
    `
    Summary
    ===========
    name: ${props.name}
    price: ${props.price}
    size: ${props.currentSize}
    Color: ${props.currentColor}
    `
    console.log(productSummary);
    console.log(productSummaryString);
  }

  return (
    <form onSubmit={addProduct}>

          {/* ----------------------SIZES--------------------------- */}
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <OptionSize addActive={addActive} sizes={props.sizes} currentSize={props.currentSize} setPriceFunc={props.setPriceFunc} setCurrentSize={props.setCurrentSize}/>
          </div>

          {/* ----------------------COLORS--------------------------- */}
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>

            <OptionColor addActive={addActive} colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
    </form>
  )
}

ProductForm.propTypes = {
  setPriceFunc: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default ProductForm;