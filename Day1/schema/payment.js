export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      { name: 'paymentId', type: 'number', title: 'Payment ID' },
      { name: 'orderId', type: 'number', title: 'Order ID' },
      { name: 'amount', type: 'number', title: 'Amount' },
      { name: 'method', type: 'string', title: 'Payment Method' },
      { name: 'status', type: 'string', options: { list: ['Pending', 'Completed', 'Failed'] }, title: 'Status' }
    ]
  };