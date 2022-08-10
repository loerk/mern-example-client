import React, { useState, useEffect } from 'react';
import { Layout, Image, Typography, Button, Avatar } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../resources/img/InstaBesties.png";
import decode from 'jwt-decode';
import styles from './styles.js'

const { Header } = Layout;
const { Title } = Typography;

const AppBar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            // check if the token is expired 
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        // optional : to avoid side effect
        setUser(JSON.parse(localStorage.getItem('profile')));
        
    }, [location]);

    const logout = () => {
        localStorage.clear();
        setUser(null);
        navigate('/authform');
    }

    return (
        <Header style={styles.header}>
            <Link to="/">
                <div style={styles.homeLink}>
                    <Image
                        preview={false}
                        width={45}
                        src={Logo}
                    />
                    &nbsp;
                    <Title style={styles.title}>InstaBesties</Title>
                </div>
            </Link>
           
            {
                !user ? (<Link to="/authform">
                    <Button style={styles.login} htmlType="button">
                        Log In
                    </Button>
                </Link>)
                    : (
                        <div style={styles.userInfo}>
                            <Avatar
                                style={styles.avatar}
                                alt="username"
                                size="large">
                                {user.result.username.charAT(0).toUpperCase()}
                            </Avatar>
                            <Title style={styles.title} level={4}>
                                {user.result.username}
                            </Title>
                            <Button htmlType='button' onClick={logout}>
                                Log Out
                            </Button>
                        </div>
                    )}
        </Header>
    );
};

export default AppBar;

