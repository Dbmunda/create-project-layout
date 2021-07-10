import React, { useState, useEffect } from 'react'
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField, Radio,
  RadioGroup, FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {useHistory} from 'react-router-dom';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})
export default function Create() {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [titleError, settitleError] = useState(false)
  const [detailsError, setdetailsError] = useState(false)
  const [category, setcategory] = useState('todos')
  const classes = useStyles();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    settitleError(false)
    setdetailsError(false)
    if (title === '') {
      settitleError(true)
    }

    if (details === '') {
      setdetailsError(true)
    }
    if (title && details) {
      //console.log(title, details, category);
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title,details,category})
      }).then(()=> history.push('/'))
    }
  }
  // useEffect(() =>
  //   console.log('1')
  //   , []);
  return (
    <Container >
      <Typography

        variant='h6'
        component="h2"
        gutterBottom
        color='secondary'
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => settitle(e.target.value)}
          className={classes.field}
          label='Note title'
          variant='outlined'
          color="secondary"
          fullWidth
          required
          autoFocus
          error={titleError}
        />
        <TextField
          onChange={(e) => setdetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel color='secondary'>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setcategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>

        </FormControl>


        <Button

          type='submit'
          color='secondary'
          variant='contained'
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit</Button>
      </form>


      <br />

    </Container>
  )
}
