import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableComponent = ({ currentCustomers, handleEdit, handleDelete, handleStatusChange, handleSort }) => {
  return (
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
  );
};

export default TableComponent;
