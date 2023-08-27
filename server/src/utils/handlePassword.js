import bcrypt from "bcrypt";
import "dotenv";
export async function hashPassword(password) {
  return await bcrypt.hash(password, process.env.HASH_SALTROUNDS);
}
export async function checkPassword(password, userPassword) {
  return await bcrypt.compare(password, userPassword);
}
