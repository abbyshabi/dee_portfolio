import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material'
import topHire from '../assets/top-hire.png'
import hood from '../assets/hood.png'
import github from '../assets/github.png'

export default function Skills () {
  const style = {
    display: 'inline-flex',
    width: '80%',
    marginTop: 10,
    marginLeft: { sm: 2 },
    item: {
      //   padding: 3
    }
  }

  const icons = [
    {
      image: topHire,
      name: 'Top Hire',
      about:
        'Ever had a leaking pipe and wondered how you can get the best hands in the fastest time? That is what top-Hire does! An app built with Javascript, HTML and CSS. ',
      repo: 'https://github.com/abbyshabi/Top-Hire'
    },
    {
      image: hood,
      name: 'Neighbourhood Watch',
      about:
        'Neigbourhood app is a django app. It helps connects the resisdents of a neighbourhood, it allows users make a comment, pass information and review shops in the neighbourhood',
      repo: 'https://github.com/abbyshabi/Hoodz'
    },
    {
      image: github,
      name: 'Github Search',
      about:
        'A github clone build using angular JS and bootstrap. You can search for users and repositories on the app',
      repo: 'https://github.com/abbyshabi/Git-hub'
    }
  ]

  return (
    <Box
      id='projects'
      style={{
        // height: '100vh',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Grid
        container
        sx={{ ...style, margin: { lg: '5px 20px' }, marginLeft: {sm: 2}}}
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item lg={12} mb={2} sx={{ marginBottom: { lg: '20px' }, marginTop: {lg: 10} }}>
          <Typography
            variant='span'
            component='h5'
            fontWeight={400}
            fontSize={'1.5rem'}
          >
            {' '}
            Some cool apps I have built....
          </Typography>
        </Grid>
        {icons?.map(item => (
          <Grid sx={{ ...style.item }} item xs={12} sm={12} md={12} lg={12} ml={3}>
            <Paper
              sx={{
                width: {lg: '50rem', sm: '50rem'},
                height: '30rem',
                padding: 2,
                backgroundColor: '#FFF',
                border: '1px solid #eee',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0px 10px 14px #ffe6e6;'
                },
                pointer: 'cursor',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                // width={{lg:7, sm: 5}}
                // width={'100rem'}
                style={{alignSelf: 'center', width: '20rem'}}
                // style={{ alignSelf: 'center', width: {lg: 70, sm: 5} }}
              />
              <Typography fontSize={'1.7rem'} mt={'0.7rem'}>
                {item.name}
              </Typography>
              <Typography>{item.about}</Typography>
              <Typography fontSize={'1.2rem'} mt={'0.7rem'}>
                <a href={item.repo} target='_blank' rel='noreferrer'>
                  Repo
                </a>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
