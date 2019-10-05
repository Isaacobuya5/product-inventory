import React from 'react';
import Products from './Products';
import ProductRow from './ProductRow';
import ProductTableHeader from './ProductTableHeader';

class ProductTable extends React.Component {
    render() {
        let productsAsArray = Object.keys(this.props.products).map((pid) =>
        this.props.products[pid]);
        let rows = [];

        productsAsArray.forEach((product) => {
            rows.push(
                <ProductRow product={product} key={product.id} />
            );
        });
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                <ProductTableHeader column="name"/>
                <ProductTableHeader column="price"/>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;