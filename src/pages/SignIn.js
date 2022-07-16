import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert, Nav, Navbar } from 'rsuite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import { Link } from 'react-router-dom';

import { auth, database } from '../misc/firebase';
import photo from '../images/person.jpg';
// import { NavLink } from 'react-router-dom';


const SignIn = () => {
    const signInWithProvider = async provider => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                });
            }

            Alert.success('Signed in', 4000);
        } catch (err) {
            Alert.error(err.message, 4000);
        }
    };

    const onFacebookSignIn = () => {
        signInWithProvider(new firebase.auth.FacebookAuthProvider());
    };

    const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider());
    };

    return (

        <Container>

            <Navbar>
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                        {/* <Nav.Item>About</Nav.Item> */}
                        <Nav.Item><Link to="/contact" className='linka'>Contact Us</Link></Nav.Item>
                    </Nav>

                </Navbar.Body>
            </Navbar>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel className='new'>
                            <div className="text-center">
                                <h2>Welcome to Chat</h2>
                                <p>Login and connect with People around the globe.
                                    <br />
                                    This app will help you to connect and Share</p>
                            </div>

                            <div className="mt-3">
                                <Button block color="blue" onClick={onFacebookSignIn}>
                                    <Icon icon="facebook" /> Continue with Facebook
                                </Button>

                                <Button block color="green" onClick={onGoogleSignIn}>
                                    <Icon icon="google" /> Continue with Google
                                </Button>
                            </div>
                            <div className="rightSection">
                                <img src={photo} className="animated images" alt="MainImage" />
                            </div>
                        </Panel>
                    </Col>
                </Row>

            </Grid>
            <footer>
                <p>Design & Developed by Vishal Sharma </p>

                <div className="footer__icons">
                    <span><LinkedInIcon /></span>
                    <span ><GitHubIcon /></span>
                    <span ><FacebookIcon /></span>
                </div>

            </footer>
        </Container>


    );
};

export default SignIn;