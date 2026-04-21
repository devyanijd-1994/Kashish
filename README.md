# Kashish Joshi Research - React Website

A modern, responsive React website for Kashish Joshi Research - a SEBI registered financial advisory and stock market research company.

## Features

- **Modern React Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: React Helmet for meta tags and SEO optimization
- **Performance Optimized**: Lazy loading and optimized components
- **Mobile First**: Mobile-first responsive design approach
- **Professional UI**: Clean, modern interface with gradient designs
- **Lead Generation**: Multiple contact forms for lead capture
- **WhatsApp Integration**: Fixed WhatsApp button for instant communication

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **HTTP Client**: Axios
- **SEO**: React Helmet

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kashish-joshi-research
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Footer component
│   ├── LeadForm.js     # Contact/lead form
│   ├── WhatsAppButton.js # Fixed WhatsApp button
│   └── ScrollToTop.js  # Scroll to top utility
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Key Components

### Header
- Responsive navigation with mobile menu
- Sticky header with scroll effects
- Contact information in top bar

### Home Page
- Hero section with lead form
- Services overview
- About section with progress bars
- Testimonials
- FAQ section
- Call-to-action sections

### Services Page
- Detailed service listings
- Pricing information
- Benefits section
- Process explanation

### Contact Page
- Contact form with validation
- Contact information cards
- Business hours
- FAQ section

### Lead Form
- Form validation
- Multiple service options
- Success/error messaging
- Responsive design

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // ... more shades
  }
}
```

### Content
- Update company information in components
- Modify service offerings in Services.js
- Update contact details in Contact.js and Header.js

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom animations and utilities defined in CSS

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `build` folder contents to your web server

## Performance Optimizations

- Lazy loading of images
- Code splitting with React.lazy()
- Optimized bundle size
- Compressed assets
- SEO meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support and questions, contact:
- Email: info@kashishjoshiresearch.com
- Phone: +91 91717 18451
- WhatsApp: [Chat Now](https://wa.link/iw4ct4)

---

**SEBI Registration No**: INH000017240