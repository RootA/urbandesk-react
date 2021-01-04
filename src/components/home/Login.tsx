import React from 'react';

interface Props {
    user_name: string;
    password: string;
    callback: any;
}

const Login: React.FC<Props> = ({user_name, password, callback}) => (
    <div>
        <div>{user_name}</div>
        <div>{password}</div>
        <div>{callback}</div>
    </div>
);

export default Login;

