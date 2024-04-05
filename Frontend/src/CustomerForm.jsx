import React, { useState } from "react";
import "./App.css";

function CustomerForm({ onSubmit, onCancel, errorMessage, initialCustomer }) {
  const [editedCustomer, setEditedCustomer] = useState(initialCustomer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(editedCustomer); // Call onSubmit function passed from App component

    // Reset form fields to initial state
    if (!initialCustomer.trackingId) {
      setEditedCustomer({
        trackingId: "",
        productName: "",
        customerName: "",
        date: "",
        paymentMode: "",
        status: "",
        amount: "",
      });
    }
  };

  return (
    <div className={"sidebar"}>
      <label className="labelWrapper">{initialCustomer.trackingId ? <p>Edit Customer</p> : <p>Add customer</p>} </label>
      <form onSubmit={handleSubmit} className="formWrapper">
        <div>
          <label htmlFor="trackingId">Tracking ID</label>
          <br />
          <input type="text" name="trackingId" value={editedCustomer.trackingId} onChange={handleChange} placeholder="Id" className="inputWrapper" />
        </div>
        <div>
          <label htmlFor="productName">Select Product</label>
          <br />
          <select name="productName" value={editedCustomer.productName} onChange={handleChange} className="inputOptionWrapper">
            <option value="">Please select an option</option>
            <option value="Television">Television</option>
            <option value="Mobile">Mobile</option>
            <option value="Car">Car</option>
            <option value="Clothe">Clothe</option>
            <option value="Bike">Bike</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerName">Customer Name</label>
          <br />
          <input type="text" name="customerName" value={editedCustomer.customerName} onChange={handleChange} placeholder="Enter Customer Name" className="inputWrapper" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <br />
          <input type="date" name="date" value={editedCustomer.date} onChange={handleChange} placeholder="Date" className="inputDateWrapper" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <br />
          <input type="number" name="amount" value={editedCustomer.amount} onChange={handleChange} placeholder="Amount" className="inputWrapper" />
        </div>
        <div>
          <label htmlFor="paymentMode">Payment Mode</label>
          <br />
          <select name="paymentMode" value={editedCustomer.paymentMode} onChange={handleChange} placeholder="Mode of Payment" className="inputOptionWrapper">
            <option value="">Please select an option</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Wallet">Wallet</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <br />
          <select name="status" value={editedCustomer.status} onChange={handleChange} placeholder="Status of order" className="inputOptionWrapper">
            <option value="">Please select an option</option>
            <option value="Process">Process</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="addButton" >
          Add
        </button>
        <button onClick={onCancel} className="close-button">
          Close
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
