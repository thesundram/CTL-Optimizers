# CTL Optimization Tool

Optimize Coil-to-Line operations with intelligent assignment and line balancing for steel service centres.

## Features

- **Coil Management**: Track and manage hot-rolled coil inventory
- **Order Management**: Handle sales orders and sheet requirements
- **Line Specifications**: Configure CTL line parameters
- **Intelligent Optimizer**: Generate optimal coil-to-line assignments
- **RM Forecasting**: Predict future raw material requirements
- **Visual Analytics**: Real-time visualization of operations
- **User Authentication**: Secure login with role-based access control
- **Admin Panel**: User management with expiry date control
- **Session Management**: Auto-logout after 2 hours of inactivity

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Database**: MongoDB Atlas
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Notifications**: Sonner
- **Analytics**: Vercel Analytics

## Tools & Resources Used

- **AI Assistant**: Google Gemini, Amazon Q Developer
- **Development Tools**: VS Code, Git
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)
- MongoDB Atlas account

### Installation

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000
```

**Generate NextAuth Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Running the Application

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## User Management

### Admin Features

- Create, edit, and delete users
- Set user expiry dates
- Assign roles (Admin/User)
- Add optional company names
- View user creation timestamps

### User Roles

- **Admin**: Full access, no expiry date, can manage users
- **User**: Limited access, account expires based on set date

### Session Management

- Sessions expire after **2 hours** of inactivity
- Users are automatically logged out after session expiry
- Manual logout available via header button

## License

© **2026** Designed by **Sundram Pandey** - **Uttam Innovative Solution Pvt. Ltd.**

## Support

For support and inquiries, please contact **Uttam Innovative Solution Pvt. Ltd.**
