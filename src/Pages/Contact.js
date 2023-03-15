import React from 'react'
import { Box, Grid, Typography, Paper, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import validator from 'validator'

export default function Skills () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const style = {
    display: 'inline-flex',
    width: '80%',
    marginTop: 10,
    marginLeft: { sm: 2 },
    item: {
      //   padding: 3
    }
  }

  let onSubmit

  return (
    <Box
      id='contact'
      style={{
        height: '100vh',
        width: '100%',
        alignItems: 'center'
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
          sx={{ marginBottom: { lg: '20px', marginTop: { lg: 30 } } }}
        >
          <Typography
            variant='span'
            component='h5'
            fontWeight={400}
            fontSize={'1.5rem'}
            mt={5}
          >
            {' '}
            We can always have a conversation....
          </Typography>
          <Grid>
            <Paper sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  variant='span'
                  component='h5'
                  fontWeight={400}
                  fontSize={'1.1rem'}
                >
                  {' '}
                  Contact Form
                </Typography>
                <Grid mt={4} columnSpacing={4} container>
                  <Grid xs={12} mb={2} lg={6} item>
                    <TextField
                      label='Name'
                      variant='outlined'
                      {...register('firstName', {
                        required: {
                          value: true,
                          message: 'Name is required'
                        },
                        maxLength: {
                          value: 20,
                          message: 'Name cannot be longer than 20 characters'
                        }
                      })}
                      required={!!errors.firstName}
                      fullWidth
                    />
                    <Typography variant='small' component='small' color='error'>
                      {errors.firstName?.message}
                    </Typography>
                  </Grid>
                  <Grid xs={12} mb={2} lg={6} item>
                    <TextField
                      type='email'
                      label='Email'
                      variant='outlined'
                      {...register('email', {
                        required: {
                          value: false
                        },
                        validate: value => {
                          value && validator.isEmail(value)
                        }
                      })}
                      fullWidth
                    />
                    <Typography variant='small' component='small' color='error'>
                      {errors.email?.message}
                      {errors.email &&
                        errors.email.type === 'validate' &&
                        'Enter a valid email'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={12} mb={2} lg={12} item>
                  <TextField
                    label='Subject'
                    variant='outlined'
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Last Name is required'
                      },
                      maxLength: {
                        value: 20,
                        message: 'Name cannot be longer than 20 characters'
                      }
                    })}
                    required={!!errors.lastName}
                    fullWidth
                  />
                  <Typography variant='small' component='small' color='error'>
                    {errors.lastName?.message}
                  </Typography>
                </Grid>
                <Grid columnSpacing={4} container>
                  <Grid xs={12} mb={2} lg={12} item>
                    <TextField
                      type='message'
                      label='Message'
                      multiline
                      rows={4}
                      variant='outlined'
                      {...register('email', {
                        required: {
                          value: false
                        },
                        validate: value => {
                          value && validator.isEmail(value)
                        }
                      })}
                      fullWidth
                    />
                    <Typography variant='small' component='small' color='error'>
                      {errors.email?.message}
                      {errors.email &&
                        errors.email.type === 'validate' &&
                        'Enter a valid email'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid mb={3} p={3} width='50%' m='auto'>
                  <Button
                    size='large'
                    variant={'contained'}
                    fullWidth
                    // disabled={!checked}
                    type='submit'
                    // loading={loading}
                    loadingIndicator='Loading...'
                  >
                    Let's Go!
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
