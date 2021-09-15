import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import config from '../../../config/config';
import { fetchUser } from '../../APIs/Profile';
import User from '../User/User';
import Input from '../Input/Input';
import { UserType } from '../../types';
import logo from '../../Assets/Cheetos_logo.svg';
import './Login.less';

export default function Login () {
    const [user, setUser] = useState<UserType | null>();

    const handleLogin = async (googleData: any) => {
        try {
            const userData = await fetchUser(googleData.tokenId);
            setUser(userData);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        !user
            ? <>
                <div><img alt="logo" src={logo}/></div>
                <GoogleLogin
                    cookiePolicy="single_host_origin"
                    buttonText="Log in with Google"
                    className="google-button"
                    clientId={config.googleClientId}
                    onSuccess={handleLogin}
                    onFailure={() => console.log('Auth failed!')}
                />
            </>
            : <>
                <User user={user}/>
                <Input/>
            </>
    );
}
