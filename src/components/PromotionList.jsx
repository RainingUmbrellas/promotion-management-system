import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'

const mockPromotions = [
  { id: 1, title: 'Summer Sale', startDate: '2023-06-01', endDate: '2023-08-31', status: 'Active' },
  { id: 2, title: 'Back to School', startDate: '2023-08-15', endDate: '2023-09-15', status: 'Pending' },
  { id: 3, title: 'Black Friday', startDate: '2023-11-24', endDate: '2023-11-27', status: 'Upcoming' },
]

function PromotionList() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Promotions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockPromotions.map((promotion) => (
              <TableRow key={promotion.id}>
                <TableCell>{promotion.title}</TableCell>
                <TableCell>{promotion.startDate}</TableCell>
                <TableCell>{promotion.endDate}</TableCell>
                <TableCell>{promotion.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default PromotionList
