

function CustomerTable( customers, handleDelete, handleEdit, handleStatusChange ) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tracking ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Payment Mode</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
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
  );
}

export default CustomerTable;
