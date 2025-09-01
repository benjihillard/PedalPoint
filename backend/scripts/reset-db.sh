#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚴‍♂️ Pedal Point Database Reset Script${NC}"
echo "=================================="

# Check if we're in the backend directory
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ Error: Please run this script from the backend directory${NC}"
    echo "Usage: cd backend && ./scripts/reset-db.sh"
    exit 1
fi

echo -e "${YELLOW}⚠️  WARNING: This will delete ALL data in the database!${NC}"
echo -e "${YELLOW}   Only use this during development!${NC}"
echo ""

# Ask for confirmation
read -p "Are you sure you want to reset the database? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}❌ Database reset cancelled${NC}"
    exit 0
fi

echo -e "${BLUE}🔄 Stopping database containers...${NC}"
docker-compose down

echo -e "${BLUE}🗑️  Removing database volume...${NC}"
docker volume rm backend_postgres_data 2>/dev/null || echo "Volume already removed"

echo -e "${BLUE}🚀 Starting fresh database...${NC}"
docker-compose up -d

echo -e "${BLUE}⏳ Waiting for database to be ready...${NC}"
sleep 5

# Check if database is healthy
echo -e "${BLUE}🔍 Checking database health...${NC}"
if docker-compose ps | grep -q "healthy"; then
    echo -e "${GREEN}✅ Database is healthy and ready!${NC}"
else
    echo -e "${YELLOW}⏳ Database is still starting up...${NC}"
    echo "Waiting a bit more..."
    sleep 5

    if docker-compose ps | grep -q "healthy"; then
        echo -e "${GREEN}✅ Database is now healthy!${NC}"
    else
        echo -e "${RED}❌ Database failed to start properly${NC}"
        echo "Check the logs with: docker-compose logs postgres"
        exit 1
    fi
fi

echo ""
echo -e "${GREEN}🎉 Database reset complete!${NC}"
echo ""
echo -e "${BLUE}📊 Current database status:${NC}"
docker-compose ps

echo ""
echo -e "${BLUE}🔗 You can now start your backend server:${NC}"
echo "   npm run dev"
echo ""
echo -e "${BLUE}🌐 Test GraphQL endpoint:${NC}"
echo "   curl -X POST http://localhost:3001/graphql \\"
echo "     -H \"Content-Type: application/json\" \\"
echo "     -d '{\"query\":\"{ hello }\"}'"
echo ""
echo -e "${BLUE}📝 View database logs:${NC}"
echo "   docker-compose logs postgres"
