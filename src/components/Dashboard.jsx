import React from 'react'
import { Typography, Grid, Paper } from '@mui/material'

function Dashboard() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Active Promotions</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Pending Approval</Typography>
            <Typography variant="h4">3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming Promotions</Typography>
            <Typography variant="h4">2</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
