import React, { useState, useEffect } from 'react';
import { Layout, Image, Typography, Button, Avatar } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../resources/images/InstaBestiesLogo.png';
import decode from 'jwt-decode';
import styles from './styles.js'

const { Header } = Layout;
const { Title } = Typography;

const AppBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Header style={styles.header}>
            <Link to="/">
                <div style={styles.homeLink}>
                    <Image
                        preview={false}
                        width={45}
                        src={Logo}
                    />
                    <Title style={styles.title}>InstBesties</Title>
                </div>
            </Link>
            <Link to="/authform">
                <Button style={styles.login} htmlType="button">
                    Log In
                </Button>
            </Link>
            {/*if there is a valid token then LogOut Button */}
        </Header>
    )
}

export default AppBar;

