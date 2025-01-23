export default {
    name: 'deliveryZone',
    title: 'Delivery Zone',
    type: 'document',
    fields: [
      { name: 'zoneName', type: 'string', title: 'Zone Name' },
      { name: 'deliveryId', type: 'number', title: 'Delivery ID' },
      { name: 'driverName', type: 'string', title: 'Driver Name' },
      { name: 'deliveryFee', type: 'number', title: 'Delivery Fee' }
    ]
  };