# Natours Application

Built using Node.js express MongoDB mongoose

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server side code

`NODE_ENV`

`PORT`

`DATABASE`

`USER`

`DATABASE_PASSWORD`

`JWT_SECRET`

`JWT_EXPIRES_IN`

`JWT_COOKIE_EXPIRES_IN`

`STRIPE_SECRET_KEY`

## Run Locally

Clone the project

```bash
  git clone https://github.com/gherardiD/traveler-wallet
```

Start app

```bash
  npm i
  node server.js {or npm start}
```

a questo punto recarsi all'indirizzo http://127.0.0.1:3000/

# Schema Logico del Database

## Entità e Relazioni

### Tour
- **id** (PK)
- **name**
- **slug**
- **duration**
- **maxGroupSize**
- **difficulty**
- **ratingsAverage**
- **ratingsQuantity**
- **price**
- **priceDiscount**
- **summary**
- **description**
- **imageCover**
- **images**
- **createdAt**
- **startDates**
- **secretTour**
- **startLocation**
  - **type**
  - **coordinates**
  - **address**
  - **description**
- **locations**
  - **type**
  - **coordinates**
  - **address**
  - **description**
  - **day**
- **guides** (FK to User)

### User
- **id** (PK)
- **name**
- **email**
- **photo**
- **role**
- **password**
- **passwordConfirm**
- **passwordChangedAt**
- **passwordResetToken**
- **passwordResetExpires**
- **active**

### Booking
- **id** (PK)
- **tour** (FK to Tour)
- **user** (FK to User)
- **price**
- **createdAt**
- **paid**

### Review
- **id** (PK)
- **review**
- **rating**
- **createdAt**
- **tour** (FK to Tour)
- **user** (FK to User)

## Schema Relazionale

```plaintext
Tour
-----
id (PK)
name
slug
duration
maxGroupSize
difficulty
ratingsAverage
ratingsQuantity
price
priceDiscount
summary
description
imageCover
images
createdAt
startDates
secretTour
startLocation.type
startLocation.coordinates
startLocation.address
startLocation.description
locations.type
locations.coordinates
locations.address
locations.description
locations.day
guides (FK to User)

User
-----
id (PK)
name
email
photo
role
password
passwordConfirm
passwordChangedAt
passwordResetToken
passwordResetExpires
active

Booking
-------
id (PK)
tour (FK to Tour)
user (FK to User)
price
createdAt
paid

Review
------
id (PK)
review
rating
createdAt
tour (FK to Tour)
user (FK to User)


