import jwt from "jsonwebtoken"
import config from './config/config';






class UsersMiddleware {

}

export default new UsersMiddleware();



// export class middleware {
    
//     verifyJWT(req, res, next){
//     const token = req.headers['x-access-token'];
//     if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
//     jwt.verify(token, config.secret, function(err, decoded) {
//       if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
//       next();
//     });
// }
// }