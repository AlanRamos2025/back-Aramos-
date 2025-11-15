import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const header = req.headers.authorization;
  if (!header)
    return res.status(401).json({ msg: "Token no proporcionado" });

  const token = header.split(" ")[1];
  if (!token)
    return res.status(401).json({ msg: "Token no válido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // devuelve { id, email, isAdmin }
  } catch (err) {
    return res.status(401).json({ msg: "Token inválido" });
  }
};
