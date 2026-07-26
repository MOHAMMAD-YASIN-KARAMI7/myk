# MYK Platform v1.0

**Premium Personal Platform for Mohammad Yasin Karami**

## 🌟 Overview

MYK Platform is a modern, premium personal website showcasing projects, expertise, and innovations from Mohammad Yasin Karami - an AI Engineer, Python Developer, and Entrepreneur.

## 📋 Features

### Pages
- 🏠 **Home** - Premium hero section with smooth animations
- ℹ️ **About** - Biography, learning journey, interests, and vision
- 📬 **Contact** - Professional contact form with database integration

### Design & UX
- ✨ Glassmorphism effects
- 🎬 Smooth Framer Motion animations
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ♿ Accessible components
- 🎨 Premium typography and colors

### Technical
- 🔒 TypeScript strict mode
- 🗄️ SQLite + Prisma ORM
- 🔌 Next.js API routes
- 📝 Form validation (Zod + React Hook Form)
- 🌐 SEO optimization
  - JSON-LD structured data
  - Dynamic sitemap
  - OpenGraph & Twitter Cards
  - Robots.txt
  - Metadata management
- 🛠️ PWA ready with manifest
- 📊 Google Analytics prepared

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

**Backend:**
- Next.js API Routes
- Prisma ORM

**Database:**
- SQLite (local)
- PostgreSQL ready (migration ready)

**Other:**
- Zod (validation)
- React Hook Form

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Mohammad-yasin-karami/myk-platform.git
cd myk-platform

# Install dependencies
npm install

# Setup environment
cp .env.local.example .env.local

# Initialize database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run db:push    # Sync database schema
npm run db:migrate # Create migration
npm run db:studio  # Open Prisma Studio
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Page routes
│   ├── api/               # API endpoints
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── navbar.tsx
│   └── footer.tsx
├── features/              # Feature modules
│   ├── home/             # Home page feature
│   ├── about/            # About page feature
│   └── contact/          # Contact page feature
├── database/             # Database
│   └── client.ts         # Prisma client
├── lib/                  # Utilities
├── locales/              # Translations (EN/FA)
├── styles/               # Global styles
├── types/                # TypeScript types
└── utils/                # Helper functions
```

## 📞 Contact Information

- **Email:** officiallcapitanyasin@gmail.com
- **GitHub:** [Mohammad-yasin-karami](https://github.com/Mohammad-yasin-karami)
- **Instagram:** [@officialmyk](https://instagram.com/officialmyk)
- **Telegram:** [t.me/mykcontactbot](https://t.me/mykcontactbot)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

```bash
npm run build
```

## 📊 Database Schema

### ContactMessage
```prisma
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 Design System

### Colors
- **Primary:** Dark/Light (text & background)
- **Accent:** Purple (#4c37ff)
- **Secondary:** Gray tones

### Typography
- **Font:** Geist (sans-serif)
- **Mono:** Geist Mono
- **Base Size:** 16px

## 🔐 Security

- Input validation (Zod)
- XSS protection
- Environment variables
- Secure headers
- CSRF protection ready

## 📄 License

Private - Mohammad Yasin Karami

## 👤 Author

**Mohammad Yasin Karami**
- AI Engineer
- Python Developer
- Entrepreneur

---

**Built with ❤️ for the future**
