import React, { useState, useEffect } from "react";
import customerList from "./Assets/customerData";
import "./App.css";
import CustomerForm from "./CustomerForm";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showForm, setShowForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({
    trackingId: "",
    productName: "",
    customerName: "",
    date: "",
    paymentMode: "",
    status: "",
    amount: ""
  });
  const [searchByName , setSearchByName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [errorMessage , setErrorMessage] = useState("")

  useEffect(() => {
    setCustomers(customerList);
  }, []);

  const handleSort = (key) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedCustomers = [...customers].sort((a, b) => {
      const comparison =
        key === "date"
          ? new Date(a.date) - new Date(b.date)
          : key === "amount"
          ? a.amount - b.amount
          : a[key].localeCompare(b[key], undefined, { numeric: true });
      return sortOrder === "asc" ? comparison : -comparison;
    });
    setCustomers(sortedCustomers);
    setSortBy(key);
    setSortOrder(newSortOrder);
  };

  const handleDelete = (trackingId) => {
    setCustomers(customers.filter((customer) => customer.trackingId !== trackingId));
  };

  const handleStatusChange = (trackingId, newStatus) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.trackingId === trackingId) {
        return { ...customer, status: newStatus };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setEditedCustomer(customer);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!editedCustomer.trackingId || !editedCustomer.productName || !editedCustomer.customerName || !editedCustomer.date || !editedCustomer.paymentMode || !editedCustomer.status || !editedCustomer.amount) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (selectedCustomer) {
      const updatedCustomers = customers.map((customer) => {
        if (customer.trackingId === editedCustomer.trackingId) {
          return editedCustomer; // Update the existing customer with the edited details
        }
        return customer;
      });
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, editedCustomer]); // Add the new customer to the list
    }
    setShowForm(false);
  };

  const filterByName = (e)=> {
    setSearchByName(e.target.value);
    const filteredCustomers = customerList.filter((customer) =>
      customer.customerName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCustomers(filteredCustomers);
  };

  // Pagination
  const indexOfLastCustomer = currentPage * entriesPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - entriesPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(customers.length / entriesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset current page to 1 when changing entries per page
  };

  return (
    <div>
      <h1>Customer List</h1>
      <input type="search" name="" id="" placeholder="Search by customer name..." onChange={filterByName}/>
      {showForm ? (
        <div className={`sidebar ${showForm ? 'show' : ''}`}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="trackingId" value={editedCustomer.trackingId} onChange={handleChange} placeholder="Id" />
            <select name="productName" value={editedCustomer.productName} onChange={handleChange}>
              <option value="Television">Television</option>
              <option value="Mobile">Mobile</option>
              <option value="Car">Car</option>
              <option value="Clothe">Clothe</option>
              <option value="Bike">Bike</option>
            </select>
            <input type="text" name="customerName" value={editedCustomer.customerName} onChange={handleChange} placeholder="Customer Name" />
            <input type="date" name="date" value={editedCustomer.date} onChange={handleChange} placeholder="Date" />
            <select name="paymentMode" value={editedCustomer.paymentMode} onChange={handleChange} placeholder="Mode of Payment">
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Wallet">Wallet</option>
            </select>
            <select name="status" value={editedCustomer.status} onChange={handleChange} placeholder="Status of order">
              <option value="Process">Process</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input type="number" name="amount" value={editedCustomer.amount} onChange={handleChange} placeholder="Amount" />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit">Save</button>
            <button onClick={() => setShowForm(false)} className="close-button">Close</button>
          </form>
        </div>
      ) : (
        <button onClick={() => {
          setSelectedCustomer(null);
          setEditedCustomer({
            trackingId: "",
            productName: "",
            customerName: "",
            date: "",
            paymentMode: "",
            status: "",
            amount: ""
          });
          setShowForm(true);
        }}>Add Customer</button>
      )}
      <label htmlFor="entriesPerPage">Entries per page:</label>
      <select id="entriesPerPage" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <table>
        {/* Table Headers */}
        <thead>
          <tr>
            <th onClick={() => handleSort("trackingId")}>Tracking ID</th>
            <th onClick={() => handleSort("productName")}>Product</th>
            <th onClick={() => handleSort("customerName")}>Customer</th>
            <th onClick={() => handleSort("date")}>Date</th>
            <th onClick={() => handleSort("paymentMode")}>Payment Mode</th>
            <th onClick={() => handleSort("status")}>Status</th>
            <th onClick={() => handleSort("amount")}>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Existing Customers */}
          {currentCustomers.map((customer) => (
            <tr key={customer.trackingId}>
              <td>{customer.trackingId}</td>
              <td>{customer.productName}</td>
              <td>{customer.customerName}</td>
              <td>{customer.date}</td>
              <td>{customer.paymentMode}</td>
              <td>
                <select
                  value={customer.status}
                  onChange={(e) => handleStatusChange(customer.trackingId, e.target.value)}
                >
                  <option value="Process">Process</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>{customer.amount}</td>
              <td>
                <button onClick={() => handleEdit(customer)}>Edit</button>
                <button onClick={() => handleDelete(customer.trackingId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div>
        <button onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : currentPage)} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handleClick(index + 1)}>{index + 1}</button>
        ))}
        <button onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : currentPage)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default CustomerList;
