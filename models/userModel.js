import connection from "../config/database.js";

export const getAllusers = async ()=> {
    try {
        const [data] = await connection.query('SELECT id, username, email FROM users');
        return data;
    } catch (error) {
        console.error(`Error in getAllUsers: ${error.message}`);
        throw error;
    }
}