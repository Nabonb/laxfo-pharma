import React from 'react';
import avatarImg from '../../../assets/images/placeholder.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='rounded-full w-8' src={user && user.photoURL ? user.photoURL : avatarImg} alt="" />
        </div>
    );
};

export default Avatar;