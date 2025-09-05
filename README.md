# Super Coach Pro Landing Page

A high-converting, responsive landing page for Super Coach Pro - an AI-powered fitness app that helps users plan workouts and meals with personalized recommendations.

## 🚀 Features

- **Modern Design**: Futuristic dark theme with neon accents and glassmorphism effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop (360px+)
- **High Performance**: Fast loading with optimized images and animations
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant with proper focus management
- **Email Capture**: Working subscription form with validation and feedback

## 🎨 Design System

- **Colors**: Dark background (#0B1220) with cyan (#00E5FF) and violet (#8A2BE2) accents
- **Typography**: Inter font family for modern, clean readability
- **Effects**: Glassmorphism cards, subtle glows, and smooth animations
- **Components**: Custom variants using shadcn/ui with design system tokens

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom variants
- **Icons**: Lucide React
- **Forms**: React Hook Form with validation
- **Animations**: CSS animations and transitions

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd super-coach-pro-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build  
# Deploy dist folder to Netlify
```

### Static Hosting
The built files in `dist/` can be deployed to any static hosting service.

## 📧 Email Integration

The landing page includes a working email subscription form. The current implementation uses a mock API endpoint (`/api/subscribe`).

### Production Integration

To connect to a real backend:

1. **Replace the API endpoint** in `src/components/hero-section.tsx`
2. **Add environment variables** for your email service
3. **Update the mock handler** in `public/api/subscribe/`

Popular email services to integrate:
- Mailchimp API
- ConvertKit API  
- SendGrid API
- Supabase (for database storage)

## 🔧 Environment Variables

Create a `.env.local` file:

```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXX
VITE_API_BASE_URL=https://your-api.com
VITE_MAILCHIMP_API_KEY=your-key
```

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Focus management and keyboard navigation
- Color contrast ratio ≥ 4.5:1
- Screen reader friendly

## 📊 Analytics

The landing page includes Google Analytics 4 integration. Update the tracking ID in `index.html` and your environment variables.

## 🎯 Performance Optimizations

- Lazy loading for images
- Optimized font loading
- Minimal JavaScript bundle
- CSS animations over JavaScript
- Compressed assets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@supercoachpro.com or join our Discord community.

---

Built with ❤️ by the Super Coach Pro team