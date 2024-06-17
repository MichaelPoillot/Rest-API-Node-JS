import { getAllusers } from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const getAllusersHandler = async (req,res) => {
  try {
    const users = await getAllusers();
    res.status(200).json({ success: true, data: users, message: "Success get all users"});
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// export function getUsers(req, res) {
//   connection.query('SELECT id, username, email FROM users', function(err, results) {
//     if (err) {
//       console.error('Error querying database: ' + err.stack);
//       return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
//     res.status(200).json({ success: true, data: results, message: "Success get all users" });
//   });
// }

//API Register
// export function register (req,res){
//   const { username , email, password, confirmPassword } = req.body ;

//   if(!username || !email || !password || !confirmPassword){
//       return res.status(400).json({message: 'Missing Required Fields'})
//   }
//   if(password !== confirmPassword){
//       return res.status(400).json({message: 'Password do not match'})
//   }

//   //Check if Email already exist
//   connection.query('SELECT * FROM users WHERE email = ?',[email],
//   async function (err,rows, fields) {
//     if (rows.length > 0 ) {
//       return res.status(400).json({message: 'email already exist'})
//     }

//     //hash password
//     const salt = await bcrypt.genSalt();
//     const hashPassword = await bcrypt.hash(password, salt);

//     //insert user into database with hashPassword
//     connection.query('INSERT INTO users (username,email,password,created_at) VALUES (?,?,?,NOW())',[username,email,hashPassword],
//       function(err, result){
//         if (err) {
//           console.error('Error querying database: ' + err.stack);
//           return res.status(500).json({ success: false, message: 'Internal server error' });
//         }
//         const id = result.id
//         res.status(200).json({ success: true, data: { id: id, username, email }, message: "User created" });
//       }
//     )
//   })
// };// end



// export const Login = (req, res) =>{
//   const { email, password } = req.body ;
  
//   connection.query('SELECT * FROM users WHERE email = ?',[email], 
//   async function(err,rows, fields){

//     if (rows.length > 0 ) {

//       const match = await bcrypt.compare(req.body.password, rows[0].password);

//       if (!match) {
//         return res.status(200).json({ message: 'Password not match!' });
//       }
//       return res.status(200).json({ message: 'Login successful!' });
//     }
    
//     res.status(404).json({message: 'Email not found!'});
//   })
// } 


