import React,{useState} from 'react'
import {
    IconButton,
    AppBar,
    Toolbar,
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar
} from '@material-ui/core';
import { SubjectOutlined } from '@material-ui/icons';
import { AddCircleOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';
import { format } from 'date-fns'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const drawerWidth = 240;

const usestyles = makeStyles((theme) => ({
    page: {
        backgroundColor: 'f4f4f4',
        width: '100vw',
        padding: theme.spacing(3)
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    }
    ,
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        //marginLeft: drawerWidth,
        background: '#2196f3'
    },
    active: {
        backgroundColor: '#f4f4f4',
        color:'#D90026'
    },
    title: {
        padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
    typo: {
        flexGrow: 1
    },
    avatar:{
        marginLeft: 10,
        backgroundColor: 'orange'
    }
}))
const Layout = ({ children ,toggle}) => {
    const classes = usestyles();
    const history = useHistory();
    const location = useLocation();
    
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'

        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color='secondary' />,
            path: '/create'

        }
    ]


    
    return (
        <div className={classes.root}>
            {/* appbar */}
            <AppBar position="fixed" className={classes.appBar} elevation={0}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.typo} >
                        Website Name
                    </Typography>
                    <IconButton>
                     <Brightness4Icon onClick={toggle}/>
                    </IconButton>
                    
                    <Typography>
                        {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    
                    <Avatar className={classes.avatar}>DB</Avatar>
                </Toolbar>
            </AppBar>
            {/* drawer */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Dbm rocks
                    </Typography>
                </div>
                <Divider />
                {/* list / link */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page} >
                <div className={classes.toolbar}></div>
                {children}</div>
        </div>
    )
}

export default Layout
