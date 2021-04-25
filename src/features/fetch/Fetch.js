import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";

const Fetch = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    // useEffectにてdispatchを指定した場合は、第二引数にdispatchを指定
    dispatch(fetchAsyncGet());
  }, [dispatch]);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};

export default Fetch;
