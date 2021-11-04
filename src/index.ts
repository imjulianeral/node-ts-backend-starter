import dotenv from 'dotenv-safe'
import { add } from '@/functions/add'

dotenv.config()

console.log(add(2, 3))
console.log(process.env.KEY)
