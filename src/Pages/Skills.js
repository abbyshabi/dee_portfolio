import React from 'react'
import { Box, Grid, Typography, Paper, Chip, useTheme } from '@mui/material'
import { skills as skillsData } from '../assets/skillsData.js'

export default function Skills () {
  const theme = useTheme()

  const getChipColor = proficiency => {
    if (proficiency === 'Beginner') {
      return 'primary'
    } else if (proficiency === 'Expert') {
      return 'success'
    } else if (proficiency === 'Advanced') {
      return 'warning'
    } else {
      return 'default' // You can set a default color for other cases
    }
  }

  return (
    <Box
      id='skills'
      sx={{
        marginTop: 15,
        alignItems: 'center',
        padding: '8rem 0',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default
      }}
    >
      <Typography
        variant='span'
        component='h4'
        fontWeight={400}
        fontSize={'1.5rem'}
        mb={5}
      >
        Some of the tools I love to tinker with include...
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map(skill => (
          <Grid key={skill.name} item xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                padding: '1rem',
                display: 'flex',
                height: '70%',
                width: '60%',
                flexDirection: 'column',
                alignItems: 'center',
                // height: '100%',
                borderRadius: '12px',
                background:
                  'linear-gradient(to bottom right, #ffffff, #f3f3f3)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                style={{ width: '70px', height: '50px', marginBottom: '1rem' }}
              />
              <Typography variant='h6' mb={1}>
                {skill.name}
              </Typography>
              <Typography
                variant='span'
                color='text.secondary'
                mb={2}
                component='p'
              >
                <Chip
                  label={skill?.proficiency}
                  color={getChipColor(skill?.proficiency)}
                />
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
