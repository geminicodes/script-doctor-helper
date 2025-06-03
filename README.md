
# QR Connect - URL to QR Code Generator

A modern, mobile-first web application that converts URLs into downloadable QR codes and professional business cards.

## Features

✅ **QR Code Generation**: Convert any URL into a high-quality QR code
✅ **Business Card Mockup**: Preview QR codes on professional 3.5x2 inch cards
✅ **Multiple Download Formats**: Download QR codes as PNG and cards as PNG/PDF
✅ **Mobile-First Design**: Optimized for smartphone usage
✅ **PWA Support**: Works as a Progressive Web App on Android and iOS
✅ **Google Authentication**: Sign in with Google (ready for Supabase integration)
✅ **Modern UI/UX**: Inspired by Glitch.com design with Webflow typography

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **QR Generation**: qrcode.js library
- **PDF Generation**: jsPDF + html2canvas
- **Authentication**: Ready for Google Auth via Supabase
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd qr-connect
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with default settings

### Manual Deploy

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Supabase Integration Setup

To enable backend functionality (authentication, URL saving, analytics):

1. Click the green "Supabase" button in the Lovable interface
2. Connect your Supabase project
3. The following features will be automatically configured:
   - Google OAuth authentication
   - URL storage in database
   - User management
   - Analytics tracking

### Database Schema (Auto-created with Supabase integration)

```sql
-- URLs table for saving generated QR codes
create table public.urls (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  original_url text not null,
  qr_code_url text,
  card_downloaded boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.urls enable row level security;

-- RLS policies
create policy "Users can insert their own URLs" on public.urls
  for insert with check (auth.uid() = user_id);

create policy "Users can view their own URLs" on public.urls
  for select using (auth.uid() = user_id);
```

## PWA Installation

### Android
1. Open the app in Chrome
2. Tap the menu (⋮) button
3. Select "Add to Home screen"
4. Tap "Add"

### iOS
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

## Environment Variables

When connected to Supabase, these will be automatically configured:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Features Roadmap

- ✅ QR Code generation
- ✅ Card mockup and download
- ✅ PWA support
- ✅ Mobile-first responsive design
- 🔄 Google Authentication (ready for Supabase)
- 🔄 URL saving to database
- 🔄 Email capture integration
- 🔄 PostHog analytics
- 🔄 Mailchimp integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@qrconnect.app or join our Discord community.
