-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create rides table
CREATE TABLE IF NOT EXISTS rides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on title for better search performance
CREATE INDEX IF NOT EXISTS idx_rides_title ON rides(title);

-- Create index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_rides_created_at ON rides(created_at);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_rides_updated_at
    BEFORE UPDATE ON rides
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO rides (title, description) VALUES
    ('Morning Coffee Ride', 'Easy morning ride to the local coffee shop. Perfect for beginners!'),
    ('Weekend Adventure', 'Challenging ride through the hills with amazing views.'),
    ('Social Evening Ride', 'Casual evening ride around the city. All levels welcome.')
ON CONFLICT DO NOTHING;
