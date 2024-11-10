// middleware/roleAuth.js
const roleAuth = (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ msg: 'No user found, authorization denied' });
      }
  
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ 
          msg: 'Access denied. You do not have the required role.' 
        });
      }
  
      next();
    };
  };
  
  module.exports = roleAuth;