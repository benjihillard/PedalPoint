# Pedal Point Frontend

A Vite React app with GraphQL, React Router, and React Hook Form for the Pedal Point cycling platform.

## Features

- **Vite** - Fast build tool and dev server
- **React 18** with TypeScript
- **GraphQL** with Apollo Client for data fetching
- **React Router** for navigation
- **React Hook Form** (TanStack Form) for forms
- **GraphQL Code Generation** for type-safe queries

## Tech Stack

- React 18 + TypeScript
- Vite
- Apollo Client v4
- GraphQL
- React Router DOM
- TanStack React Form

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## GraphQL Setup

### Apollo Client Configuration

The Apollo Client is configured in `src/lib/apollo-client.ts` and wraps your app in `src/App.tsx`.

### GraphQL Queries

Example queries are defined in `src/graphql/queries.ts`:

- `GET_RIDES` - Fetch all available rides
- `GET_RIDE` - Fetch a single ride by ID
- `GET_USER_PROFILE` - Fetch user profile data

### Using GraphQL in Components

```tsx
import { useQuery } from '@apollo/client/react';
import { GET_RIDES } from '../graphql/queries';

const RidesList = () => {
  const { loading, error, data } = useQuery(GetsData>(GET_RIDES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.rides.map(ride => (
        <div key={ride.id}>{ride.title}</div>
      ))}
    </div>
  );
};
```

## GraphQL Code Generation

Generate TypeScript types from your GraphQL schema:

```bash
# Generate types once
npm run codegen

# Watch for changes and regenerate
npm run codegen:watch
```

Update the GraphQL endpoint in `codegen.ts` to match your backend.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── RidesList.tsx   # Example GraphQL component
├── graphql/            # GraphQL queries and mutations
│   └── queries.ts      # Example queries
├── lib/                # Library configurations
│   └── apollo-client.ts # Apollo Client setup
├── App.tsx             # Main app with Apollo Provider
└── main.tsx            # App entry point
```

## Development

- **Port**: 5173 (Vite default)
- **GraphQL Endpoint**: Configure in `apollo-client.ts` and `codegen.ts`
- **Hot Reload**: Enabled by default with Vite

## Next Steps

1. **Set up your GraphQL backend** and update the endpoint URLs
2. **Run code generation** to get TypeScript types
3. **Create more queries** for your cycling app features
4. **Add mutations** for creating/updating rides and user data
5. **Set up React Router** for navigation between pages
6. **Use React Hook Form** for user input forms
