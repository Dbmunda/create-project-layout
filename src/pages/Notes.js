import React, { useEffect, useState } from 'react';
import { Grid, Paper, Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

import Masonry from 'react-masonry-css';

export default function Notes() {
  const [notes, setnotes] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setnotes(data))
    //console.log(notes);   //print array type
  }, [])
  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DElETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setnotes(newNotes)
  }

  const breakpoints= {
    deafault: 3,
    1100 : 2,
    700: 1
  }

  return (
    <Container component={Paper}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(item => (
          <div key={item.id} >
            <NoteCard item={item} handleDelete={handleDelete}
            />
          </div>
        ))}

      </Masonry>
    </Container>
  )
}
