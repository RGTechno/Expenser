# **Expenser**

```
Expenser is a web app that allows you to save your day to day transactions/purchases/expenses etc. into a very Simple Non Complex Form so that you could track your Spendings anytime easily without any hustle
```

# Project Structure

## Backend (Server Side Code)

```
src
├───controllers
├───database
├───public
├───routes
└───views
```

## Frontend (Client Side Code)

```
src/public
├───app
├───components
├───css
├───js
└───utils
```

# Business Logic

**Users**

- Create user will create a user with personalized Username and Password provided by the user

**Transactions**

1. Add a new transaction will add new transaction, required   fields are

      - Amount of Expense
      - Description of Expense

2. Display transactions will display all the transactions added by the particular user in his/her dashboard


# API Documentation

> **User**
1. > GET /account/login

     Loads Login Page

2. > GET /account/signup

     Loads Signup Page

3. > POST /account/login

     Gives access to user if authenticated and redirects to /dashboard

4. > POST /account/signup

     Creates a new user

5. > GET /dashboard

     Loads the user dashboard page with all entered transactions

6. > GET /profile

     Loads Profile page of logged-in user



> **Transaction**

1. > GET /dashboard

     Loads the user dashboard page with all entered transactions

2. > POST /dashboard

     Creates a new transaction by particular user. Required fields are -

     ```
     price =
     title =
     ```









