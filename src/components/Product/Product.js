import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import ProductImage from "../ProductImage/ProductImage"
import ProductOptions from "../ProductOptions/ProductOptions"
import { useState } from "react";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [price, setPrice] = useState(props.basePrice);

  const addActive = (e) => {
    if (e.target.localName === 'button'){
      const buttons = e.target.parentElement.parentElement.querySelectorAll('button');
      for (let button of buttons){
        if( button.classList.contains(styles.active)){
          button.classList.remove(styles.active)
        }
      }
      e.target.classList.add(styles.active)
    }
  };

  const setPriceFunc = (sizePrice) => {
    setPrice(props.basePrice + sizePrice)
  }

  const addProduct = (e) => {
    e.preventDefault();
    const productSummary = {
      name: props.title,
      price: price,
      size: currentSize,
      Color: currentColor,
    }
    const productSummaryString =
    `
    Summary
    ===========
    name: ${props.title}
    price: ${price}
    size: ${currentSize}
    Color: ${currentColor}
    `
    console.log(productSummary);
    console.log(productSummaryString);
  }


  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} title={props.title} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{price}$</span>
        </header>
        <ProductOptions addProduct={addProduct} addActive={addActive} sizes={props.sizes} currentSize={currentSize} setPriceFunc={setPriceFunc} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} colors={props.colors} currentColor={currentColor}/>
        {/* <form onSubmit={addProduct}>
          ----------------------SIZES---------------------------
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices} onClick={addActive} >
              {props.sizes.map(size =>
                <li key={size.name}>
                  <button type="button"
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={()=>{setPriceFunc(size.additionalPrice); setCurrentSize(size.name)}}>
                    {size.name}
                  </button>
                </li>)
              }
            </ul>
          </div>
          ----------------------COLORS---------------------------
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices} onClick={addActive}>
             {props.colors.map(color =>
                <li key={color}>
                  <button type="button"
                    onClick={()=>{setCurrentColor(color)}}
                    className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}>
                  </button>
                </li>)
              }
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> */}

      </div>
    </article>
  );
};

export default Product;
