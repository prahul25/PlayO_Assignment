import React, { useState, useEffect } from "react";
import customerList from "./Assets/customerData";
import "./App.css";
import CustomerForm from "./CustomerForm";

import PaginationComponent from "./Pagination";
import TableComponent from "./TableComponent";
import TopBarWrapper from "./TopBarWrapper";
import EntriesPerPageSelect from "./EntriesPerPageSelect";

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

    // Validation
  if (!editedCustomer.trackingId || !editedCustomer.productName || !editedCustomer.customerName || !editedCustomer.date || !editedCustomer.paymentMode || !editedCustomer.status || !editedCustomer.amount) {
    setErrorMessage("Please fill in all fields");
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
      <TopBarWrapper searchByName={searchByName} setSearchByName={setSearchByName}/>

      <div className="addButtonAndEntriesWrapper">
        <EntriesPerPageSelect
          entriesPerPage={entriesPerPage}
          handleEntriesPerPageChange={handleEntriesPerPageChange}
        />
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
      <TableComponent
        currentCustomers={currentCustomers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
        handleSort={handleSort} // Pass the handleSort function to TableComponent
      />
      {/* Pagination */}
      {/* Render Pagination Component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
