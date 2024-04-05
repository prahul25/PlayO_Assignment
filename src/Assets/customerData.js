let customerList = [
  {
    productName: "Smartphone",
    customerName: "John Doe",
    date: "2022-01-05",
    paymentMode: "Credit Card",
    amount: 500,
    trackingId: "#TRK1",
    status: "Completed"
  },
  {
    productName: "Laptop",
    customerName: "Jane Smith",
    date: "2022-02-10",
    paymentMode: "PayPal",
    amount: 1200,
    trackingId: "#TRK2",
    status: "Completed"
  },
  {
    productName: "Tablet",
    customerName: "Alice Johnson",
    date: "2022-03-15",
    paymentMode: "Debit Card",
    amount: 800,
    trackingId: "#TRK3",
    status: "Process"
  },
  {
    productName: "Smart TV",
    customerName: "Bob Brown",
    date: "2022-04-20",
    paymentMode: "Credit Card",
    amount: 1000,
    trackingId: "#TRK4",
    status: "Cancelled"
  },
  {
    productName: "Digital Camera",
    customerName: "Emily Davis",
    date: "2022-05-25",
    paymentMode: "PayPal",
    amount: 600,
    trackingId: "#TRK5",
    status: "Process"
  },
  {
    productName: "Gaming Console",
    customerName: "James Wilson",
    date: "2022-06-30",
    paymentMode: "Debit Card",
    amount: 700,
    trackingId: "#TRK6",
    status: "Completed"
  },
  {
    productName: "Wireless Headphones",
    customerName: "Emma Martinez",
    date: "2022-07-05",
    paymentMode: "Credit Card",
    amount: 150,
    trackingId: "#TRK7",
    status: "Completed"
  },
  {
    productName: "Smartwatch",
    customerName: "David Taylor",
    date: "2022-08-10",
    paymentMode: "PayPal",
    amount: 300,
    trackingId: "#TRK8",
    status: "Process"
  },
  {
    productName: "E-book Reader",
    customerName: "Sophia Anderson",
    date: "2022-09-15",
    paymentMode: "Debit Card",
    amount: 200,
    trackingId: "#TRK9",
    status: "Cancelled"
  },
  {
    productName: "Wireless Speaker",
    customerName: "Olivia Thomas",
    date: "2022-10-20",
    paymentMode: "Credit Card",
    amount: 250,
    trackingId: "#TRK10",
    status: "Completed"
  },
  {
    productName: "Action Camera",
    customerName: "Michael Garcia",
    date: "2022-11-25",
    paymentMode: "PayPal",
    amount: 400,
    trackingId: "#TRK11",
    status: "Process"
  },
  {
    productName: "Fitness Tracker",
    customerName: "Ava Rodriguez",
    date: "2022-12-30",
    paymentMode: "Debit Card",
    amount: 180,
    trackingId: "#TRK12",
    status: "Completed"
  },
  {
    productName: "VR Headset",
    customerName: "William Wilson",
    date: "2023-01-05",
    paymentMode: "Credit Card",
    amount: 350,
    trackingId: "#TRK13",
    status: "Completed"
  },
  {
    productName: "Wireless Earbuds",
    customerName: "Mia Jackson",
    date: "2023-02-10",
    paymentMode: "PayPal",
    amount: 120,
    trackingId: "#TRK14",
    status: "Process"
  },
  {
    productName: "Smart Home Hub",
    customerName: "Ethan Harris",
    date: "2023-03-15",
    paymentMode: "Debit Card",
    amount: 550,
    trackingId: "#TRK15",
    status: "Completed"
  },
  {
    productName: "E-reader",
    customerName: "Amelia Martinez",
    date: "2023-04-20",
    paymentMode: "Credit Card",
    amount: 180,
    trackingId: "#TRK16",
    status: "Cancelled"
  },
  {
    productName: "Wireless Mouse",
    customerName: "Liam Miller",
    date: "2023-05-25",
    paymentMode: "PayPal",
    amount: 80,
    trackingId: "#TRK17",
    status: "Process"
  },
  {
    productName: "Portable Charger",
    customerName: "Charlotte Davis",
    date: "2023-06-30",
    paymentMode: "Debit Card",
    amount: 40,
    trackingId: "#TRK18",
    status: "Completed"
  },
  {
    productName: "Smart Scale",
    customerName: "Elijah Garcia",
    date: "2023-07-05",
    paymentMode: "Credit Card",
    amount: 100,
    trackingId: "#TRK19",
    status: "Completed"
  },
  {
    productName: "Bluetooth Keyboard",
    customerName: "Harper Wilson",
    date: "2023-08-10",
    paymentMode: "PayPal",
    amount: 70,
    trackingId: "#TRK20",
    status: "Process"
  },
  {
    productName: "Wireless Printer",
    customerName: "Avery Johnson",
    date: "2023-09-15",
    paymentMode: "Debit Card",
    amount: 200,
    trackingId: "#TRK21",
    status: "Completed"
  },
  {
    productName: "External Hard Drive",
    customerName: "Jackson Anderson",
    date: "2023-10-20",
    paymentMode: "Credit Card",
    amount: 180,
    trackingId: "#TRK22",
    status: "Cancelled"
  },
  {
    productName: "USB Flash Drive",
    customerName: "Scarlett Thomas",
    date: "2023-11-25",
    paymentMode: "PayPal",
    amount: 20,
    trackingId: "#TRK23",
    status: "Completed"
  },
  {
    productName: "Wireless Router",
    customerName: "Aria Garcia",
    date: "2023-12-30",
    paymentMode: "Debit Card",
    amount: 120,
    trackingId: "#TRK24",
    status: "Process"
  },
  {
    productName: "Streaming Device",
    customerName: "Grayson Jackson",
    date: "2024-01-05",
    paymentMode: "Credit Card",
    amount: 90,
    trackingId: "#TRK25",
    status: "Completed"
  },
  {
    productName: "Wi-Fi Range Extender",
    customerName: "Luna Martinez",
    date: "2024-02-10",
    paymentMode: "PayPal",
    amount: 50,
    trackingId: "#TRK26",
    status: "Process"
  },
  {
    productName: "Gaming Mouse",
    customerName: "Ava Wilson",
    date: "2024-03-15",
    paymentMode: "Debit Card",
    amount: 200,
    trackingId: "#TRK27",
    status: "Completed"
  },
  {
    productName: "Wireless Keyboard",
    customerName: "Noah Johnson",
    date: "2024-04-20",
    paymentMode: "Credit Card",
    amount: 100,
    trackingId: "#TRK28",
    status: "Completed"
  },
  {
    productName: "Smart Plug",
    customerName: "Liam Davis",
    date: "2024-05-25",
    paymentMode: "PayPal",
    amount: 30,
    trackingId: "#TRK29",
    status: "Cancelled"
  },
  {
    productName: "Wireless Charger",
    customerName: "Sophia Brown",
    date: "2024-06-30",
    paymentMode: "Debit Card",
    amount: 60,
    trackingId: "#TRK30",
    status: "Completed"
  }
];

export default customerList;
