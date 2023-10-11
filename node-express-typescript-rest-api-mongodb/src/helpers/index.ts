import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const API_SECRET = process.env.API_SECRET;

export const authentication = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(API_SECRET).digest('hex');
  }
  
  export const random = () => crypto.randomBytes(128).toString('base64');