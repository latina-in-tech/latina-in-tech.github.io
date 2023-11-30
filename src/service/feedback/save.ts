import { IFeedback } from '@/model/feedback';

import { collection, addDoc } from 'firebase/firestore';
import { firestoreDb } from '../firebaseConfig';

export const saveFeedback = async (feedback: IFeedback) => {
  try {
    const docRef = await addDoc(collection(firestoreDb, 'feedbacks'), {
      ...feedback
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};
