import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';
import NoMeetingRoomRoundedIcon from '@material-ui/icons/NoMeetingRoomRounded';
import { withRouter } from 'react-router-dom';
import Authentication from '../Authentication.js';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 30,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function AppDrawer(props) {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const isUserLoggedin = Authentication.isUserLoggedin();
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        Authentication.logout();
        history.push('/login');

    }

    const navUpList = [{
        text: 'Home',
        icon: <HomeRoundedIcon />,
        status: true,
        onClick: () => history.push('/')
    }, {
        text: 'Store',
        icon: <StorefrontRoundedIcon />,
        status: isUserLoggedin,
        onClick: () => history.push('/ProductList')
    }, {
        text: 'Cart',
        icon: <ShoppingCartRoundedIcon />,
        status: isUserLoggedin,
        onClick: () => history.push('/cart')
    }, {
        text: 'Contact',
        icon: <PhoneRoundedIcon />,
        status: true,
        onClick: () => history.push('/')
    },
    ];

    const navDownList = [{
        text: 'Login',
        icon: <MeetingRoomRoundedIcon />,
        status: !isUserLoggedin,
        onClick: () => history.push('/login')
    }, {
        text: 'Logout',
        icon: <NoMeetingRoomRoundedIcon />,
        status: isUserLoggedin,
        onClick: () => logout()
    }
    ];    

    return (
        <div>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <Typography variant='h6'>
                        Navigation
                    </Typography>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider variant='middle' />
                <List>
                    {navUpList.map((item, index) => {
                        const { text, icon, onClick, status } = item;
                        return (
                            <ListItem button key={text} onClick={onClick} disabled={!status}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
                <Divider variant='middle' />
                <List>
                    {navDownList.map((item, index) => {
                        const { text, icon, onClick, status } = item;
                        return (
                            <ListItem button key={text} onClick={onClick} disabled={!status}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

        </div>
    )
}

export default withRouter(AppDrawer)
