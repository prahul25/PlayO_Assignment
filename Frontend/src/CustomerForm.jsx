import React, { useState } from "react";

function CustomerForm({ showForm, setShowForm, customers, setCustomers, selectedCustomer, setSelectedCustomer }) {
  const [editedCustomer, setEditedCustomer] = useState({
    trackingId: "",
    productName: "",
    customerName: "",
    date: "",
    paymentMode: "",
    status: "",
    amount: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <div className={`sidebar ${showForm ? 'show' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="trackingId" value={editedCustomer.trackingId} onChange={handleChange} placeholder="Id" />
        {/* Rest of the form fields */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Save</button>
        <button onClick={() => setShowForm(false)} className="close-button">Close</button>
      </form>
    </div>
  );
}

export default CustomerForm;
