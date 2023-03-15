import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5318'
    },
    status: {
      success: '#66bb6a',
      failed: '#fc0303'
    },
    secondary: {
      main: '#707070'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: "'Nunito', sans-serif"
  }
});

export default theme;
