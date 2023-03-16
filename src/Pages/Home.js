import { React } from 'react'
import Image from '../assets/img2.jpeg'
import { Grid, Typography, Box } from '@mui/material'

export default function Home () {
  return (
    <Box
      id='about'
      style={{
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        padding: { lg: 5, sm: 5 },
        // marginBottom: 0
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
    // <Grid maxWidth='1200px' mt={{ lg: 20 }} container>
    //   <Grid
    //     xs={12}
    //     sm={12}
    //     md={12}
    //     lg={6}
    //     marginTop={2}
    //     item
    //     sx={{ backgroundColor: 'white' }}
    //   >
    //     <Box

    //       px={10}
    //     //   py={10}
    //     //   boxShadow='8px 8px 16px 4px rgba(0,0,0,0.15)'
    //     //   borderRadius={3}
    //     >
    //       {' '}
    //       <img
    //         src={Image}
    //         alt='Dammy'
    //         height={300}
    //         style={{ borderRadius: '100%' }}
    //       />
    //     </Box>
    //   </Grid>
    //   <Grid sm={12} md={12} lg={6} item ml={0} sx={{width: '310%'}}>
    //     <Typography variant='h4' component='h1' mt={8} mb={4}>
    //       Hi!! I'm{' '}
    //       <Typography
    //         variant='h4'
    //         fontWeight='bold'
    //         component='span'
    //         color='#ff6666'
    //       >
    //         Oluwadamilola Shabi
    //       </Typography>{' '}
    //     </Typography>
    //     <Typography variant='h6' component='h1' mb={4} maxWidth='95%'>
    //       I'm a software developer based in Lagos, Nigeria
    //     </Typography>
    //   </Grid>
    // </Grid>
  )
}
