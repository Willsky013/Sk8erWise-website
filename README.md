🛹 Sk8erWise – The Skater Travel Guide
Sk8erWise is a digital discovery platform built during a two‑week sprint, designed for skaters who want to explore skateparks around the world.
Think travel magazine meets interactive skate atlas — a place where skaters can browse parks, open detailed info, save favourites, and plan skate‑focused trips.

This project was developed as a group assignment using React + Vite, Context API, LocalStorage, and GitHub Pages deployment.

🌍 What Sk8erWise Does
Sk8erWise helps skaters:

Discover skateparks worldwide

Browse parks through a responsive card grid

Filter by country, city, and difficulty

Search by name or location

Open detailed park information in a modal

Save favourite parks using LocalStorage

View ratings, difficulty, and images

The interface is inspired by modern travel apps and built from a custom wireframe.

⭐ Core Features (MVP Completed)

🟩 1. Home Page :

Hero section

Search bar

Quick filter chips

Popular skateparks

Browse preview

Explore all parks button

🟧 2. Parks Page :

Full park grid

Search + filters

Difficulty badge

Rating stars

Heart icon (favourites)

Park detail modal

❤️ 3. Favourites Page :

Saved parks

Remove favourite

Empty state

🟦 4. Park Detail Modal :

Images

Difficulty

Rating

Location

Description

Close button

🟪 5. Data & Logic :

parks.json

reviews.json

countries.json

FavouritesContext

ParksContext

useModal hook

useFilters hook

LocalStorage persistence

📱 6. Responsive UI :

Mobile

Tablet

Desktop

🌐 7. Deployment :

GitHub Pages

BASE_URL image handling


Live demo link

🧱 Project Structure :

```text

SK8ERWISE-WEBSITE/
│
├── public/
│   ├── cursor/
│   ├── Skatepark-images/
│   ├── Team-images/
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
│
├── src/
│   ├── data/          ← JSON files
│   │   ├── parks.json
│   │   ├── reviews.json
│   │   ├── countries.json
│   │   ├── amenities.json
│   │   └── team.json
│   │
│   ├── components/
│   │   ├── about/
│   │   │   ├── AboutCard.jsx
│   │   │   ├── TeamCreators.jsx
│   │   │   └── AboutFeatures.jsx
│   │   ├── components-css/
│   │   │   ├──BrowseSkateparks.css
│   │   │   ├── FavoriteButton.css
│   │   │   ├── Footer.css
│   │   │   ├── HeroSection.css
│   │   │   ├── ImageSlider.css
│   │   │   ├── Navbar.css
│   │   │   ├── ParkCard.css
│   │   │   ├── ParkDetailModal.css
│   │   │   ├── ParkGrid.css
│   │   │   ├── PopularSkateparks.css
│   │   │   └── TeamCreators.css
│   │   │
│   │   ├── FavoriteButton.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeSearchBar.jsx
│   │   ├── ImageSlider.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParkCard.jsx
│   │   ├── ParkDetailModal.jsx
│   │   ├── ParkFilters.jsx
│   │   ├── ParkGrid.jsx
│   │   └── ParkSearch.jsx 
│   │   
│   │
│   ├── hooks/
│   │   ├── useFavorites.js
│   │   └── useParks.js
│   │
│   │
│   ├── pages/
│   │   ├── pages-css/
│   │   │   ├── About.css
│   │   │   ├── Favorites.css
│   │   │   └── Home.css
│   │   │
│   │   ├── Home.jsx
│   │   ├── Parks.jsx
│   │   ├── Favourites.jsx
│   │   ├── About.jsx
│   │   └── SkateparkDetails.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── .gitignore
└── index.html

📌 Project Management :

We used Trello to manage the entire sprint:

Backlog

Sprint Planning

In Progress

Review / QA

Done

Each task was broken down into:

Pages

Components

JSON data

Logic

UI polish

Deployment

Trello Board is public anyone can see it how we adapted a bit to learn from this process.
https://trello.com/b/KvdZ117R/%F0%9F%9F%A1team-skater-park-application

🧑‍🤝‍🧑 Team Roles (Sprint)

Product Owner – Dar

UX/UI Lead – Haidar

Tech Lead – William

Frontend Developers – Entire team

QA Lead – Joar

Delivery Lead – Heber

We followed a real sprint workflow:

Daily standups

Sprint planning

Sprint review

Sprint retrospective

Git branching workflow

Trello task tracking

🚀 Sprint Status :

✔ MVP completed
✔ All core features implemented
✔ Modal flow working
✔ Favourites logic working
✔ Filters + search working
✔ GitHub Pages deployment successful
✔ 98% completion

## 🔮 Sprint 2 – Future Improvements

Although Sprint 1 delivered a complete MVP (98% finished), several features and enhancements are planned for Sprint 2 to improve the user experience and expand functionality.

### 🟦 1. User Accounts & Authentication
- Login / Register
- Save favourites to cloud instead of LocalStorage
- User profiles

### 🟩 2. Advanced Reviews System
- Users can submit reviews
- Upvote helpful reviews
- Add photos to reviews
- Average rating calculation

### 🟧 3. Interactive Map View
- Display skateparks on a world map
- Click markers to open park details
- Filter parks directly on the map

### 🟥 4. Improved Park Detail Page
- Full page instead of modal
- More images (carousel)
- Video support
- Amenities icons

### 🟪 5. Search & Filter Enhancements
- Multi‑filter combinations
- “Nearby parks” using geolocation
- Sort by rating, difficulty, popularity

### 🟫 6. Performance & UX Improvements
- Lazy loading images
- Skeleton loaders
- Better mobile layout
- Accessibility improvements (WCAG)

### 🟨 7. Admin Tools (Optional)
- Add new parks
- Edit park details
- Manage reviews

### 🟦 8. API Integration
- Replace JSON files with a real backend
- Fetch parks dynamically
- Store favourites and reviews in database

---

## 🎯 Summary
Sprint 1 delivered a fully functional MVP.  
Sprint 2 focuses on **scaling**, **polish**, **interactivity**, and **real‑world features**.

📄 License
MIT License