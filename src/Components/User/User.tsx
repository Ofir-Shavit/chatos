import React from 'react';

import { UserType } from '../../types';
import './User.less';

export default function User ({ user }: { user: UserType }) {
    const {
        name,
        picture
    } = user;

    return (
        <div className="user">
            <h1>{name}</h1>
            <img alt="User" src={picture}/>
        </div>
    );
}
