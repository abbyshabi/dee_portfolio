import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material'
import alo from '../assets/alo.png'
import hood from '../assets/matching.png'
import github from '../assets/github.png'

const Skills = () => {
  const icons = [
    {
      image: alo,
      name: 'Alo-App',
      about:
        '📖✨ Introducing Alo-App! ✨📖 Step into a world of enchanting stories and legendary characters. Alo, meaning "story" in Yoruba, is an indigenous app that celebrates rich cultural narratives. Built with Django, Postgres, and React, it weaves modern technology with timeless tales. Uncover the magic of our diverse heritage and embark on a captivating journey with "Alo-App"!',
      repo: 'https://github.com/abbyshabi/Alo-app'
    },
    {
      image: hood,
      name: 'Memory Game',
      about:
        '🎮🃏 Get Ready to Match and Flip! 🃏🎮 🌟 This React-based memory game, crafted with Next.js and Sass, will put your memory and matching skills to the ultimate test. Flip cards and find those elusive matching pairs! Challenge yourself to complete the game using the fewest moves and secure the top spot on the high score list! 🏆🚀 Give it a whirl and see how sharp your memory really is! 💡💫',
      repo: 'https://github.com/abbyshabi/Matching-game'
    },
    {
      image: github,
      name: 'Github Search',
      about:
        'The GitHub Clone App is a web application that allows users to explore GitHub profiles and repositories seamlessly. Leveraging GitHub tokens and API, this app provides an interactive interface for users to discover essential information about GitHub users, their repositories, and contributions. It is built using Angular JS and Bootstrap.',
      repo: 'https://github.com/abbyshabi/Git-hub'
    }
  ]

  return (
    <Box
      id='projects'
      sx={{
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        padding: '8rem 0',
        width: '90%',
        minHeight: '100vh'
      }}
    >
      <Typography
        variant='span'
        component='h4'
        fontWeight={400}
        fontSize={'1.5rem'}
        mb={5}
      >
        Here are some awesome apps I've crafted and tinkered with...
      </Typography>
      <Grid container spacing={3}>
        {icons?.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '2rem',
                height: '100%',
                boxShadow: '0px 10px 14px #ffe6e6',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0px 10px 20px #ffe6e6'
                }
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '80%', marginBottom: '1rem', height: '25%' }}
              />
              <Typography variant='span' component='h2'>
                {item.name}
              </Typography>
              <Typography variant='span' component='p' fontWeight={150}>
                {item.about}
              </Typography>
              <Typography
                variant='span'
                component='h5'
                fontWeight={400}
                fontSize={'1.2rem'}
                mb={2}
              >
                <a href={item.repo} target='_blank' rel='noreferrer'>
                  Link to Project
                </a>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant='span'
        component='h4'
        fontWeight={400}
        fontSize={'1.5rem'}
        mt={20} // Add some margin between project section and the new section
      >
        You can also check out some of my projects on{' '}
        <a href='https://github.com/abbyshabi' target='_blank' rel='noreferrer'>
          GitHub!
        </a>
      </Typography>
    </Box>
  )
}

export default Skills
