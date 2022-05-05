import React from "react";

function FilterTable({ searchText, items }) {
  let processedItems = items;
  if (searchText) {
    processedItems = processedItems.filter(
      (item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1
    );
  }
  return (
    <ul>
      {processedItems.map((item) => {
        if (searchText && item.name === searchText) {
          return <li key={item.name}>{item.name}</li>;
        }
        return <li key={item.name}>{item.name}</li>;
      })}
    </ul>
  );
}

class StockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      items: [
        {
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football",
        },
        {
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball",
        },
        {
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball",
        },
        {
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch",
        },
        {
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5",
        },
        {
          category: "Electronics",
          price: "$199.99",
          stocked: true,
          name: "Nexus 7",
        },
      ],
    };
  }
  onSearch = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <input type="text" onChange={this.onSearch} />
        <FilterTable
          searchText={this.state.searchText}
          items={this.state.items}
        />
      </React.Fragment>
    );
  }
}

export default StockContainer;
