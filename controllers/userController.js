import connection from "../config/database.js";
import bcrypt from 'bcrypt';

export function getUsers(req, res) {
  connection.query('SELECT id, username, email FROM users', function(err, results) {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    
    res.status(200).json({ success: true, data: results, message: "Success get all users" });
  });
}


export function register (req,res){
  const { username , email, password, confirmPassword } = req.body ;

  if(!username || !email || !password || !confirmPassword){
      return res.status(400).json({message: 'Missing Required Fields'})
  }
  if(password !== confirmPassword){
      return res.status(400).json({message: 'Password do not match'})
  }
  connection.query('SELECT * FROM users WHERE email = ?',[email],
  function (err,rows, fields) {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      return res.status(500).json({ success: false, message: 'Internal server error' }); 
    }
    if (rows.length > 0 ) {
      return res.status(400).json({message: 'email already exist'})
    }
    connection.query('INSERT INTO users (username,email,password,created_at) VALUES (?,?,?,NOW())',[username,email,password],
      function(err, result){
        if (err) {
          console.error('Error querying database: ' + err.stack);
          return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        const id = result.id
        res.status(201).json({ success: true, data: { id: id, username, email }, message: "User created" });
      }
    )
  })
};

