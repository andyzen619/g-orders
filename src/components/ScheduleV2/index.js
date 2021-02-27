import React from 'react';
import {useQuery} from 'react-query';

import View from './ScheduleV2View';
import {firestore} from '../../firebase';

const Schedule = () => {
  const {isLoading, error, data} = useQuery('ordersOfTheDay', async () => {
    try {
      await auth.signInWithEmailAndPassword(
          REACT_APP_EMAIL,
          REACT_APP_PASSWORD,
      );
      const snap = await firestore.collection('orders').get();
      const orders = snap.docs.map((doc) => doc.data());
      return orders;
    } catch (error) {
      console.error(error);
    }
  });
  console.log(data);
  return <View state={(isLoading, error, data)} />;
};

export default Schedule;
