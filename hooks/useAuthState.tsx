import  React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { login, logout, selectUser } from '../slices/userSlice';
export const useAuthState = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email!,
          }),
        );
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    });
    return () => {};
  }, []);
  return { user, isLoading };
};
