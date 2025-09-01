# Database Setup Guide

## 🐳 PostgreSQL with Docker

### Quick Start

1. **Start the database:**
   ```bash
   docker-compose up -d
   ```

2. **Check if it's running:**
   ```bash
   docker-compose ps
   ```

3. **View logs:**
   ```bash
   docker-compose logs postgres
   ```

4. **Stop the database:**
   ```bash
   docker-compose down
   ```

### Database Details

- **Host:** localhost
- **Port:** 5432
- **Database:** pedalpoint
- **Username:** pedalpoint
- **Password:** pedalpoint123

### Connection String
```
postgresql://pedalpoint:pedalpoint123@localhost:5432/pedalpoint
```

### What's Included

✅ **Complete rides table** with all your specified fields
✅ **Sample data** (2 example rides)
✅ **Indexes** for performance
✅ **Automatic timestamps** (created_at, updated_at)
✅ **Data validation** (difficulty constraints)
✅ **UUID primary keys** for better security

### Next Steps

1. Install database driver: `npm install pg`
2. Update server.js to connect to database
3. Replace mock data with real database queries

### Troubleshooting

- **Port already in use:** Change port in docker-compose.yml
- **Permission denied:** Make sure Docker is running
- **Connection refused:** Wait for database to fully start (check health status) 