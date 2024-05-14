import { getFirestore } from 'firebase/firestore'
import app from '../lib/firebaseConfig'

const db = getFirestore(app)
export default db
