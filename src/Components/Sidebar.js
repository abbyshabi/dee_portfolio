import React from 'react'
import {
  Box,
  Link as MUILink,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText
} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined'
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Index () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'fixed',
        minHeight: '100vh',
        top: 0,
        left: 0,
        minWidth: { md: '10vw', lg: '6vw', xl: '5vw' },
        // width: '50px',
        background: '#ffe6e6',
        border: '1px solid  #FAFAFA'
      }}
    >
      <List sx={{ marginTop: 15 }}>
        <ListItem>
          <ListItemButton>
          <MUILink 
                href="#about"
               underline='none'
               color='inherit'>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText />
            </MUILink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
          <MUILink 
                href="#skills"
               underline='none'
               color='inherit'>
            <ListItemIcon>
              <HandymanOutlinedIcon />
            </ListItemIcon>
            <ListItemText />
            </MUILink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
          <MUILink 
                href="#projects"
               underline='none'
               color='inherit'>
            <ListItemIcon>
              <WorkOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText />
            </MUILink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
          <MUILink 
                href="#contact"
               underline='none'
               color='inherit'>
            <ListItemIcon>
              <ContactPhoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText />
            </MUILink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://www.linkedin.com/posts/theconnectedawards_oluwadamilola-shabi-the-gifted-web-developer-activity-6924666873913483264-eQ6e?utm_source=share&utm_medium=member_desktop'
                color='inherit'
              >
                <MilitaryTechOutlinedIcon />
              </MUILink>
              </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://github.com/abbyshabi'
                color='inherit'
              >
                <GitHubIcon />
              </MUILink>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://www.linkedin.com/in/oluwadamilola-shabi/  '
                color='inherit'
              >
                <LinkedInIcon />
              </MUILink>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
