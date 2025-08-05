import React from 'react'
import { useAuth } from './AuthContext'
const UserProfile = () => {
    const {user} = useAuth();
  return (
    <div>{user.full_name}</div>
  )
}

export default UserProfile;