import  { useState } from 'react';

const CustomerList = () => {

  const [productName , setProductName] = useState([])
    const [productId, setProductId] = useState([])
    const [customerName, setCustomerName] = useState([]);
    const [date, setDate] = useState([]);
    const [amount, setAmount] = useState([]);
    const [paymentMode, setPaymentMode] = useState([]);
    const [status, setStatus] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Storing the data (You can replace this with your storage mechanism)
      const orderData = {
        productName,
        productId,
        customerName,
        date,
        amount,
        paymentMode,
        status
      };
      console.log('Storing order data:', orderData);

      // Clearing the form fields
      setProductName('')
      setProductId('');
      setCustomerName("");
      setDate('');
      setAmount('');
      setPaymentMode('');
      setStatus('');
  }

    return (
        <div>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit}>
                
                    
                    <label>Select Product:
                        <select value={productName} onChange={(e) => setProductName(e.target.value)}>
                            <option value="">Select Product</option>
                            <option value="Hat">Hat</option>
                            <option value="Cycle">Cycle</option>
                            <option value="Bat">Bat</option>
                            <option value="Bike">Bike</option>
                            <option value="Car">Car</option>
                        </select>
                    </label><br />
                    <label>Product ID:
                        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value )} />
                    </label><br />
                    
               

             
                    <label>Customer Name:
                        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value )} />
                    </label><br />
                  
                   
               

               
                    <label>Date:
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </label><br />
                    <label>Amount:
                        <input type="value" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </label><br />
                    <label>Payment Mode:
                        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                            <option value="">Select Payment Mode</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Online Payment">Online Payment</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </label><br />
                    <label>Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select Status</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Completed">Completed</option>
                            <option value="Processing">Processing</option>
                        </select>
                    </label>
               

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CustomerList;
