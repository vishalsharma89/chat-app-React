import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Container, Content, Icon, Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Mailer = () => {
    // function sendEmail(e) {
    //     e.preventDefault();
    //     emailjs.sendForm('service_w2iudlm', 'template_qgp6xgn', e.target, 'LytmGMWL6cff8ypkm').then(res => {
    //         console.log(res);
    //         e.target.reset();
    //     }).catch(err => { console.log(err); })
    const [status, setStatus] = useState("Submit");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // setStatus("Sending...");

    function sendEmail(e) {
        setStatus("Sending...");
        e.preventDefault();

        emailjs.sendForm('service_w2iudlm', 'template_qgp6xgn', e.target, 'LytmGMWL6cff8ypkm')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        alert("Thanks for getting in touch, our team will reach out to you");
        setStatus("Sent!");
        setName("");
        setEmail("");
        setMessage("");
        setStatus("Submit");


    }
    return (

        <Container>

            <Navbar>
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} ><Link to="/signin" className='linka'>Home</Link></Nav.Item>
                        {/* <Nav.Item>About</Nav.Item> */}
                        <Nav.Item><Link to="/contact" className='linka'>Contact Us</Link></Nav.Item>
                    </Nav>

                </Navbar.Body>
            </Navbar>
            <Content>
                {/* <FlexboxGrid justify="center" className='mgt'>
                    <FlexboxGrid.Item colspan={12}> */}
                <section className="contact-us" id="contact">

                    <div className="container text-center mb-4">
                        <h1>Contact-Us</h1>
                        <p className="text-capitalize pt-1">
                            We are always happy to answer to queries who might have!looking
                            forword to hearing from you!
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-10 offset-sm-2 offset-1">
                                <form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Your Name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="Your Email"
                                            name="user_email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            required
                                            rows="3"
                                            placeholder="Optional short message"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center contact-button">
                                        <button type="submit" className="btn btn-primary my-2">
                                            {status}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* </Panel> */}
                {/* </FlexboxGrid.Item>
                </FlexboxGrid> */}
            </Content>

            {/* <div
                className="container"
                style={{
                    marginTop: "0px",
                    width: "2000px",
                    // backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                }}>

                <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
                <form
                    className="row"
                    style={{ margin: "25px 85px 75px 100px" }}
                    onSubmit={sendEmail}
                >
                    eslint-disable-next-line 
                    <label>name</label>
                    <input type="text" name="name" className="form-control" />

                    eslint-disable-next-line 
                    <label>Email</label>
                    <input type="email" name="user_email" className="form-control" />

                    eslint-disable-next-line 
                    <label>Message</label>
                    <textarea name="message" rows="4" className="form-control" />
                    <input
                        type="submit"
                        value="Send"
                        className="form-control btn btn-primary"
                        style={{ marginTop: "30px" }}
                    />
                </form>
            </div > */}
            <footer>
                <p>Design & Developed by Vishal Sharma </p>

                <div className="footer__icons">
                    <span><LinkedInIcon /></span>
                    <span ><GitHubIcon /></span>
                    <span ><FacebookIcon /></span>
                </div>

            </footer>
        </Container>
    )
}

export default Mailer