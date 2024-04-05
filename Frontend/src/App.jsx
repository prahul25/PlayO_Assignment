import React, { useState, useEffect } from "react";
import customerList from "./Assets/customerData";
import ProfileImg from "./Assets/Photo.png";
import "./App.css";
import CustomerForm from "./CustomerForm";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
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
  const [searchByName , setSearchByName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [errorMessage , setErrorMessage] = useState("");

  useEffect(() => {
    setCustomers(customerList);
    setFilteredCustomers(customerList);
  }, []);

  useEffect(() => {
    const filtered = customers.filter(customer =>
      customer.customerName.toLowerCase().includes(searchByName.toLowerCase())
    );
    setFilteredCustomers(filtered);
  }, [customers, searchByName]);

  const handleSort = (key) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
      const comparison =
        key === "date"
          ? new Date(a.date) - new Date(b.date)
          : key === "amount"
          ? a.amount - b.amount
          : a[key].localeCompare(b[key], undefined, { numeric: true });
      return sortOrder === "asc" ? comparison : -comparison;
    });
    setFilteredCustomers(sortedCustomers);
    setSortBy(key);
    setSortOrder(newSortOrder);
  };

  const handleDelete = (trackingId) => {
    const updatedCustomers = customers.filter((customer) => customer.trackingId !== trackingId);
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
  };

  const handleStatusChange = (trackingId, newStatus) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.trackingId === trackingId) {
        return { ...customer, status: newStatus };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
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

  const handleSubmit = (editedCustomer) => {
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

  // Pagination
  const indexOfLastCustomer = currentPage * entriesPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - entriesPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(filteredCustomers.length / entriesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset current page to 1 when changing entries per page
  };

  return (
    <div className="container">
      <h1>Customer List</h1>
      <div className="topBarWrapper">
        <div className="search-container">
          <i className="fa fa-search icon"></i>
          <input
            type="search"
            placeholder="Search by customer name..."
            value={searchByName}
            onChange={(e) => setSearchByName(e.target.value)}
            className="search-input"
          />
        </div>
        <img src={ProfileImg} alt="" />
      </div>

      <div className="addButtonAndEntriesWrapper">
        <div className="entriesPerPageSelect">
          <label htmlFor="entriesPerPage">Show</label>
          <select id="entriesPerPage" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <label htmlFor="entriesPerPage">Entries</label>
        </div>
        {showForm ? (
          <CustomerForm
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
            errorMessage={errorMessage}
            initialCustomer={selectedCustomer || {
              trackingId: "",
              productName: "",
              customerName: "",
              date: "",
              paymentMode: "",
              status: "",
              amount: ""
            }}
          />
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
          }} className="addButtonWrapper">Add Customer</button>
        )}
      </div>
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
                  className={
                    customer.status === 'Process'
                      ? 'processStatus'
                      : customer.status === 'Completed'
                      ? 'processComplete'
                      : 'processCancelled'
                  }
                >
                  <option value="Process">Process</option>
                  <option value="Completed">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>{customer.amount}</td>
              <td>
                <button onClick={() => handleEdit(customer)} className="handleEditButton"><FaRegEdit /></button>
                <button onClick={() => handleDelete(customer.trackingId)} className="handleDeleteButton"><RiDeleteBin6Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="functionalButtonWrapper">
        <button onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : currentPage)} disabled={currentPage === 1} className="functionalNavButton">Previous</button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handleClick(index + 1)} className="functionalNumButton">{index + 1}</button>
        ))}
        <button onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : currentPage)} disabled={currentPage === totalPages} className="functionalNavButton">Next</button>
      </div>
    </div>
  );
}

export default App;
