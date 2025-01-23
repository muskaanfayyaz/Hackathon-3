export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'id', type: 'number', title: 'ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'image', type: 'image', title: 'Image' }
    ]
  };