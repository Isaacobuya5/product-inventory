import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
          />
          &nbsp;
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default Filters;