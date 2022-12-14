import "./navbar.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>

        <Box className='cursor' >

          <Typography variant="h5" color="inherit">
            BlogPessoal
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              <Button color="inherit">Home</Button>
            </Typography>
          </Box>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              <Button color="inherit">Postagens</Button>
            </Typography>
          </Box>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              <Button color="inherit">Temas</Button>
            </Typography>
          </Box>
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              <Button color="inherit">Cadastrar Temas</Button>
            </Typography>
          </Box>
          
            <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
              <Typography variant="h6" color="inherit">
                <Link to='/login' className="text-decorator-none">
                <Button color="inherit">Logout</Button>
                </Link>
              </Typography>
            </Box>
          
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export { Navbar };