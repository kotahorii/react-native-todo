import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { selectUser } from '../slices/userSlice';
import { resetEditedTask, selectTag } from '../slices/todoSlice';
import { db } from '../firebaseConfig';

export const useToggleDeleteTask = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tag = useSelector(selectTag);
  const [toggleErr, setToggleErr] = useState('');
  const [deleteErr, setDeleteErr] = useState('');

  const toggleCompleted = useCallback(
    async (idx: string, bool: boolean) => {
      setToggleErr('');
      try {
        await setDoc(
          doc(db, 'users', user.uid, 'tags', tag.id, 'tasks', idx),
          {
            completed: !bool,
          },
          { merge: true },
        );
        dispatch(resetEditedTask());
      } catch (err: any) {
        dispatch(resetEditedTask());
        setToggleErr(err.message);
      }
    },
    [user],
  );
  const deleteTask = useCallback(
    async (idx: string) => {
      setDeleteErr('');
      try {
        await deleteDoc(
          doc(db, 'users', user.uid, 'tags', tag.id, 'tasks', idx),
        );
        dispatch(resetEditedTask());
      } catch (err: any) {
        dispatch(resetEditedTask());
        setDeleteErr(err.message);
      }
    },
    [user],
  );
  return { tag, toggleErr, deleteErr, deleteTask, toggleCompleted };
};
