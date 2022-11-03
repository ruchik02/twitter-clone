import React from 'react'
import Edit from '../components/EditProfile'
import { useRouter } from 'next/router';
const EditProfile = () => {
    const { query } = useRouter();
  return (
    <div>
        <Edit name={query.name} username={query.username}   />
    </div>
  )
}

export default EditProfile