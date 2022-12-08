import styles from "./Product.module.scss";
import ProductImage from "../ProductImage/ProductImage"
import ProductForm from "../ProductForm/ProductForm"
import { useCallback, useState } from "react";
import PropTypes from 'prop-types';


const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [price, setPrice] = useState(props.basePrice);

  const setPriceFunc = useCallback((sizePrice) => {
    setPrice(props.basePrice + sizePrice)}, [price])

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} title={props.title} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{price}$</span>
        </header>

        <ProductForm name={props.title} price={price} sizes={props.sizes} currentSize={currentSize} setPriceFunc={setPriceFunc} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} colors={props.colors} currentColor={currentColor}/>
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;
