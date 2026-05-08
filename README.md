# SpendWise – Expense Tracking System

## Project Overview

**SpendWise** is a web-based expense tracking application designed to help users manage and monitor their daily expenses efficiently.

The application provides a simple and user-friendly interface where users can:

* Add expenses
* Edit or delete expenses
* Search expenses
* Filter expenses
* View expense summaries and dashboards
* Generate expense reports

SpendWise aims to simplify personal financial management by maintaining organized and secure expense records.

---

# Features

## Authentication

* User Registration
* User Login
* Secure Authentication
* Protected Routes

## Expense Management

* Add New Expenses
* Edit Existing Expenses
* Delete Expenses
* Manage Expense Records

## Search & Filter

* Search Expenses by Keyword
* Filter Expenses by Category
* Filter Expenses by Date
* Filter Expenses by Amount

## Dashboard

* Total Expense Overview
* Category-wise Expense Summary
* Recent Transactions
* Expense Analytics

## Reports

* Expense Reports
* Monthly Expense Summary
* Financial Tracking Insights

---

# Technology Stack

| Layer    | Technology           |
| -------- | -------------------- |
| Frontend | React.js + Vite      |
| Backend  | Node.js + Express.js |
| Database | MongoDB              |

---

# Project Structure

* client/ → Frontend application using React.js + Vite
* server/ → Backend application using Node.js + Express.js
* controllers/ → Business logic handling
* routes/ → API route management
* models/ → MongoDB database models
* middleware/ → Authentication and custom middleware
* config/ → Configuration files
* README.md → Project documentation

---

# Suggested Modules

## 1. Authentication Module

Handles:

* User Signup
* User Login
* JWT Authentication
* Session Management

## 2. Expense Management Module

Handles:

* Create Expense
* Update Expense
* Delete Expense
* View Expense History

## 3. Dashboard Module

Handles:

* Expense Summaries
* Analytics
* Charts & Insights

## 4. Search & Filter Module

Handles:

* Search Functionality
* Filter by Category
* Filter by Date
* Filter by Amount

---

# Project Goals

* Simplify daily expense management
* Maintain organized expense records
* Provide quick expense tracking
* Improve financial monitoring

---

# Expected Outcome

The application will help users efficiently track and manage their expenses through a secure, responsive, and easy-to-use system.

---

# Installation Guide

## Clone the Repository

Clone the project repository and navigate to the SpendWise project folder.

---

# Frontend Setup

* Navigate to the client folder
* Install required dependencies
* Start the frontend development server

Frontend runs on localhost port 5173.

---

# Backend Setup

* Navigate to the server folder
* Install required dependencies
* Start the backend server

Backend runs on localhost port 5000.

---

# Environment Variables

Create a `.env` file inside the server folder and add the required environment variables:

* PORT
* MONGO_URI
* JWT_SECRET

---

# Future Enhancements

* Export Reports as PDF/Excel
* Budget Planning
* Notifications & Reminders
* Dark Mode
* Mobile Responsive Improvements
* AI-based Expense Insights

---

# Author

Developed using the MERN Stack for efficient and organized expense management.
