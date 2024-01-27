import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import theme from '../style/Style';
import SideMenu from './SideMenu';

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => (Object.assign({ zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }) }, (open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
}))));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': Object.assign({ position: 'relative', whiteSpace: 'nowrap', width: drawerWidth, transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }), boxSizing: 'border-box' }, (!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    })),
}));

export default function Layout ({ title, children }) {
    // サイドメニュー開閉状態
    const [open, setOpen] = React.useState(true);
    // サイドメニュー開閉処理
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(Box, { sx: { display: 'flex' } },
                    React.createElement(CssBaseline, null),
                        React.createElement(AppBar, { position: "absolute", open: open },
                            React.createElement(Toolbar, { sx: {
                        pr: '24px', 
                    } },
                    React.createElement(IconButton, { edge: "start", color: "inherit", "aria-label": "open drawer", onClick: toggleDrawer, sx: Object.assign({ marginRight: '36px' }, (open && { display: 'none' })) },
                        React.createElement(MenuIcon, null)),
                React.createElement(Typography, { component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 } }, title),
                React.createElement(IconButton, { color: "inherit" }))),
            React.createElement(Drawer, { variant: "permanent", open: open },
                React.createElement(Toolbar, { sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    } },
                    React.createElement(IconButton, { onClick: toggleDrawer },
                        React.createElement(ChevronLeftIcon, null))),
                React.createElement(Divider, null),
                React.createElement(SideMenu, null),
                " "),
            React.createElement(Box, { component: "main", sx: {
                    backgroundColor: (theme) => theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                } },
                React.createElement(Toolbar, null),
                React.createElement(Container, { maxWidth: "lg", sx: { mt: 4, mb: 4 } },
                    children,
                    React.createElement(Box, { mt: 4 }))))));
}
