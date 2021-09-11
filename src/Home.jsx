import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, Zoom, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShopImage from './asserts/online-store-image.jpg';

export default function Home() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Freshland Dairy
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <div className="container">
                <Grid container spacing={6} >
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/Online-Shop`}>
                                    <CardMedia >
                                        <img alt='' src= {ShopImage} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="Online Store" />
                                <Link to={`/login`}>
                                    <CardMedia >
                                        <img alt='' src="https://wallpapershome.com/images/pages/pic_h/21486.jpg" width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </div>
            <br />
            <Footer />
        </>
    )
}
