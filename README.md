# Movie Reservation System

## Overview

The Movie Reservation System is a comprehensive web application that allows users to search for movies, select seats, and purchase tickets for a specific showtime. This system is designed to handle the complexity of managing movie schedules, seat reservations, and user interactions in a seamless manner.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Movie Listings**: Browse and search for movies by title, genre, and actors.
- **Theater Management**: Manage multiple theaters with different seating configurations.
- **Schedule Management**: Add and manage movie schedules.
- **Seat Selection**: View seat availability and select preferred seats.
- **Ticket Booking**: Reserve and purchase tickets using an external payment gateway (e.g., Stripe).
- **User Authentication**: Secure user registration and login.

## Installation

### Prerequisites
- Node.js
- MySQL
- Stripe API Key (or any other payment gateway API key)

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/tonycnsniper/movie-reservation-system.git
    cd movie-reservation-system
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/moviereservation
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
4. Start the application:
    ```sh
    npm start
    ```

## Usage

### Running the Server
To start the server, run:
```sh
npm start
```

### Accessing the Application
Open your browser and navigate to http://localhost:3000 to start using the movie reservation system.

## API Documentation

### Movies
* GET /api/movies: List all movies
* GET /api/movies/:id: Get details of a specific movie
* POST /api/movies: Add a new movie
* PUT /api/movies/:id: Update movie details
* DELETE /api/movies/:id: Delete a movie

### Theaters
* GET /api/theaters: List all theaters
* GET /api/theaters/:id: Get details of a specific theater
* POST /api/theaters: Add a new theater
* PUT /api/theaters/:id: Update theater details
* DELETE /api/theaters/:id: Delete a theater

### Reservations
* GET /api/reservations: List all reservations
* GET /api/reservations/:id: Get details of a specific reservation
* POST /api/reservations: Create a new reservation
* PUT /api/reservations/:id: Update reservation details
* DELETE /api/reservations/:id: Cancel a reservation

## Database Schema

## Technologies Used

## Contributing

## License

This project is licensed under the MIT License. See the LICENSE file for more details.