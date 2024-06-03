import { IFeedback } from '@/model/feedback';

import { getAuth, signInAnonymously } from 'firebase/auth';
import { collection, addDoc } from '@firebase/firestore';
import { firebaseApp, firestoreDb } from '../firebaseConfig';

export const saveFeedback = async (feedback: IFeedback) => {
  await signInAnonymously(getAuth(firebaseApp)).then(() =>
    addDoc(collection(firestoreDb, 'feedbacks'), {
      ...feedback,
      created_at: new Date().toISOString()
    })
  );
};
