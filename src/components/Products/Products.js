import { useState } from 'react';
import PropTypes from 'prop-types';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} {...product }/>)}
    </section>
  );
};

Products.propTypes = {
  productsData: PropTypes.string.isRequired,
}

export default Products;