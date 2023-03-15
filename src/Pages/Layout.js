import {
  Box,
} from '@mui/material'
import Menu from '../Components/Menu';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      <Box
         sx={{
          display: 'flex',   
          justifyContent: 'center',
          flexDirection: 'column',
          bgcolor: 'background.default',
          minHeight: '100vh',
        }}
        maxWidth={{ md: '75vw', lg: '80vw', xl: '85vw' }}
        marginLeft={{ md: 'auto' }}
        component='main'
      >
        <Home />
        <Skills/>
        <Projects/>
        <Contact />
      </Box>
    </>
  );
}