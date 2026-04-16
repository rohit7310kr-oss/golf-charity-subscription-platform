# Golf Charity Subscription Project

## Project Structure

```
golf-charity-subscript-PRD/
├── README.Md
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── middleware/
│   │   ├── catchAsyncHandler.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.route.js
│   └── utils/
│       ├── errorHandler.js
│       └── validator.js
│
└── frontend/
    ├── .env.development
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── eslint.config.js
    ├── vite.config.js
    ├── index.html
    ├── dist/
    │   ├── index.html
    │   ├── icons.svg
    │   ├── favicon.svg
    │   └── assets/
    │       ├── index-D77umU7Y.css
    │       └── index-BoEb8Idg.js
    ├── public/
    │   ├── icons.svg
    │   └── favicon.svg
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   ├── index.css
    │   ├── assets/
    │   │   ├── hero.png
    │   │   ├── react.svg
    │   │   └── vite.svg
    │   ├── config/
    │   │   └── index.js
    │   ├── services/
    │   │   └── axios.js
    │   ├── routes/
    │   │   └── AppRoutes.jsx
    │   ├── pages/
    │   │   ├── admin/
    │   │   │   ├── AdminCharityPage.jsx
    │   │   │   ├── AdminDashboardPage.jsx
    │   │   │   ├── AdminLayoutPage.jsx
    │   │   │   ├── AdminPaymentsPage.jsx
    │   │   │   ├── AdminSubscriptionPlansPage.jsx
    │   │   │   └── AdminUserPage.jsx
    │   │   ├── user/
    │   │   │   ├── UserDashboardPage.jsx
    │   │   │   ├── UserEnterScorePage.jsx
    │   │   │   ├── UserLayoutPage.jsx
    │   │   │   ├── UserMyScorePage.jsx
    │   │   │   └── UserProfilePage.jsx
    │   │   └── public/
    │   │       └── HomePage.jsx
    │   ├── features/
    │   │   ├── admin/
    │   │   │   ├── AdminLayout/
    │   │   │   │   ├── AdminLayout.jsx
    │   │   │   │   └── AdminLayout.module.css
    │   │   │   ├── Dashboard/
    │   │   │   │   ├── components/
    │   │   │   │   │   ├── AdminDashboard.jsx
    │   │   │   │   │   └── AdminDashboard.module.css
    │   │   │   │   ├── data/
    │   │   │   │   │   └── dashboard.js
    │   │   │   │   └── hooks/
    │   │   │   ├── Charities/
    │   │   │   │   ├── components/
    │   │   │   │   │   └── AdminCharities.jsx
    │   │   │   │   ├── data/
    │   │   │   │   │   └── data.js
    │   │   │   │   └── hooks/
    │   │   │   ├── Payments/
    │   │   │   │   ├── components/
    │   │   │   │   │   └── AdminPayments.jsx
    │   │   │   │   ├── data/
    │   │   │   │   │   └── payments.js
    │   │   │   │   └── hooks/
    │   │   │   │       ├── useFilterPayments.js
    │   │   │   │       └── usePaymentStats.js
    │   │   │   ├── SubscriptionPlans/
    │   │   │   │   ├── components/
    │   │   │   │   │   └── AdminSubscriptionPlans.jsx
    │   │   │   │   ├── data/
    │   │   │   │   │   └── plans.js
    │   │   │   │   └── hooks/
    │   │   │   │       ├── useFilterPlans.js
    │   │   │   │       └── usePlanStats.js
    │   │   │   ├── User/
    │   │   │   │   ├── components/
    │   │   │   │   │   └── AdminUser.jsx
    │   │   │   │   ├── data/
    │   │   │   │   │   └── users.js
    │   │   │   │   ├── hooks/
    │   │   │   │   │   ├── useFilterTable.js
    │   │   │   │   │   └── useUserStats.js
    │   │   │   │   └── services/
    │   │   │   ├── hooks/
    │   │   │   │   └── useSelectRow.js
    │   │   │   ├── shared/
    │   │   │   │   ├── AdminBulkActionSection.jsx
    │   │   │   │   ├── AdminBulkActionSection.module.css
    │   │   │   │   ├── AdminFilterSection.jsx
    │   │   │   │   ├── AdminFilterSection.module.css
    │   │   │   │   ├── AdminOutletPage.jsx
    │   │   │   │   ├── AdminOutletPage.module.css
    │   │   │   │   ├── AdminPageHeader.jsx
    │   │   │   │   ├── AdminPageHeader.module.css
    │   │   │   │   ├── AdminPageTable.jsx
    │   │   │   │   ├── AdminPageTable.module.css
    │   │   │   │   ├── AdminStatsCardsSection.jsx
    │   │   │   │   └── AdminStatsCardsSection.module.css
    │   │   │   └──
    │   │   ├── user/
    │   │   │   ├── RegisteredUserLayout/
    │   │   │   │   ├── RegisteredUserLayout.jsx
    │   │   │   │   └── RegisteredUserLayout.module.css
    │   │   │   ├── components/
    │   │   │   │   ├── index.js
    │   │   │   │   ├── Dashboard/
    │   │   │   │   │   ├── Dashboard.jsx
    │   │   │   │   │   └── Dashboard.module.css
    │   │   │   │   ├── EnterScore/
    │   │   │   │   │   ├── EnterScore.jsx
    │   │   │   │   │   └── EnterScore.module.css
    │   │   │   │   ├── MyScores/
    │   │   │   │   │   ├── MyScores.jsx
    │   │   │   │   │   └── MyScores.module.css
    │   │   │   │   └── Profile/
    │   │   │   │       ├── Profile.jsx
    │   │   │   │       └── Profile.module.css
    │   │   │   └── shared/
    │   │   │       ├── PrimaryButton.jsx
    │   │   │       ├── PrimaryButton.module.css
    │   │   │       ├── SecondaryButtton.jsx
    │   │   │       ├── SecondaryButton.module.css
    │   │   │       ├── UserHeaderSection.jsx
    │   │   │       └── UserHeaderSection.module.css
    │   │   ├── public/
    │   │   │   ├── Home.jsx
    │   │   │   ├── components/
    │   │   │   │   ├── CharityList.jsx
    │   │   │   │   ├── CharityList.module.css
    │   │   │   │   ├── Header.jsx
    │   │   │   │   ├── Header.module.css
    │   │   │   │   ├── Plans.jsx
    │   │   │   │   ├── Plans.module.css
    │   │   │   │   └── Registration.jsx
    │   │   │   │   └── Registration.module.css
    │   │   │   ├── hooks/
    │   │   │   │   └── useFormHandler.js
    │   │   │   ├── shared/
    │   │   │   │   ├── FormInput.jsx
    │   │   │   │   ├── FormInput.module.css
    │   │   │   │   ├── Loader.jsx
    │   │   │   │   └── Loader.module.css
    │   │   │   └── services/
    │   │   │       └── users.js
    │   │   ├── layout/
    │   │   │   ├── Layout.jsx
    │   │   │   └── Layout.module.css
    │   │   └── context/
    │   │       └── userContext.js
    │   └── (rest of configuration and main files)
```

## Directory Descriptions

### Backend (`/backend/`)

- **config/** - Database configuration
- **controllers/** - Request handlers and business logic
- **middleware/** - Express middleware (error handling, async handlers)
- **models/** - Database models (User model)
- **routes/** - API route definitions
- **utils/** - Utility functions (error handlers, validators)
- **server.js** - Main server entry point

### Frontend (`/frontend/`)

- **src/** - Source code directory
  - **pages/** - Page components organized by role (admin, user, public)
  - **features/** - Feature modules with components, hooks, data, and services
    - **admin/** - Admin dashboard features (Dashboard, Users, Charities, Payments, Subscription Plans)
    - **user/** - User-specific features (Dashboard, Profile, Scores, Enter Score)
    - **public/** - Public pages (Home, Registration, Plans, Charity List)
    - **layout/** - Shared layout components
    - **context/** - React context for state management
  - **services/** - API services (axios configuration)
  - **routes/** - Route definitions
  - **config/** - Configuration files
  - **assets/** - Static assets (images, SVGs)

- **dist/** - Build output directory
- **public/** - Public static files
- **index.html** - Main HTML entry point
- **vite.config.js** - Vite build configuration
- **eslint.config.js** - ESLint configuration

## Key Features

### Admin Dashboard

- User management
- Charity management
- Payment tracking
- Subscription plan management
- Dashboard analytics with statistics cards and bulk actions

### User Portal

- User dashboard
- Profile management
- Golf score tracking & history
- Subscription management

### Public Pages

- Home page
- User registration
- Subscription plans display
- Charity list

## Tech Stack

- **Frontend:** React, Vite, CSS Modules, Axios
- **Backend:** Node.js, Express
- **Database:** Database configuration available
