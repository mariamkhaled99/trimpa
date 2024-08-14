![Trimpa Logo](./public/logo.svg)

## Highlight

## Overview

`Trimpa` is the frontend project for a trip company, developed using [Next.js](https://nextjs.org/). This project serves as the client-side application for managing and displaying trip-related information.

![Erd Schema](./prisma-erd.svg)

## Database Tables

The `Trimpa` project utilizes various database tables to manage and store trip-related data effectively. Below is an overview of each table and its purpose:

- **Review**: Stores customer feedback and ratings for trips, airlines, hotels, and other services offered by the company.

- **Airport**: Contains details of airports, including airport codes, names, locations, and other relevant information essential for managing flights.

- **Passenger**: Holds information about passengers, including personal details, contact information, and travel history.

- **Payment**: Manages transaction details, such as payment methods, amounts, and statuses for bookings and other services.

- **Flights**: Contains flight schedules, routes, airline associations, and booking information.

- **Seats**: Tracks seat availability, allocation, and configurations on different flights.

- **Unique Places**: Stores information about popular and unique travel destinations offered by the company, including descriptions, attractions, and related metadata.

- **Airlines**: Holds records of airlines, including names, logos, and associated flight information.

- **Hotels**: Manages details of hotels, including names, locations, amenities, and availability associated with various travel packages.

- **Itinerary**: Tracks and manages the day-to-day schedule for trips, including activities, accommodation, and travel arrangements.


### Review
- **rating**: `int`
- **passenger_id**`foreign key`
- **city_id**:`foreign key`
- **created_at**: `date`
- **review**: `text`

### Country
- **country**: `text`

### City
- **city**: `text`
- **country_id**: `foreign key`

### Airport
- **code**: `text`
- **city_id**:`foreign key`
  

### Passenger
- **profileImage**:`text`
- **firstName**:`text`
- **lastName**:`text`
- **middle**:`text`
- **suffix**:`text`
- **dob**:`date`
- **email**:`text`
- **phone**:`text`
- **knownTravellerNumber**:`text`
- **emergencyContactId**`foreign key`
- **bags_number**:`int`
- **city_id**`foreign key`

### Emergency Contact
- **firstName**:`text`
- **lastName**:`text`
- **email**:`text`
- **phone**:`text`

### Payment
- **passenger_id**`foreign key`
- **name**:`text`
- **cvv**: `int`
- **card_number**:`int`
- **expire_date**:`date`

### Flight
- **imgsrc**: `text`
- **price**: `int`
- **flightDuration**: `time`
- **airline_id**: `foreign key`
- **flightType**: `boolean`  (`arriving` or `departing`)
- **startDate**: `"time"`
- **endDate**: `"time"`
- **tripType**: : `boolean` (`"one way"` or `round trip`)
  - If `one way`, **arrival_id** : `foreign key` is `null` (self relation to **flight_id**)
- **stopNumber**: `int`
- **stopDuration**: `time`
- **flightID**:: `foreign key`
- **fromAirport_id**: `foreign key`
- **fromCity_id**: `foreign key`
- **toAirport_id**: `foreign key`
- **toCity_id**: `foreign key` (includes country)

### Seats
- **seatNumber**: `uniquecode`
- **coords**: `text`
- **status**:`boolean` (`"available"`, `"occupied"`)
- **class**: `boolean`(`"Business"` or `"Economy"`)
- **flight_id**: `foreign key`

### Places
- **place_image**: `text`
- **place_name**: `text`
- **description**: `text`
- **city_id**:`foreign key`
- **price**: `int`

### Experience
- **experience_image**: `text`
- **experience_name**: `text`
- **description**: `text`
- **city_id**: `foreign key`
- **price**: `int`

### Airline
- **City_id**:`foreign key`
- **name**: `text`

### Hotel
- **hotel_image**: `text`
- **hotel_name**: `text`
- **description**: `text`
- **city_id**: `foreign key`
- **price**: `int`

### Itinerary
- **emails**: `text`

### Booking
- **Seat_id**: `foreign key`
- **Passenger_id**: `foreign key`
- **Flight_id**: `foreign key`
- **Total_price**: `int`
- **Payment_method_id**: `foreign key`
## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for package management)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/mariamkhaled99/trimpa.git
   ```

2. **go to your project**

   ```bash
   cd trimpa
   ```

3. **install npm or yarn**

   ```bash
   npm install
   ```

   or

   ```bash
    yarn install
   ```

4. **run your project**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```
