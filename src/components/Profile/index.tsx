
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { ProfileInfo } from '../../types';

const Profile: React.FC<ProfileInfo> = ({name, email}) => (
<div>
    <Card title="Profile Page" bordered={false}>
        <p>Name: <span >{name}</span></p>
        <p >Email: <span >{email}</span></p>
        <Link to="/" >Return</Link>
        <div ></div>

    </Card>
</div>

);

export default Profile;