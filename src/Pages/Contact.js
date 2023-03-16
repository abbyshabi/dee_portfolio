import React from 'react'
import { Box, Grid, Typography, Paper, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import emailjs from 'emailjs-com'
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone'
import CasesTwoToneIcon from '@mui/icons-material/CasesTwoTone'
import cv from '../assets/Oluwadamilola_Shabi.pdf'
import config from '../config'
import Swal from 'sweetalert2'

export default function Skills () {
  const { service_id, user_id, template_id } = config
  const {
    register,
    handleSubmit,
    reset,
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

  const sendEmail = formData => {
    emailjs.send(service_id.id, template_id.id, formData, user_id.id).then(
      result => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      },
      error => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: "‘Ooops, something went wrong'",
          text: error.text
        })
      }
    )
    reset()
  }

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
          sx={{
            marginTop: '20px',
          }}
        >
          <Typography
            variant='span'
            component='h5'
            fontWeight={400}
            fontSize={'1.5rem'}
            mt={2}
          >
            {' '}
            We can always have a conversation....
          </Typography>
          <Grid>
            <Paper
              sx={{
                padding: 4,
                borderRadius: 3,
                // width: '15rem',
                marginTop: '3rem',
                boxShadow: '8px 8px 16px 4px rgba(0,0,0,0.15)',
                width: {lg: '50rem', sm: '15rem'},
              }}
            >
              <Grid container>
                <Grid
                  item
                  lg={6}
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Paper
                    sx={{
                      marginBottom: '1rem',
                      width: '75%',
                      height: '5rem',
                      padding: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      boxShadow: '8px 8px 16px 4px rgba(0,0,0,0.15)',
                      borderRadius: '20px'
                    }}
                  >
                    <Box
                      component='a'
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        cursor: 'inherit',
                        padding: '1rem'
                      }}
                      href='mailTo:abbyshabi@gmail.com'
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingBottom: '5px'
                        }}
                      >
                        <ForwardToInboxTwoToneIcon />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingBottom: '5px'
                        }}
                      >
                        <strong>Abbyshabi@gmail.com</strong>
                      </div>
                    </Box>
                  </Paper>
                </Grid>
                <Grid
                  item
                  lg={6}
                  spacing
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Paper
                    sx={{
                      marginBottom: '1rem',
                      width: '75%',
                      height: '5rem',
                      padding: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      boxShadow: '8px 8px 16px 4px rgba(0,0,0,0.15)',
                      borderRadius: '20px'
                    }}
                  >
                    <Box
                      component='a'
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        cursor: 'inherit',
                        padding: '1rem'
                      }}
                      href={cv}
                      download
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingBottom: '5px'
                        }}
                      >
                        <CasesTwoToneIcon />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingBottom: '5px'
                        }}
                      >
                        <strong>Download Resume</strong>
                      </div>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <form onSubmit={handleSubmit(sendEmail)}>
                <Typography
                  variant='span'
                  component='h5'
                  fontWeight={400}
                  fontSize={'1.1rem'}
                  mt={6}
                >
                  {' '}
                  Contact Form
                </Typography>
                <Grid mt={4} columnSpacing={4} container>
                  <Grid xs={12} mb={2} lg={6} item>
                    <TextField
                      label='Name'
                      variant='outlined'
                      {...register('sender_name', {
                        required: {
                          value: true,
                          message: 'Name is required'
                        },
                        maxLength: {
                          value: 20,
                          message: 'Name cannot be longer than 20 characters'
                        }
                      })}
                      required={!!errors.sender_name}
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
                        message: 'subject is required'
                      },
                      minLength: {
                        value: 10,
                        message: 'subject cannot be less than 10 character'
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
                      label='Message'
                      multiline
                      rows={4}
                      variant='outlined'
                      {...register('message', {
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
