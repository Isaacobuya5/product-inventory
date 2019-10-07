import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.changeFilterText = this.changeFilterText.bind(this);
    this.checkStock = this.checkStock.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS

  }
}

  // add new products
  saveProduct(product) {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      console.log({ products })
      return { products };
    });
  }

    //deleting a product using specific id
    handleDestroy(productId) {
      this.setState((prevState) => {
        let products = prevState.products;
        delete products[productId];
        return { products };
      });
    }

  //capture new filter text
  changeFilterText(e) {
    this.setState(({
      filterText: e.target.value
    }))
  }

    //show only products in stock
    checkStock(e) {
      this.setState(({
        inStockOnly: e.target.checked
      }))
    }





  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          myFilters={this.changeFilterText}
          showStock={this.checkStock}
        ></Filters>
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDestroy={this.handleDestroy}
        ></ProductTable>
        <ProductForm 
          onSave={this.saveProduct}
        />
      </div>
    );
  }
}

export default Products;