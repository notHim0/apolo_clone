# Project Documentation

## 📁 Folder Structure
```
project-root/
├── frontend/ # Next.js application
│   ├── pages/ # Next.js routes
│   ├── public/ # Static assets
│   └── ... # Other Next.js files
├── backend/ # Node.js server
│   ├── src/ # Backend source
│   └── ... # Server configuration
├── .gitignore # Git ignore rules
└── README.md # This file
```

## 🧠 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (v18 or above)
- PostgreSQL (local or cloud)
- Yarn or npm

## ⚙️ Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   npm install
   # or
   yarn install
   ```

2. **Setup environment file**
   Create a `.env` file with the following:
   ```
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<your-db-name>?schema=public"
   PORT=5000
   ```

3. **Initialize the database**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🖥️ Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
