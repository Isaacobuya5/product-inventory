import React from 'react';
import Products from './Products';

class Filters extends React.Component {
      constructor(props) {
        super(props);
      }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.props.myFilters}
          name="search-box"
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.props.showStock}
          />
          &nbsp;
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default Filters;