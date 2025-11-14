import { findProductByName, getAllProducts } from './products';
import type { Product } from '@/types';

interface ParsedCommand {
  action: 'add' | 'remove' | 'category' | 'checkout' | 'unknown';
  product?: Product;
  quantity: number;
  category?: string;
}

export function parseVoiceCommand(command: string): ParsedCommand {
  const lowerCommand = command.toLowerCase();

  // Check for add to cart
  if (
    lowerCommand.includes('add') ||
    lowerCommand.includes('buy') ||
    lowerCommand.includes('get')
  ) {
    return parseAddCommand(lowerCommand);
  }

  // Check for category navigation
  if (
    lowerCommand.includes('show') ||
    lowerCommand.includes('open') ||
    lowerCommand.includes('go to') ||
    lowerCommand.includes('section')
  ) {
    return parseCategoryCommand(lowerCommand);
  }

  // Check for remove from cart
  if (lowerCommand.includes('remove') || lowerCommand.includes('delete')) {
    return parseRemoveCommand(lowerCommand);
  }

  // Check for checkout
  if (
    lowerCommand.includes('checkout') ||
    lowerCommand.includes('pay') ||
    lowerCommand.includes('proceed')
  ) {
    return { action: 'checkout', quantity: 1 };
  }

  return { action: 'unknown', quantity: 1 };
}

function parseAddCommand(command: string): ParsedCommand {
  let quantity = 1;

  // Extract quantity (e.g., "add 2 kg potatoes")
  const quantityMatch = command.match(/(\d+)\s*(kg|l|g|pc|packet|pieces?)/i);
  if (quantityMatch) {
    quantity = parseInt(quantityMatch[1], 10);
  }

  // Extract product name
  let productName = command;
  productName = productName
    .replace(/add|buy|get/gi, '')
    .replace(/to cart|please|thanks/gi, '')
    .replace(/\d+\s*(kg|l|g|pc|packet|pieces?)/gi, '')
    .replace(/^\s+|\s+$/g, '')
    .trim();

  const product = findProductByName(productName);

  if (product) {
    return { action: 'add', product, quantity };
  }

  return { action: 'unknown', quantity: 1 };
}

function parseCategoryCommand(command: string): ParsedCommand {
  const categories: Record<string, string> = {
    fruits: 'Fruits & Vegetables',
    vegetables: 'Fruits & Vegetables',
    produce: 'Fruits & Vegetables',
    dairy: 'Dairy & Bakery',
    bakery: 'Dairy & Bakery',
    bread: 'Dairy & Bakery',
    milk: 'Dairy & Bakery',
    staples: 'Staples & Grains',
    grains: 'Staples & Grains',
    rice: 'Staples & Grains',
    lentils: 'Staples & Grains',
    pulses: 'Staples & Grains',
    dal: 'Staples & Grains',
    oils: 'Oils & Masalas',
    masalas: 'Oils & Masalas',
    spices: 'Oils & Masalas',
    snacks: 'Snacks & Packaged Food',
    packaged: 'Snacks & Packaged Food',
    beverages: 'Beverages',
    drinks: 'Beverages',
    tea: 'Beverages',
    coffee: 'Beverages',
    personal: 'Personal Care',
    care: 'Personal Care',
    hygiene: 'Personal Care',
    household: 'Household & Cleaning',
    cleaning: 'Household & Cleaning',
  };

  for (const [key, category] of Object.entries(categories)) {
    if (command.includes(key)) {
      return { action: 'category', category, quantity: 1 };
    }
  }

  return { action: 'unknown', quantity: 1 };
}

function parseRemoveCommand(command: string): ParsedCommand {
  let productName = command;
  productName = productName
    .replace(/remove|delete/gi, '')
    .replace(/from cart/gi, '')
    .trim();

  const product = findProductByName(productName);

  if (product) {
    return { action: 'remove', product, quantity: 1 };
  }

  return { action: 'unknown', quantity: 1 };
}
