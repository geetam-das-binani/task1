# React + Vite

Dynamic Table with Pagination, Sorting, and Search

This project is a React-based application using Vite that features a dynamic table. The table fetches data from an API and includes pagination, sorting, and search functionality to provide an intuitive and efficient user experience.

## Features

Dynamic Data Fetching: The table dynamically fetches data from a specified API, allowing real-time data display.

Pagination: The table supports pagination to efficiently manage and navigate large datasets.

Sorting: Users can sort the table by various columns to easily find the information they need.

Search: The table includes a search bar to filter data based on user input, making it easier to locate specific records.

## Getting Started

## Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn

## Installation

1.Clone the repository:
git remote add origin https://github.com/geetam-das-binani/task1.git
2.Navigate to the project director:
cd your-repo-name
3.Install dependencies:
npm install

### Running the Project

To start the development server:
npm run dev

## or

yarn dev
Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the project for production:
npm run build

The output will be in the `dist/` directory.

## Project Structure

├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project configuration and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
