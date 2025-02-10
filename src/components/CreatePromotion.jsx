import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField, Button, Typography, Box } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const PromotionSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  startDate: Yup.date().required('Required'),
  endDate: Yup.date().required('Required').min(Yup.ref('startDate'), "End date can't be before start date"),
})

function CreatePromotion() {
  const handleSubmit = (values, { setSubmitting }) => {
    // TODO: Implement promotion creation logic
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Promotion
      </Typography>
      <Formik
        initialValues={{ title: '', description: '', startDate: null, endDate: null }}
        validationSchema={PromotionSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <Field
              as={TextField}
              fullWidth
              margin="normal"
              name="title"
              label="Promotion Title"
              error={touched.title && errors.title}
              helperText={touched.title && errors.title}
            />
            <Field
              as={TextField}
              fullWidth
              margin="normal"
              name="description"
              label="Description"
              multiline
              rows={4}
              error={touched.description && errors.description}
              helperText={touched.description && errors.description}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start Date"
                value={values.startDate}
                onChange={(date) => setFieldValue('startDate', date)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    error={touched.startDate && errors.startDate}
                    helperText={touched.startDate && errors.startDate}
                  />
                )}
              />
              <DatePicker
                label="End Date"
                value={values.endDate}
                onChange={(date) => setFieldValue('endDate', date)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    error={touched.endDate && errors.endDate}
                    helperText={touched.endDate && errors.endDate}
                  />
                )}
              />
            </LocalizationProvider>
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Create Promotion
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CreatePromotion
