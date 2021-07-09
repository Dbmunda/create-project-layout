import React from 'react'
import { Card, CardHeader, CardContent, Typography, IconButton, makeStyles } from '@material-ui/core'
import { Paper ,Avatar} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';

const usestyles = makeStyles({
    test:{
        border: (item)=>{
            if(item.category === 'work')
              return(
                  '2px solid red'
              )
              if(item.category == 'todos')
              return '2px solid yellow'

              if(item.category == 'money')
              return '2px solid blue'
              
              if(item.category == 'reminders')
              return '2px solid orange'
              
        }
    },
    avatar:{
      backgroundColor: (item)=>{
        if(item.category === 'work')
          return(
              'red'
          )
          if(item.category == 'todos')
          return 'yellow'

          if(item.category == 'money')
          return 'blue'
          
          if(item.category == 'reminders')
          return 'orange'
          
    },
    textTransform: 'uppercase'
      
    }
})
const NoteCard = ({ item , handleDelete}) => {
    const classes= usestyles(item)
    return (
        <Card elevation={5} className={classes.test}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>{item.category[0]}</Avatar>
                }
                title={item.title}
                subheader={item.category}
                action={
                    <IconButton onClick={()=> handleDelete(item.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>{item.details}</Typography>
            </CardContent>

        </Card>
    )
}

export default NoteCard
