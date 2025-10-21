# KOPI Coffee Shop - Single Page Application

A modern, responsive Single Page Application for KOPI Coffee Shop built with React and React Router DOM.

## Features

- **Single Page Application (SPA)** with React Router DOM
- **5 Main Sections**: Home, About, Menu, Gallery, Contact
- **Responsive Design** with Bootstrap 5
- **Dynamic Routing** with programmatic navigation
- **404 Error Page** for invalid routes
- **Modern UI/UX** with coffee shop theme

## Sections

1. **Home** - Welcome page with hero section and features
2. **About** - Our story, mission, values, and team
3. **Menu** - Interactive menu with categories (Coffee, Tea, Pastries, Food)
4. **Gallery** - Visual showcase of the coffee shop
5. **Contact** - Contact form, location info, and FAQ

## Technologies Used

- React 18
- React Router DOM 6
- Bootstrap 5
- CSS3 with custom styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   └── Header.js          # Navigation header component
├── pages/
│   ├── Home.js           # Home page
│   ├── About.js          # About page
│   ├── Menu.js           # Menu page with categories
│   ├── Gallery.js        # Gallery page
│   ├── Contact.js        # Contact page with form
│   └── NotFound.js       # 404 error page
├── App.js                # Main app component with routing
├── App.css               # Custom styles
└── index.js              # React entry point
```

## Features Implemented

✅ Single Page Application with React Router DOM  
✅ Navigation between pages without browser reload  
✅ Dynamic routing with active link highlighting  
✅ Protected routes (404 page for invalid routes)  
✅ Programmatic navigation  
✅ Responsive header component  
✅ Bootstrap styling with custom coffee shop theme  
✅ Interactive menu with category filtering  
✅ Contact form with validation  
✅ Modern, mobile-friendly design  

## Customization

The application is fully customizable:
- Colors and themes can be modified in `src/App.css`
- Menu items can be updated in `src/pages/Menu.js`
- Contact information can be changed in `src/pages/Contact.js`
- Content can be modified in respective page components

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.
