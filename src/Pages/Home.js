import { React } from 'react'
import { Helmet } from 'react-helmet';
import Image from '../assets/img2.jpeg'
import { Grid, Typography, Box } from '@mui/material'

export default function Home () {
  return (
    <>
     <Helmet>
        <title> Damilola Shabi | Software Developer</title>
      </Helmet>
    <Box
      id='about'
      style={{
        padding: { lg: 5, sm: 5 },
      }}
    >
      <Grid container sx={{ margin: { lg: '80px 20px' } }}>
        <Grid item lg={12}>
        </Grid>
        <Grid container mt={4} columnSpacing={2}>
          <Grid xs={12} mb={2} lg={4} item sx={{ marginLeft: 0 }} mt={7}>
            <img
              src={Image}
              alt='Dammy'
              height={300}
              style={{ borderRadius: '100%', height: { lg: 400, sm: 100 } }}
            />
          </Grid>
          <Grid xs={12} mb={2} lg={6} item ml={{ sm: 1, xs: 1 }}>
            <Typography
              variant='h4'
              component='h1'
              mt={8}
              fontSize={'1.5rem'}
              lineHeight={1.2}
              fontWeight={200}
            >
              Hello, my name is{' '}
            </Typography>
            <Typography
              variant='h4'
              fontWeight='bold'
              component='span'
              color='#ff6666'
              //   fontSize={60}
              fontSize={'4.5rem'}
            >
              Damilola Shabi
            </Typography>{' '}
            <Typography
              variant='h4'
              component='h1'
              mb={1}
              ontSize={'5.8rem'}
              fontWeight={300}
            >
              I build cool stuff for the web.
            </Typography>
            <Typography
              variant='p'
              component='p'
              mb={4}
              mt={2}
              fontSize={'1.3rem'}
              lineHeight={1.2}
              fontWeight={300}
            >
              I'm a software developer based in Lagos,
              <br /> My overall goal is creating awesome digital experiences for
              users.
              <br />
              (It's always either tweaking the BE or the FE and somedays Both!)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}
