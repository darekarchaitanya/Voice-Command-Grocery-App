import type { Product } from '@/types';

// 100+ grocery products across 8 categories
export const products: Product[] = [
  // Fruits & Vegetables (25 items)
  { id: '1', name: 'Fresh Apples', category: 'Fruits & Vegetables', quantity: '1 kg', price: 120, tag: '10% OFF', image: '/fresh-red-apples.jpg' },
  { id: '2', name: 'Bananas', category: 'Fruits & Vegetables', quantity: '1 kg', price: 60, tag: 'Best Seller', image: '/yellow-bananas-bunch.jpg' },
  { id: '3', name: 'Carrots', category: 'Fruits & Vegetables', quantity: '1 kg', price: 50, image: '/fresh-orange-carrots.jpg' },
  { id: '4', name: 'Tomatoes', category: 'Fruits & Vegetables', quantity: '1 kg', price: 40, image: '/ripe-red-tomatoes.jpg' },
  { id: '5', name: 'Potatoes', category: 'Fruits & Vegetables', quantity: '2 kg', price: 80, tag: 'Best Seller', image: '/fresh-brown-potatoes.jpg' },
  { id: '6', name: 'Onions', category: 'Fruits & Vegetables', quantity: '1 kg', price: 35, image: '/white-onions-bulb.jpg' },
  { id: '7', name: 'Lettuce', category: 'Fruits & Vegetables', quantity: '500 g', price: 45, image: '/fresh-green-lettuce-head.jpg' },
  { id: '8', name: 'Bell Peppers', category: 'Fruits & Vegetables', quantity: '500 g', price: 65, image: '/colorful-bell-peppers-red-yellow-green.jpg' },
  { id: '9', name: 'Cucumbers', category: 'Fruits & Vegetables', quantity: '500 g', price: 40, image: '/fresh-green-cucumbers.jpg' },
  { id: '10', name: 'Oranges', category: 'Fruits & Vegetables', quantity: '1 kg', price: 100, image: '/fresh-orange-citrus-fruits.jpg' },
  { id: '11', name: 'Lemons', category: 'Fruits & Vegetables', quantity: '1 kg', price: 80, image: '/yellow-lemons.jpg' },
  { id: '12', name: 'Grapes', category: 'Fruits & Vegetables', quantity: '500 g', price: 150, image: '/purple-grapes-bunch.jpg' },
  { id: '13', name: 'Spinach', category: 'Fruits & Vegetables', quantity: '500 g', price: 50, image: '/fresh-green-spinach-leaves.jpg' },
  { id: '14', name: 'Cabbage', category: 'Fruits & Vegetables', quantity: '1 kg', price: 35, image: '/green-cabbage-head.jpg' },
  { id: '15', name: 'Broccoli', category: 'Fruits & Vegetables', quantity: '500 g', price: 70, image: '/fresh-green-broccoli.jpg' },
  { id: '16', name: 'Cauliflower', category: 'Fruits & Vegetables', quantity: '1 kg', price: 55, image: '/fresh-white-cauliflower-head.jpg' },
  { id: '17', name: 'Green Beans', category: 'Fruits & Vegetables', quantity: '500 g', price: 60, image: '/fresh-green-beans.jpg' },
  { id: '18', name: 'Pumpkin', category: 'Fruits & Vegetables', quantity: '1 kg', price: 65, image: '/orange-pumpkin.jpg' },
  { id: '19', name: 'Garlic', category: 'Fruits & Vegetables', quantity: '250 g', price: 40, image: '/fresh-white-garlic-bulbs.jpg' },
  { id: '20', name: 'Ginger', category: 'Fruits & Vegetables', quantity: '250 g', price: 50, image: '/fresh-ginger-root.jpg' },
  { id: '21', name: 'Papaya', category: 'Fruits & Vegetables', quantity: '1 kg', price: 70, image: '/ripe-yellow-papaya.jpg' },
  { id: '22', name: 'Mango', category: 'Fruits & Vegetables', quantity: '1 kg', price: 150, tag: 'Best Seller', image: '/golden-mango-fruits.jpg' },
  { id: '23', name: 'Watermelon', category: 'Fruits & Vegetables', quantity: '1 kg', price: 40, image: '/fresh-watermelon.jpg' },
  { id: '24', name: 'Strawberries', category: 'Fruits & Vegetables', quantity: '500 g', price: 180, image: '/fresh-red-strawberries.jpg' },
  { id: '25', name: 'Blueberries', category: 'Fruits & Vegetables', quantity: '250 g', price: 200, image: '/fresh-blueberries.jpg' },

  // Dairy & Bakery (20 items)
  { id: '26', name: 'Milk (1L)', category: 'Dairy & Bakery', quantity: '1 L', price: 60, tag: 'Best Seller', image: '/white-milk-bottle.jpg' },
  { id: '27', name: 'Milk (2L)', category: 'Dairy & Bakery', quantity: '2 L', price: 110, tag: 'Best Seller', image: '/white-milk-bottle-2L.jpg' },
  { id: '28', name: 'Yogurt', category: 'Dairy & Bakery', quantity: '500 g', price: 50, image: '/creamy-yogurt-cup.jpg' },
  { id: '29', name: 'Cheese', category: 'Dairy & Bakery', quantity: '250 g', price: 120, image: '/white-cheese-block.jpg' },
  { id: '30', name: 'Butter', category: 'Dairy & Bakery', quantity: '500 g', price: 140, image: '/yellow-butter-block.jpg' },
  { id: '31', name: 'Paneer', category: 'Dairy & Bakery', quantity: '200 g', price: 100, tag: 'Best Seller', image: '/fresh-paneer-block.jpg' },
  { id: '32', name: 'Curd (500g)', category: 'Dairy & Bakery', quantity: '500 g', price: 45, image: '/white-curd-container.jpg' },
  { id: '33', name: 'Cream', category: 'Dairy & Bakery', quantity: '200 ml', price: 80, image: '/fresh-cream-bottle.jpg' },
  { id: '34', name: 'White Bread', category: 'Dairy & Bakery', quantity: '400 g', price: 35, image: '/white-bread-loaf.jpg' },
  { id: '35', name: 'Brown Bread', category: 'Dairy & Bakery', quantity: '400 g', price: 40, image: '/brown-bread-loaf.jpg' },
  { id: '36', name: 'Wheat Bread', category: 'Dairy & Bakery', quantity: '400 g', price: 45, image: '/wheat-bread-loaf.jpg' },
  { id: '37', name: 'Biscuits', category: 'Dairy & Bakery', quantity: '200 g', price: 50, image: '/golden-biscuits-pack.jpg' },
  { id: '38', name: 'Cookies', category: 'Dairy & Bakery', quantity: '250 g', price: 60, image: '/delicious-cookies-pack.jpg' },
  { id: '39', name: 'Eggs (12 pcs)', category: 'Dairy & Bakery', quantity: '12 pieces', price: 80, tag: 'Best Seller', image: '/brown-eggs-carton.jpg' },
  { id: '40', name: 'Ghee (1L)', category: 'Dairy & Bakery', quantity: '1 L', price: 450, image: '/pure-ghee-bottle.jpg' },
  { id: '41', name: 'Ice Cream', category: 'Dairy & Bakery', quantity: '500 ml', price: 120, image: '/vanilla-ice-cream.jpg' },
  { id: '42', name: 'Lassi', category: 'Dairy & Bakery', quantity: '400 ml', price: 55, image: '/traditional-lassi-glass.jpg' },
  { id: '43', name: 'Condensed Milk', category: 'Dairy & Bakery', quantity: '397 g', price: 80, image: '/sweetened-condensed-milk-can.jpg' },
  { id: '44', name: 'Mozzarella', category: 'Dairy & Bakery', quantity: '200 g', price: 150, image: '/fresh-mozzarella-cheese.jpg' },
  { id: '45', name: 'Tofu', category: 'Dairy & Bakery', quantity: '400 g', price: 90, image: '/white-tofu-block.jpg' },

  // Staples & Grains (25 items)
  { id: '46', name: 'Basmati Rice', category: 'Staples & Grains', quantity: '1 kg', price: 200, tag: '10% OFF', image: '/white-basmati-rice.jpg' },
  { id: '47', name: 'White Rice', category: 'Staples & Grains', quantity: '1 kg', price: 80, tag: 'Best Seller', image: '/white-rice-grains.jpg' },
  { id: '48', name: 'Brown Rice', category: 'Staples & Grains', quantity: '1 kg', price: 120, image: '/brown-rice-grains.jpg' },
  { id: '49', name: 'Wheat Flour', category: 'Staples & Grains', quantity: '1 kg', price: 45, tag: 'Best Seller', image: '/wheat-flour-packet.jpg' },
  { id: '50', name: 'Maida', category: 'Staples & Grains', quantity: '1 kg', price: 50, image: '/white-maida-flour.jpg' },
  { id: '51', name: 'Cornflour', category: 'Staples & Grains', quantity: '500 g', price: 35, image: '/cornflour-packet.jpg' },
  { id: '52', name: 'Semolina', category: 'Staples & Grains', quantity: '500 g', price: 40, image: '/semolina-packet.jpg' },
  { id: '53', name: 'Red Lentils', category: 'Staples & Grains', quantity: '1 kg', price: 150, image: '/red-lentils-dal.jpg' },
  { id: '54', name: 'Yellow Lentils', category: 'Staples & Grains', quantity: '1 kg', price: 140, image: '/yellow-lentils-dal.jpg' },
  { id: '55', name: 'Green Lentils', category: 'Staples & Grains', quantity: '1 kg', price: 160, image: '/green-lentils-dal.jpg' },
  { id: '56', name: 'Black Chickpeas', category: 'Staples & Grains', quantity: '1 kg', price: 120, image: '/black-chickpeas.jpg' },
  { id: '57', name: 'White Chickpeas', category: 'Staples & Grains', quantity: '1 kg', price: 110, image: '/white-chickpeas.jpg' },
  { id: '58', name: 'Kidney Beans', category: 'Staples & Grains', quantity: '500 g', price: 85, image: '/red-kidney-beans.jpg' },
  { id: '59', name: 'Moong Dal', category: 'Staples & Grains', quantity: '1 kg', price: 180, image: '/green-moong-dal.jpg' },
  { id: '60', name: 'Tuwar Dal', category: 'Staples & Grains', quantity: '1 kg', price: 170, image: '/tuwar-dal-split.jpg' },
  { id: '61', name: 'Chana Dal', category: 'Staples & Grains', quantity: '1 kg', price: 160, image: '/yellow-chana-dal.jpg' },
  { id: '62', name: 'Masoor Dal', category: 'Staples & Grains', quantity: '1 kg', price: 150, image: '/red-masoor-dal.jpg' },
  { id: '63', name: 'Oats', category: 'Staples & Grains', quantity: '500 g', price: 80, image: '/rolled-oats.jpg' },
  { id: '64', name: 'Corn Flakes', category: 'Staples & Grains', quantity: '400 g', price: 120, image: '/corn-flakes-cereal.jpg' },
  { id: '65', name: 'Poha', category: 'Staples & Grains', quantity: '1 kg', price: 60, image: '/beaten-rice-poha.jpg' },
  { id: '66', name: 'Suji', category: 'Staples & Grains', quantity: '1 kg', price: 50, image: '/suji-semolina.jpg' },
  { id: '67', name: 'Ragi Flour', category: 'Staples & Grains', quantity: '1 kg', price: 90, image: '/ragi-flour-packet.jpg' },
  { id: '68', name: 'Jowar Flour', category: 'Staples & Grains', quantity: '1 kg', price: 70, image: '/jowar-flour-packet.jpg' },
  { id: '69', name: 'Bajra Flour', category: 'Staples & Grains', quantity: '1 kg', price: 80, image: '/bajra-flour-packet.jpg' },
  { id: '70', name: 'Pasta', category: 'Staples & Grains', quantity: '500 g', price: 60, image: '/pasta-box.jpg' },

  // Oils & Masalas (20 items)
  { id: '71', name: 'Sunflower Oil', category: 'Oils & Masalas', quantity: '1 L', price: 180, tag: 'Best Seller', image: '/sunflower-oil-bottle.jpg' },
  { id: '72', name: 'Coconut Oil', category: 'Oils & Masalas', quantity: '500 ml', price: 150, image: '/coconut-oil-bottle.jpg' },
  { id: '73', name: 'Mustard Oil', category: 'Oils & Masalas', quantity: '1 L', price: 170, image: '/mustard-oil-bottle.jpg' },
  { id: '74', name: 'Olive Oil', category: 'Oils & Masalas', quantity: '500 ml', price: 350, image: '/olive-oil-bottle.jpg' },
  { id: '75', name: 'Sesame Oil', category: 'Oils & Masalas', quantity: '250 ml', price: 120, image: '/sesame-oil-bottle.jpg' },
  { id: '76', name: 'Turmeric Powder', category: 'Oils & Masalas', quantity: '200 g', price: 40, tag: 'Best Seller', image: '/turmeric-powder-packet.jpg' },
  { id: '77', name: 'Red Chili Powder', category: 'Oils & Masalas', quantity: '200 g', price: 45, image: '/red-chili-powder-packet.jpg' },
  { id: '78', name: 'Cumin Seeds', category: 'Oils & Masalas', quantity: '100 g', price: 50, image: '/cumin-seeds.jpg' },
  { id: '79', name: 'Coriander Seeds', category: 'Oils & Masalas', quantity: '100 g', price: 45, image: '/coriander-seeds.jpg' },
  { id: '80', name: 'Black Pepper', category: 'Oils & Masalas', quantity: '100 g', price: 60, image: '/black-pepper-powder.jpg' },
  { id: '81', name: 'Garam Masala', category: 'Oils & Masalas', quantity: '100 g', price: 70, image: '/garam-masala-packet.jpg' },
  { id: '82', name: 'Curry Leaves', category: 'Oils & Masalas', quantity: '50 g', price: 25, image: '/fresh-curry-leaves.jpg' },
  { id: '83', name: 'Cloves', category: 'Oils & Masalas', quantity: '50 g', price: 80, image: '/cloves-spice.jpg' },
  { id: '84', name: 'Cinnamon', category: 'Oils & Masalas', quantity: '50 g', price: 70, image: '/cinnamon-sticks.jpg' },
  { id: '85', name: 'Cardamom', category: 'Oils & Masalas', quantity: '50 g', price: 150, image: '/green-cardamom-pods.jpg' },
  { id: '86', name: 'Bay Leaves', category: 'Oils & Masalas', quantity: '30 g', price: 40, image: '/bay-leaves.jpg' },
  { id: '87', name: 'Asafoetida', category: 'Oils & Masalas', quantity: '50 g', price: 60, image: '/asafoetida-hing.jpg' },
  { id: '88', name: 'Fenugreek Seeds', category: 'Oils & Masalas', quantity: '100 g', price: 45, image: '/fenugreek-seeds.jpg' },
  { id: '89', name: 'Star Anise', category: 'Oils & Masalas', quantity: '50 g', price: 80, image: '/star-anise.jpg' },
  { id: '90', name: 'Salt (1kg)', category: 'Oils & Masalas', quantity: '1 kg', price: 20, image: '/salt-packet.jpg' },

  // Snacks & Packaged Food (15 items)
  { id: '91', name: 'Chips', category: 'Snacks & Packaged Food', quantity: '200 g', price: 50, image: '/potato-chips-pack.jpg' },
  { id: '92', name: 'Namkeen', category: 'Snacks & Packaged Food', quantity: '200 g', price: 45, image: '/namkeen-snack-pack.jpg' },
  { id: '93', name: 'Instant Noodles', category: 'Snacks & Packaged Food', quantity: '300 g', price: 30, tag: 'Best Seller', image: '/instant-noodles-pack.jpg' },
  { id: '94', name: 'Popcorn', category: 'Snacks & Packaged Food', quantity: '100 g', price: 40, image: '/popcorn-packet.jpg' },
  { id: '95', name: 'Peanuts', category: 'Snacks & Packaged Food', quantity: '200 g', price: 60, image: '/roasted-peanuts.jpg' },
  { id: '96', name: 'Cashews', category: 'Snacks & Packaged Food', quantity: '200 g', price: 300, image: '/cashew-nuts.jpg' },
  { id: '97', name: 'Almonds', category: 'Snacks & Packaged Food', quantity: '200 g', price: 280, image: '/almond-nuts.jpg' },
  { id: '98', name: 'Raisins', category: 'Snacks & Packaged Food', quantity: '200 g', price: 200, image: '/dry-raisins.jpg' },
  { id: '99', name: 'Dates', category: 'Snacks & Packaged Food', quantity: '250 g', price: 150, image: '/dried-dates.jpg' },
  { id: '100', name: 'Chikhalwali', category: 'Snacks & Packaged Food', quantity: '200 g', price: 55, image: '/crispy-snack.jpg' },
  { id: '101', name: 'Dry Fruits Mix', category: 'Snacks & Packaged Food', quantity: '250 g', price: 250, image: '/mixed-dry-fruits.jpg' },
  { id: '102', name: 'Granola Bar', category: 'Snacks & Packaged Food', quantity: '150 g', price: 80, image: '/granola-bar-pack.jpg' },
  { id: '103', name: 'Chocolate', category: 'Snacks & Packaged Food', quantity: '100 g', price: 70, image: '/chocolate-bar.jpg' },
  { id: '104', name: 'Candy', category: 'Snacks & Packaged Food', quantity: '200 g', price: 60, image: '/candy-pack.jpg' },
  { id: '105', name: 'Jaggery', category: 'Snacks & Packaged Food', quantity: '500 g', price: 100, image: '/jaggery-block.jpg' },

  // Beverages (10 items)
  { id: '106', name: 'Tea Leaves', category: 'Beverages', quantity: '500 g', price: 200, tag: 'Best Seller', image: '/tea-leaves-packet.jpg' },
  { id: '107', name: 'Coffee', category: 'Beverages', quantity: '250 g', price: 250, image: '/coffee-beans-packet.jpg' },
  { id: '108', name: 'Instant Coffee', category: 'Beverages', quantity: '100 g', price: 150, image: '/instant-coffee-jar.jpg' },
  { id: '109', name: 'Green Tea', category: 'Beverages', quantity: '250 g', price: 180, image: '/green-tea-packet.jpg' },
  { id: '110', name: 'Herbal Tea', category: 'Beverages', quantity: '200 g', price: 120, image: '/herbal-tea-packet.jpg' },
  { id: '111', name: 'Cocoa Powder', category: 'Beverages', quantity: '200 g', price: 180, image: '/cocoa-powder-packet.jpg' },
  { id: '112', name: 'Horlicks', category: 'Beverages', quantity: '500 g', price: 250, image: '/horlicks-jar.jpg' },
  { id: '113', name: 'Bournvita', category: 'Beverages', quantity: '500 g', price: 200, image: '/bournvita-jar.jpg' },
  { id: '114', name: 'Orange Juice', category: 'Beverages', quantity: '1 L', price: 120, image: '/orange-juice-bottle.jpg' },
  { id: '115', name: 'Apple Juice', category: 'Beverages', quantity: '1 L', price: 130, image: '/apple-juice-bottle.jpg' },

  // Personal Care (10 items)
  { id: '116', name: 'Soap', category: 'Personal Care', quantity: '100 g', price: 30, tag: 'Best Seller', image: '/bathing-soap.jpg' },
  { id: '117', name: 'Shampoo', category: 'Personal Care', quantity: '400 ml', price: 150, image: '/shampoo-bottle.jpg' },
  { id: '118', name: 'Conditioner', category: 'Personal Care', quantity: '400 ml', price: 150, image: '/conditioner-bottle.jpg' },
  { id: '119', name: 'Toothpaste', category: 'Personal Care', quantity: '100 g', price: 50, image: '/toothpaste-tube.jpg' },
  { id: '120', name: 'Toothbrush', category: 'Personal Care', quantity: '1 piece', price: 40, image: '/toothbrush.jpg' },
  { id: '121', name: 'Deodorant', category: 'Personal Care', quantity: '150 ml', price: 200, image: '/deodorant-bottle.jpg' },
  { id: '122', name: 'Face Wash', category: 'Personal Care', quantity: '100 ml', price: 120, image: '/face-wash-bottle.jpg' },
  { id: '123', name: 'Moisturizer', category: 'Personal Care', quantity: '100 ml', price: 180, image: '/moisturizer-jar.jpg' },
  { id: '124', name: 'Sunscreen', category: 'Personal Care', quantity: '50 ml', price: 250, image: '/sunscreen-bottle.jpg' },
  { id: '125', name: 'Hair Oil', category: 'Personal Care', quantity: '200 ml', price: 100, image: '/hair-oil-bottle.jpg' },

  // Household & Cleaning (5 items for 130 total)
  { id: '126', name: 'Detergent Powder', category: 'Household & Cleaning', quantity: '1 kg', price: 120, tag: 'Best Seller', image: '/detergent-powder-box.jpg' },
  { id: '127', name: 'Dishwash Liquid', category: 'Household & Cleaning', quantity: '500 ml', price: 80, image: '/dishwash-liquid-bottle.jpg' },
  { id: '128', name: 'Floor Cleaner', category: 'Household & Cleaning', quantity: '500 ml', price: 100, image: '/floor-cleaner-bottle.jpg' },
  { id: '129', name: 'Toilet Cleaner', category: 'Household & Cleaning', quantity: '500 ml', price: 90, image: '/toilet-cleaner-bottle.jpg' },
  { id: '130', name: 'Glass Cleaner', category: 'Household & Cleaning', quantity: '500 ml', price: 110, image: '/glass-cleaner-bottle.jpg' },
];

export const categories = [
  'all',
  'Fruits & Vegetables',
  'Dairy & Bakery',
  'Staples & Grains',
  'Oils & Masalas',
  'Snacks & Packaged Food',
  'Beverages',
  'Personal Care',
  'Household & Cleaning',
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function findProductByName(name: string): Product | undefined {
  const lowerName = name.toLowerCase();
  return products.find((p) => p.name.toLowerCase().includes(lowerName));
}
