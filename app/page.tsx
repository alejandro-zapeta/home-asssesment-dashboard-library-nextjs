'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from '@/slices/usersSlice';
import Dashboard from '@/components/Dashboard';

export default function Page() {
  const params = useSearchParams();
  const userParam = params.get('user');
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (userParam) dispatch(setCurrentUser(userParam));
  }, [userParam, dispatch]);

  if (!user) {
    return (
      <div className="container p-6">
        <h1 className="title">No user</h1>
        <p>Add ?user=john to the URL.</p>
      </div>
    );
  }

  return <Dashboard />;
}
