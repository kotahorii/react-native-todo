import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';
import { selectUser } from '../slices/userSlice';
import { Tag } from '../types/types';
import { db } from '../firebaseConfig';

export const useGetTags = () => {
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>();
  const [getErr, setGetErr] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, 'users', user.uid, 'tags'),
      orderBy('createdAt', 'desc'),
    );
    setGetErr('');
    setIsLoading(true);
    const unSub = onSnapshot(
      q,
      (snapshot) => {
        setTags(
          snapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                name: doc.data().name,
                createdAt: format(
                  doc.data({ serverTimestamps: 'estimate' }).createdAt.toDate(),
                  'yyyy-MM-dd HH:mm',
                ),
              } as Tag),
          ),
        );
        setIsLoading(false);
      },
      (err: any) => {
        setGetErr(err.message);
      },
    );
    return () => {
      unSub();
    };
  }, []);
  return {
    tags,
    isLoading,
    getErr,
  };
};
