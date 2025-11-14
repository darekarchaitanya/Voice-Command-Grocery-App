# VoiceGrocery - AI-Powered Voice Command Grocery Shopping Website

A fully responsive, feature-rich grocery shopping application powered by voice recognition. Order your daily essentials using simple voice commands with a premium Indian grocery app aesthetic inspired by BigBasket and Blinkit.

## Features

### 🎤 Voice Command Support
- **Add Items**: "Add apples to cart", "Add 2 kg potatoes", "Add milk"
- **Navigate Categories**: "Show fruits section", "Go to vegetables", "Open snacks category"
- **Manage Cart**: "Open cart", "Remove apples from cart", "Clear cart"
- **Checkout**: "Go to checkout", "Proceed to payment"
- Speech Recognition API integration with en-IN language support
- Real-time command display and status feedback

### 🛒 Smart Shopping Cart
- Add/remove items with quantity adjustment
- Cart persistence across page navigation
- Automatic delivery charge calculation (free over ₹500)
- Real-time total and subtotal tracking
- Desktop sidebar and mobile drawer layouts
- Visual cart item count in header

### 📦 130+ Grocery Products
Organized across 8 premium categories:
- **Fruits & Vegetables** (25 items): Fresh produce with seasonal availability
- **Dairy & Bakery** (20 items): Milk, paneer, eggs, bread, and dairy products
- **Staples & Grains** (25 items): Rice, flour, lentils, pulses, and dry goods
- **Oils & Masalas** (20 items): Cooking oils and premium Indian spices
- **Snacks & Packaged Food** (15 items): Dry fruits, nuts, noodles, chocolates
- **Beverages** (10 items): Tea, coffee, juice, health drinks
- **Personal Care** (10 items): Soap, shampoo, toothpaste, skincare
- **Household & Cleaning** (5 items): Detergents, cleaners, floor products

Each product includes name, quantity, price in Indian Rupees (₹), discount tags, and category information.

### 💳 Checkout & Payment Flow
- **3-Step Checkout Process**:
  1. Delivery details (name, address, city, pincode)
  2. Order review with payment method selection
  3. Order confirmation with delivery details
- Delivery slot selection (9-11 AM, 11-1 PM, etc.)
- Payment method options (Cash on Delivery, UPI, Card)
- Order summary with itemized pricing
- Demo order confirmation with success message

### 📱 Fully Responsive Design
- **Mobile First**: Optimized for all screen sizes
- **Desktop**: Sticky sidebar cart for convenient shopping
- **Tablet**: Adaptive layouts for medium screens
- **Smooth Interactions**: Hover effects, animations, and transitions
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

### 🎨 Modern UI/UX
- Vibrant gradient color scheme (Green, Orange, Red)
- Soft, rounded cards with smooth shadows
- Smooth hover effects and transitions
- Category filtering with visual feedback
- Toast notifications for user actions
- Loading states and error handling

## Tech Stack

### Frontend Framework
- **Next.js 16**: App Router with React 19.2
- **React**: Component-based architecture
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling with semantic design tokens

### Voice Recognition
- **Web Speech API**: Cross-browser speech recognition
- **Language**: English (India) - en-IN
- **Real-time Transcription**: Interim and final results

### State Management
- **React Context API**: Cart state management
- **Custom Hooks**: useRef for voice recognition

### UI Components
- **Lucide React**: Modern icon library
- **Custom Components**: Modular component structure
- **Shadcn/ui Components**: Pre-built UI elements

## Project Structure

\`\`\`
voicegrocery/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main app page
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section
│   ├── voice-panel.tsx      # Voice recognition panel
│   ├── product-list.tsx     # Product grid with filters
│   ├── product-card.tsx     # Individual product card
│   ├── cart.tsx             # Shopping cart
│   ├── checkout.tsx         # Checkout flow
│   └── toast.tsx            # Notification component
├── context/
│   └── cart-context.tsx     # Cart context provider
├── lib/
│   ├── products.ts          # 130+ product database
│   ├── voice-commands.ts    # Voice command parsing logic
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/
│   ├── fresh-*.png/jpg      # Product images
│   ├── icon.svg             # App icon
│   └── apple-icon.png       # Apple icon
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.mjs          # Next.js config
└── README.md                # This file
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18.18+ 
- npm or yarn package manager
- Modern web browser with Web Speech API support (Chrome, Edge, Safari)

### Installation

#### Option 1: Using the v0 UI
1. Click the "Publish" button in the top right of v0
2. Select "Deploy to Vercel"
3. Follow the Vercel deployment wizard

#### Option 2: Download and Run Locally
1. Click the three dots in the top right of the v0 preview
2. Select "Download ZIP"
3. Extract the files to your desired location

\`\`\`bash
cd voicegrocery
npm install
\`\`\`

### Running Locally

**Development Mode:**
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build:**
\`\`\`bash
npm run build
npm start
\`\`\`

## Usage Guide

### Adding Items via Voice
1. Click the microphone button in the voice panel
2. Say a command like: "Add fresh apples to cart" or "Add 2 packets of milk"
3. The command is processed and the item is added to your cart
4. Toast notifications confirm the action

### Shopping Features
1. **Browse**: Scroll through products or use category tabs
2. **Filter**: Click any category tab to view specific products
3. **Adjust Quantity**: Use +/- buttons on product cards
4. **Add to Cart**: Click "Add" button to add selected quantity
5. **Manage Cart**: Remove items or update quantities in the cart panel
6. **View Total**: See subtotal, delivery charges, and grand total

### Checkout Process
1. Click "Proceed to Checkout" from the cart
2. **Step 1**: Enter delivery details (name, address, city, pincode)
3. **Step 2**: Select delivery slot and payment method
4. **Step 3**: Confirm order - you'll see a success message

### Voice Commands Reference

#### Add to Cart
- "Add apples to cart"
- "Add 1 kg basmati rice"
- "Add 2 packets of milk"
- "Buy potatoes"
- "Get 500g paneer"

#### Navigate Categories
- "Show fruits section"
- "Go to vegetables"
- "Open dairy section"
- "Show snacks category"
- "Display beverages"

#### Manage Cart
- "Open cart"
- "Show shopping cart"
- "Remove apples from cart"
- "Clear cart"

#### Checkout
- "Go to checkout"
- "Proceed to payment"
- "Begin checkout"


