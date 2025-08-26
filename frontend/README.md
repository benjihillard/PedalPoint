# Pedal Point Frontend

React-based web application for the Pedal Point cycling platform.

## Features

- **Modern React 18** with TypeScript
- **Responsive Design** with Tailwind CSS
- **Routing** with React Router
- **Beautiful UI** with Heroicons and custom cycling theme
- **Mobile-First** design approach

## Pages

- **Home** - Welcome page with app overview and features
- **Rides** - Browse and search available cycling rides
- **Profile** - User profile management and settings

## Tech Stack

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Heroicons
- Axios (for future API calls)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Development

The app will run on `http://localhost:3000` in development mode.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── Header.tsx # Main navigation header
├── pages/         # Page components
│   ├── Home.tsx   # Home page
│   ├── Rides.tsx  # Rides listing page
│   └── Profile.tsx # User profile page
├── App.tsx        # Main app component with routing
├── index.tsx      # App entry point
└── index.css      # Global styles with Tailwind
```

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom cycling theme** with cycling-specific colors
- **Responsive design** for all screen sizes
- **Accessibility** focused with proper focus states

## Future Enhancements

- User authentication
- Real-time ride updates
- Interactive maps
- Push notifications
- Progressive Web App features
