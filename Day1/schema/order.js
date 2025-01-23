export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'number', title: 'Order ID' },
      { name: 'customerId', type: 'number', title: 'Customer ID' },
      { name: 'product', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Product' },
      { name: 'totalAmount', type: 'number', title: 'Total Amount' }
    ]
  };