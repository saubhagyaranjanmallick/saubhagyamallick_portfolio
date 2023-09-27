import React from 'react';
import { CardContent, Grid, Typography, Card, Avatar, Stack, Tooltip } from "@mui/material";
import Header from '../../Components/Header/Header';
import { Helmet } from 'react-helmet';
import { Fade } from "react-reveal";
import Footer from '../../Components/Footer/Footer';
import Certification from "../Educations/Certification";
import { degrees } from "../../Protfolio";


export const Education = () => {
    return (
        <div>

            <Helmet>
                <title>Saubhagya Mallick | Educations</title>
                <meta
                    name="description"
                    content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
                />
            </Helmet>
            <Header />

            {/* <div style={{height:"100vh" , overflowX:"hidden"}}>  */}
            <Fade bottom duration={2000} distance="40px">
                <Grid container spacing={2} justifyContent="center" style={{ marginTop: "50px" }} >
                    <Grid item lg={4}>
                        {/* <img style={{ width: "390px", height: "280px", borderRadius: "0px 25px 0px 25px", }} src={certificate1} alt="logo" /> */}
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_slpkbdfp.json"
                            style={{ width: "80%", height: "100%" }}
                            loop
                            autoplay
                            background="transparent"
                            speed="2"
                        ></lottie-player>

                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant='h2' style={{ textAlign: "center", fontWeight: "bold" }}>Education
                        </Typography>

                        <Typography variant='h4' sx={{ textAlign: "center", color: "#EA80FC", fontFamily: "'Gideon Roman',cursive ", marginTop: "20px" }}>  Basic Qualification and
                            Certifcations </  Typography>

                        <br />
                        <Grid container justifyContent="center">
                            <Stack direction="row" spacing={2} style={{ alignContent: "center" }}>

                                <Tooltip title="Hacker Rank" arrow>
                                    <Avatar alt="Travis Howard" src="https://w7.pngwing.com/pngs/118/895/png-transparent-hackerrank-logos-and-brands-line-filled-icon-thumbnail.png" sx={{ width: 56, height: 56 }} />
                                </Tooltip>

                                <Tooltip title="Red Hat" placement="top" arrow >
                                    <Avatar alt="Cindy Baker" src="https://img.icons8.com/ios-filled/256/codechef.png" sx={{ width: 56, height: 56, backgroundColor: "#E91E63" }} />
                                </Tooltip>
                                <Tooltip title="NPTEL" arrow >
                                    <Avatar alt="Cindy Baker" src="https://library.uoc.ac.in/images/images/nptel-cert.png" sx={{ width: 56, height: 56 }} />
                                </Tooltip>
                                <Tooltip title="Udemy" placement="top" arrow >
                                    <Avatar alt="Cindy Baker" src="https://seeklogo.com/images/U/udemy-logo-14FF4B0162-seeklogo.com.png?v=637830213850000000" sx={{ width: 56, height: 56, }} />
                                </Tooltip>
                                <Tooltip title=" Code Chef" arrow>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGXVAZ6TC6kSRSyv-gjFmdNhOfyx8nkW1lYSAHsY&s" sx={{ width: 56, height: 56 }} />
                                </Tooltip>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>

            <Fade top duration={2000} distance="40px">
                <Typography style={{
                    textAlign: "center", fontFamily: "sans-serif", color: "#BDBDBD", marginTop: "10px", fontSize:
                        "48px"
                }} >Degrees Received </Typography>


                <Grid container justifyContent="center">
                    <Grid item lg={10} >
                        <Card sx={{ borderTop: 3, borderColor: '#AB47BC', marginTop: "50px", backgroundColor: "whitesmoke" }}>
                            <CardContent>
                                <Grid container justifyContent="center">
                                    <Grid item lg={10}>
                                        <Typography style={{ fontWeight: "bold", fontSize: "20px", color: "#7B1FA2" }}>
                                           01. Master in Computer Applications(MCA)
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2}> <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "right", color: "#7B1FA2" }}>2020-22</Typography></Grid>
                                </Grid>
                                <hr />
                                <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have completed  master of computer from <b>College Of IT and Management Education (CIME)</b>, Bhubaneswar. </Typography>
                                </Grid>
                                <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc </Typography>
                                    <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have also done an academic project on online assesment examination portal as major project. </Typography>
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }} >👉 I have done my Final year project on React and Node js.</Typography>
                                    </Grid>
                                    <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have also certified from IIT Kharagpur in NPTEL courses (Graphics Design , Cloud Computing , Internet Of Things).</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item lg={10} >
                        <Card sx={{ borderTop: 3, borderColor: '#AB47BC', marginTop: "40px", backgroundColor: "whitesmoke" }}>
                            <CardContent>
                                <Grid container justifyContent="center">
                                    <Grid item lg={10}>
                                        <Typography style={{ fontWeight: "bold", fontSize: "20px", color: "#7B1FA2" }} >
                                            02.  Bachelor in Science  (Physics Hons)
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2}> <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "right", color: "#7B1FA2" }}>2016-19</Typography>

                                    </Grid>
                                </Grid>
                                <hr />
                                <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have completed  bachelor of Science in Physics hons from <b>F.M University</b>, Balasore. </Typography>
                                    <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have passed  Physics hons with distinction from F.M University with 9.23 CGPA. </Typography>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item lg={10} >
                        <Card sx={{ borderTop: 3, borderColor: '#AB47BC', marginTop: "40px", backgroundColor: "whitesmoke" }}>
                            <CardContent>
                                <Grid container justifyContent="center">
                                    <Grid item lg={10}>
                                        <Typography style={{ fontWeight: "bold", fontSize: "20px", color: "#7B1FA2" }} >
                                            03. National Programme on Technology Enhanced Learning  (NPTEL)
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2}> <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "right", color: "#7B1FA2" }}>2016-19</Typography>

                                    </Grid>
                                </Grid>
                                <hr />
                                <Grid item lg={10}> <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have completed  three techical academic  courses from <b>Indian Institute Of Technology , Kharagpur </b>. </Typography>
                                    <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have passed  in <b>Cloud Computing</b> with Elite Grade from IIT ,Kharagpur with 65% mark. </Typography>
                                    <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have completed  in <b>Computer Graphics</b> with Elite Grade from IIT ,Kharagpur with 60% mark. </Typography>
                                    <Typography style={{ fontSize: "16px", color: "#424242", fontFamily: "cursive" }}> 👉 I have passed  in <b>Internet Of Things</b> with Elite Grade from IIT ,Kharagpur with 70% mark. </Typography>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Fade>

            <Fade bottom duration={2000} distance="40px">

                <Certification />
            </Fade>

            <Footer />

        </div>

    )
}
