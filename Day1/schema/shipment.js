export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      { name: 'shipmentId', type: 'number', title: 'Shipment ID' },
      { name: 'orderId', type: 'number', title: 'Order ID' },
      { name: 'trackingNo', type: 'string', title: 'Tracking Number' },
      { name: 'status', type: 'string', options: { list: ['Pending', 'Shipped', 'Delivered'] }, title: 'Status' },
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' }
    ]
  };