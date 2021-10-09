import React, { Component } from "react";
import axios from "axios";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.retrieveItems();
  }

  retrieveItems() {
    axios.get("/items/get").then((res) => {
      if (res.data.success) {
        this.setState({
          items: res.data.existingItems,
        });

        console.log(this.state.items);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm("Do you want to delete this items?")) {
      axios.delete(`/item/delete/${id}`).then((res) => {
        alert("Item Deleted Successfully!");
        this.retrieveItems();
      });
    }
  };

  //Search bar
  filterData(items, searchKey) {
    const result = items.filter(
      (item) =>
        item.itemCode.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.itemCode.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.color.toUpperCase().includes(searchKey) ||
        item.color.toLowerCase().includes(searchKey)
    );

    this.setState({ items: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/items/get").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingItems, searchKey);
      }
    });
  };

  render() {
    return (
      <div
        className="card"
        style={{
          margin: "40px",
          marginLeft: "0px",
          width: "100%",
          borderRadius: "0px",
          marginTop: "-20px",
          background: "#D3D3D3",
        }}
      >
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br />
            <h4
              style={{
                color: "#B91717",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "-250px",
                textAlign: "center",
              }}
            >
              All Items
            </h4>
          </div>
          <br />
          <br />
          <br />
          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
              style={{
                width: "350px",
                marginLeft: "10px",
                marginTop: "30px",
                borderColor: "red",
              }}
            ></input>
          </div>
          <br />
          <br />
          <br />
          &nbsp;&nbsp;
          <button
            className="btn-grad"
            style={{ marginRight: "150px", marginLeft: "20px", width: "150px" }}
          >
            <a
              href="/Stock"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              View Stocks
            </a>
          </button>
          &nbsp;&nbsp;
          <button
            className="btn-grads"
            style={{ width: "200px", marginLeft: "-150px" }}
          >
            <a
              href="/AddItem"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Create a New Item
            </a>
          </button>
          &nbsp;&nbsp;
          <h4
            style={{
              color: "#B91717",
              fontWeight: "bolder",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            {" "}
            Total number of Items in the stock:{" "}
            {this.state.items.reduce((sum, item) => item.countInStock + sum, 0)}
          </h4>
          <div>
            <table
              className="table table-hover"
              style={{
                marginTop: "40px",
                backgroundColor: "#ffff",
                borderRadius: "30px",
                width: "100%",
                border: "none",
              }}
            >
              <thead>
                <tr
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <th scope="col">#</th>
                  <th scope="col">Item Code</th>
                  <th scope="col">Description</th>
                  <th scope="col">unitPrice</th>
                  <th scope="col">Color</th>
                  <th scope="col">CountInStock</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((items, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/ItemDetails/${items._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {items.itemCode}
                      </a>
                    </td>
                    <td>{items.description}</td>
                    <td>{items.unitPrice}</td>
                    <td>{items.color}</td>
                    <td>{items.countInStock}</td>
                    <td>
                      <button className="btn-grad1" style={{ width: "45px" }}>
                        <a
                          href={`/EditItem/${items._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <i className="fas fa-edit"></i>&nbsp;
                        </a>
                      </button>
                      &nbsp;&nbsp;
                      <br />
                      <br />
                      <button className="btn-grad2" style={{ width: "45px" }}>
                        <a
                          href="#"
                          onClick={() => this.onDelete(items._id)}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
