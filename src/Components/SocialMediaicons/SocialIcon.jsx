import React from 'react'
import facebook from "../../Assets/facebook.png";
import twiter2 from "../../Assets/twitter2.png";
import linkedin from "../../Assets/linkedin.png";
import instagram2 from "../../Assets/instagram2.png";
import github from "../../Assets/github.png";
import google from "../../Assets/google.png";
import { Avatar, Stack, } from "@mui/material";
import "./Socialicon.css";
import { BrowserView, MobileView } from "react-device-detect";


const SocialIcon = () => {
    return (
        <>
            <BrowserView>
            <Stack direction="row" spacing={3}>
                <a href="https://www.twitter.com"><Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }} src={twiter2} className="btn 
                         four" /></a>
                <a href="https://www.google.com"><Avatar alt="Travis Howard" sx={{ width: 50, height: 50 }} src={google} className="btn 
                         four" /></a>
                <a href="https://www.linkedin.com"><Avatar alt="Cindy Baker" sx={{ width: 50, height: 50 }} src={linkedin} className="btn 
                         four" /></a>
                <a href="https://www.instagram.com"><Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }} src={instagram2} className="btn 
                         four" /></a>
                <a href="https://www.github.com"><Avatar alt="Travis Howard" sx={{ width: 50, height: 50 }} src={github} className="btn 
                         four" /></a>
                <a href="https://www.facebook.com"><Avatar alt="Cindy Baker" sx={{ width: 50, height: 50 }} src={facebook} className="btn 
                         four" /></a>
            </Stack>
            </BrowserView>
            <MobileView>
            <Stack direction="row" spacing={2} sx={{P:1}}>
                <a href="https://www.twitter.com"><Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }} src={twiter2} className="btn 
                         four" /></a>
              
                <a href="https://www.linkedin.com"><Avatar alt="Cindy Baker" sx={{ width: 40, height: 40 }} src={linkedin} className="btn 
                         four" /></a>
                <a href="https://www.instagram.com"><Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }} src={instagram2} className="btn 
                         four" /></a>
                <a href="https://www.github.com"><Avatar alt="Travis Howard" sx={{ width: 40, height: 40 }} src={github} className="btn 
                         four" /></a>
            
            </Stack>
            </MobileView>
            
            </>
    )
}

export default SocialIcon