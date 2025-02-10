import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Promotion Management
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={RouterLink} to="/create-promotion">
            Create Promotion
          </Button>
          <Button color="inherit" component={RouterLink} to="/promotions">
            Promotions
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
