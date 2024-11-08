
use('introduction');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {"name": "javascript", "price": 20000},
  {"name": "python", "price": 25000},
  {"name": "react", "price": 30000},
  {"name": "node.js", "price": 22000},
  {"name": "angular", "price": 21000},
  {"name": "java", "price": 24000},
  {"name": "c++", "price": 23000},
  {"name": "swift", "price": 27000},
  {"name": "php", "price": 19000},
  {"name": "html & css", "price": 15000}
]
);

console.log('Done inserting data');
