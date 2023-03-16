import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material'
import JS from '../assets/javascript.svg'
import Python from '../assets/python.png'
import ReactImg from '../assets/react.svg'
import CSS from '../assets/css.svg'
import Git from '../assets/git.svg'
import JQ from '../assets/jquery.svg'
import SASS from '../assets/sass.svg'
import VS from '../assets/vscode.svg'
import HTML from '../assets/html.svg'
import API from '../assets/api.svg'

export default function Skills () {
  const style = {
    display: 'inline-flex',
    width: '80%',
    marginTop: 10,
    marginLeft: { sm: 2 },
    item: {
      padding: 3
    }
  }

  const icons = [
    {
      image: JS,
      name: 'Javascript'
    },
    {
      image: Python,
      name: 'Python'
    },
    {
      image: ReactImg,
      name: 'React'
    },
    {
      image: CSS,
      name: 'CSS'
    },
    {
      image: Git,
      name: 'Git'
    },
    {
      image: JQ,
      name: 'Jquery'
    },
    {
      image: SASS,
      name: 'SASS'
    },
    {
      image: VS,
      name: 'VS Code'
    },
    {
      image: HTML,
      name: 'HTML'
    },
    {
      image: API,
      name: 'Rest API'
    },
    {
      image: HTML,
      name: 'HTML'
    },
    {
      image: API,
      name: 'Rest API'
    }
  ]

  return (
    <Box
      id='skills'
      sx={{
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        marginBottom: 0,
        marginLeft: { sm: 2 }
      }}
    >
      <Grid
        container
        sx={{ ...style, margin: { lg: '5px 20px' } }}
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid
          item
          lg={12}
          mb={2}
          sx={{
            marginBottom: {
              lg: '20px',
              marginTop: { lg: 30, sm: 5 },
              marginLeft: { sm: 10 }
            }
          }}
        >
          <Typography
            variant='span'
            component='h5'
            fontWeight={400}
            fontSize={'1.5rem'}
            mt={5}
            // sx={{ textDecoration: 'underline' }}
          >
            {' '}
            The cool tools I work with....
          </Typography>
        </Grid>
        {icons?.map(item => (
          <Grid sx={{ ...style.item }} item xs={6} sm={6} md={4} lg={2}>
            <Paper
              sx={{
                width: '3rem',
                height: '3rem',
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
                width={'30rem'}
                style={{}}
              />
              <Typography fontSize={'0.7rem'} mt={'0.7rem'}>
                {item.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
