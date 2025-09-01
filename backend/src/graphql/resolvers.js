// Helper function to transform database row to GraphQL format
const transformRideRow = (row) => ({
  id: row.id,
  title: row.title,
  description: row.description,
});

const resolvers = (pool) => ({
  Query: {
    hello: () => "Hello from Pedal Point GraphQL API!",

    rides: async () => {
      try {
        const result = await pool.query(`
          SELECT id, title, description
          FROM rides
          ORDER BY created_at DESC
        `);

        return result.rows.map(transformRideRow);
      } catch (error) {
        console.error('Error fetching rides:', error);
        throw new Error('Failed to fetch rides');
      }
    },

    ride: async (parent, { id }) => {
      try {
        const result = await pool.query(`
          SELECT id, title, description
          FROM rides
          WHERE id = $1
        `, [id]);

        if (!result.rows[0]) return null;

        return transformRideRow(result.rows[0]);
      } catch (error) {
        console.error('Error fetching ride:', error);
        throw new Error('Failed to fetch ride');
      }
    }
  },

  Mutation: {
    createRide: async (parent, { input }) => {
      try {
        console.log(input);

        const result = await pool.query(
          `INSERT INTO rides (title, description) VALUES ($1, $2) RETURNING *`,
          [input.title, input.description]
        );

        return transformRideRow(result.rows[0]);
      } catch (error) {
        console.error('Error creating ride:', error);
        throw new Error('Failed to create ride: ' + error.message);
      }
    },

    deleteRide: async (parent, { id }) => {
      try {
        // First check if the ride exists
        const checkResult = await pool.query('SELECT * FROM rides WHERE id = $1', [id]);

        if (checkResult.rows.length === 0) {
          throw new Error('Ride not found');
        }

        const rideToDelete = checkResult.rows[0];

        // Delete the ride
        await pool.query('DELETE FROM rides WHERE id = $1', [id]);

        // Return the deleted ride data
        return transformRideRow(rideToDelete);
      } catch (error) {
        console.error('Error deleting ride:', error);
        throw new Error('Failed to delete ride: ' + error.message);
      }
    }
  }
});

module.exports = { resolvers };
