import React from 'react'
import { useState } from 'react'
import {
  Box,
  Link as MUILink,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined'
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Sidebar from '../Components/Sidebar'

function MenuBar () {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const largeScreen = useMediaQuery(theme => theme?.breakpoints?.up('md'))
  // const extraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      {!largeScreen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'background.default'
          }}
          paddingLeft={1}
          paddingY={1}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box sx={{ display: 'none' }} mr={0}>
              lol
            </Box>
            {/* <Logo /> */}
          </Box>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 5 }}
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              top: '0.75rem',
              marginRight: 0
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              sx: {
                minWidth: { xs: '100vw', sm: '300px' },
                boxShadow: 'none',
                borderRadius: '0px'
              }
            }}
          >
            <MenuItem>
              <MUILink underline='none' href='#about' color='inherit'>
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
                About
              </MUILink>
            </MenuItem>
            <MenuItem>
              <MUILink underline='none' href='#skills' color='inherit'>
                <IconButton>
                  <HandymanOutlinedIcon />
                </IconButton>
                Skills
              </MUILink>
            </MenuItem>
            <MenuItem>
              <MUILink underline='none' href='#projects' color='inherit'>
                <IconButton>
                  <WorkOutlineOutlinedIcon />
                </IconButton>
                Projects
              </MUILink>
            </MenuItem>
            <MenuItem>
              <MUILink href='#contact' underline='none' color='inherit'>
                <IconButton>
                  <ContactPhoneOutlinedIcon />
                </IconButton>
                Contact Me
              </MUILink>
            </MenuItem>

            <MenuItem>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://www.linkedin.com/posts/theconnectedawards_oluwadamilola-shabi-the-gifted-web-developer-activity-6924666873913483264-eQ6e?utm_source=share&utm_medium=member_desktop'
                color='inherit'
              >
                <MilitaryTechOutlinedIcon />
              </MUILink>
              Awards
            </MenuItem>
            <MenuItem>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://github.com/abbyshabi'
                color='inherit'
              >
                <IconButton>
                  <GitHubIcon />
                </IconButton>
                Github
              </MUILink>
            </MenuItem>
            <MenuItem>
              <MUILink
                underline='none'
                target='_blank'
                rel='noopener'
                href='https://www.linkedin.com/in/oluwadamilola-shabi/  '
                color='inherit'
              >
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                LinkedIn
              </MUILink>
            </MenuItem>
          </Menu>
        </Box>
      )}
      {largeScreen && <Sidebar />}
    </>
  )
}

export default MenuBar
