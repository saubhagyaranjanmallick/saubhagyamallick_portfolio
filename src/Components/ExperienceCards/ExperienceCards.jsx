import React from 'react'
import Header from '../../Components/Header/Header';
import { Helmet } from 'react-helmet';
import { Grid, Typography, Avatar, Card } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../Components/Footer/Footer';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Lobster&family=PT+Sans+Narrow:wght@700&family=Redressed&family=Roboto&display=swap');
</style>

const ExperienceCards = () => {
  return (
    <div>
      <Helmet>
        <title>Saubhagya Mallick | Experiences</title>
        <meta
          name="description"
          content="Homepage - My Portfolio , React Portfolio, Personal Portfolio, Linked in..etc"
        />
      </Helmet>
      <Header />

      <div style={{ marginTop: "80px" }}>
        <Grid container justifyContent="center">
          <Grid item lg={4}>
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_wfyrbf2p.json"
              style={{ width: "95%", height: "80%" }}
              loop
              autoplay
              background="transparent"
              speed="2"
            ></lottie-player>

          </Grid>
          <Grid item lg={6}>  <Typography variant='h2' sx={{
            textAlign: "center", fontWeight: "bold",
          }}  > Experience </Typography>

            <Typography variant='h4' sx={{ textAlign: "center", color: "#EA80FC", fontFamily: "'Gideon Roman',cursive ", marginTop: "20px" }}>  Work, Internship and Leadership  </  Typography>
            <br />
            <Typography variant='h5' sx={{ marginTop: "25px", textAlign: "center" }} >   Currently I am working as an Associate Software Developer  and creats responsive sites for both Desktop and Mobile. I have done my internship  Blue Prism under AICTE.I love organising events and that is why I am also involved with many opensource communities as a representative. </Typography></Grid>

        </Grid>
      </div>

      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={10}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ borderTop: 2, borderColor: '#AB47BC', backgroundColor: "whitesmoke" }}
            >
              <Typography style={{ fontFamily: "cursive" }}>Work Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ border: 1, border: "2px dotted #01579b", borderColor: '#01579b', boxShadow: "none", }}>
                <Grid container>
                  <Grid item lg={1}> <Avatar alt="Remy Sharp" style={{ padding: "5px", width: "100px", height: "90px", }} src="https://media.glassdoor.com/sqll/503743/silicon-techlab-squarelogo-1643983959442.png" /> </Grid>
                  <Grid item lg={9}>
                    <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>  Software Engineer</Typography>
                    <Typography> <span style={{ fontWeight: "bold", color: "#2196F3" }}> Silicon Techlab Pvt Ltd. </span>
                      <Typography style={{ fontFamily: "cursive", fontSize: "16px", color: "#616161" }}>
                        I am working as an  Software Engineer in Education Verticals in which we provide proctor based online examination , academic entrance examination, Govt Entrance examination for job and also departmental exams  .
                      </Typography>

                    </Typography>
                  </Grid>

                  <Grid item lg={2}>  <Typography style={{ textAlign: "center", fontWeight: "bold" }}> Jan 2023 - Present</Typography> </Grid>
                </Grid>
              </Card>
              <br />
              <Card sx={{ border: 1, border: "2px dotted #01579b", borderColor: '#01579b', boxShadow: "none", }}>
                <Grid container>
                  <Grid item lg={1}> <Avatar alt="Remy Sharp" style={{ padding: "5px", width: "100px", height: "90px", }} src="https://media.glassdoor.com/sqll/503743/silicon-techlab-squarelogo-1643983959442.png" /> </Grid>
                  <Grid item lg={9}>
                    <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>  Associate Software Engineer</Typography>
                    <Typography> <span style={{ fontWeight: "bold", color: "#2196F3" }}> Silicon Techlab Pvt Ltd. </span>
                      <Typography style={{ fontFamily: "cursive", fontSize: "16px", color: "#616161" }}>
                        I am working as an Associate Software Engineer in Web Devlopment for both Desktop and Mobiles and also do integrated unit testing by React jest  .
                      </Typography>

                    </Typography>
                  </Grid>

                  <Grid item lg={2}>  <Typography style={{ textAlign: "center", fontWeight: "bold" }}> June 2022 - Dec 2022</Typography> </Grid>
                </Grid>


              </Card>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ backgroundColor: "whitesmoke" }}
            >
              <Typography style={{ fontFamily: "cursive" }} > Internships</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ border: 1, border: "2px dotted #01579b", borderColor: '#01579b', boxShadow: "none", }}>
                <Grid container>
                  <Grid item lg={1}> <Avatar alt="Remy Sharp" style={{ padding: "5px", width: "100px", height: "70px", }} src="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo-1280x720.png" /> </Grid>
                  <Grid item lg={9}>
                    <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>  AWS Cloud Intern</Typography>
                    <Typography> <span style={{ fontWeight: "bold", color: "#2196F3" }}> Eduskill Foundation </span>
                      <Typography style={{ fontFamily: "cursive", fontSize: "16px", color: "#616161" }}>
                        I am working as an Associate Software Engineer in Web Devlopment for both Desktop and Mobiles and also do integrated unit testing by React jest  .
                      </Typography>

                    </Typography>
                  </Grid>

                  <Grid item lg={2}>  <Typography style={{ textAlign: "center", fontWeight: "bold" }}> June 2022 - Dec 2022</Typography> </Grid>
                </Grid>


              </Card>

            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Footer />

    </div>
  )
}

export default ExperienceCards
