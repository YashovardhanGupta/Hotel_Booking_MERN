# Hotel Booking Application 

**Live Demo:** [https://quickstay-three-ashy.vercel.app/](https://quickstay-three-ashy.vercel.app/)

A full-stack, monorepo-based hotel booking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project provides a comprehensive platform for users to browse and book hotel rooms, and for hotel owners to list their properties, manage rooms, and track bookings.

## Key Features

*   **Role-Based Access Control:** Distinct experiences for regular Users (booking rooms) and Hotel Owners (managing properties).
*   **Authentication & Security:** Secure user authentication managed by [Clerk](https://clerk.com/), seamlessly integrated with our backend MongoDB via Webhooks.
*   **Property Management (Owners):** Owners can register their hotels, add new rooms with images (via Cloudinary), and toggle room availability.
*   **Booking System:** Users can search for rooms, check availability for specific dates, and make reservations.
*   **Dashboard & Tracking:** Users can view their booking history, while owners have a dedicated dashboard to manage reservations for their property.
*   **Modern UI:** A responsive, user-friendly interface built with React and styled using Tailwind CSS, featuring global state management via Context API and toast notifications for better UX.

## Technology Stack

**Frontend (Client)**
*   React (Vite)
*   Tailwind CSS
*   Clerk React SDK (Authentication)
*   React Router DOM
*   Axios (API requests)
*   React Hot Toast (Notifications)

**Backend (Server)**
*   Node.js & Express.js
*   MongoDB & Mongoose (Database)
*   Clerk Express SDK & Svix (Webhook verification)
*   Cloudinary & Multer (Image processing and storage)

## Project Structure

This project uses a monorepo structure separating the client and server:

```text
Hotel_Booking_MERN/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Global State (AppContext)
│   │   ├── pages/          # Main application views
│   │   └── App.jsx         # Main router setup
│   └── package.json
│
├── server/                 # Backend Express application
│   ├── configs/            # DB, Cloudinary, and Clerk configurations
│   ├── controllers/        # Core business logic and API handlers
│   ├── middleware/         # Auth protection and file upload handling
│   ├── models/             # Mongoose database schemas
│   ├── routes/             # API endpoint definitions
│   ├── server.js           # Express server entry point
│   └── package.json
```

## Getting Started

Follow these steps to run the application locally.

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB instance (local or Atlas).
*   Accounts for Clerk (Authentication) and Cloudinary (Image Hosting) to get the required API keys.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd Hotel_Booking_MERN
```

### 2. Setup the Backend
```bash
cd server
npm install
```
*   Create a `.env` file in the `server` directory and add your environment variables (MongoDB URI, Clerk Secret Keys, Webhook Secret, Cloudinary credentials).
*   Start the server:
```bash
npm run server
```

### 3. Setup the Frontend
Open a new terminal window:
```bash
cd client
npm install
```
*   Create a `.env` file in the `client` directory and add your Clerk Publishable Key (e.g., `VITE_CLERK_PUBLISHABLE_KEY=...`).
*   Start the development server:
```bash
npm run dev
```

## API Endpoints Overview

*   **/api/user:** Manage user profiles and recent searches.
*   **/api/hotels:** Handle hotel owner registration.
*   **/api/rooms:** Create, fetch, and manage room availability.
*   **/api/bookings:** Check availability, create reservations, and fetch booking histories.
*   **/api/clerk:** Webhook endpoint to sync Clerk users with the MongoDB database.

*(For an in-depth explanation of the architecture, data flow, and code structure, please refer to the `Project_Guide.md` included in the repository).*
