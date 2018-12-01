import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import UserList from '../containers/user-list'
import UserDetails from '../containers/user-details'
import TasksList from '../containers/tasks-list';
import TaskDetails from '../containers/task-details';
import FloatingAddButton from '../containers/AddButton'
import AddTaskDialog from "../containers/addTaskModal";
import TaskCreateForm from "../forms/task-create-form";
import LoginApp from "../forms/login";
import SignupApp from '../forms/signup'
import AddGroceryListDialog from "../containers/addGroceryListDialog";
import Header from '../components/addGroceryItems'



const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer +1,
        // marginLeft: drawerWidth,
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        // },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },




    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };



    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };


    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { theme } = this.props;



        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );




        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );










        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src="home.png" width="40"/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Home Life
                        </Typography>

                        {/*const renderMenu = (*/}
                        {/*<Menu*/}
                            {/*anchorEl={anchorEl}*/}
                            {/*anchorOrigin={{ vertical: 'top', horizontal: 'right' }}*/}
                            {/*transformOrigin={{ vertical: 'top', horizontal: 'right' }}*/}
                            {/*open={isMenuOpen}*/}
                            {/*onClose={this.handleMenuClose}*/}
                        {/*>*/}
                            {/*<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>*/}
                            {/*<MenuItem onClick={this.handleMenuClose}>My account</MenuItem>*/}
                        {/*</Menu>*/}
                        {/*);*/}
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"

                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/*<Typography paragraph>*/}
                        {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
                        {/*incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent*/}
                        {/*elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in*/}
                        {/*hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum*/}
                        {/*velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.*/}
                        {/*Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis*/}
                        {/*viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.*/}
                        {/*Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus*/}
                        {/*at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed*/}
                        {/*ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                        {/*Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
                        {/*facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
                        {/*tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
                        {/*consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus*/}
                        {/*sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.*/}
                        {/*In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem*/}
                        {/*et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique*/}
                        {/*sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo*/}
                        {/*viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam*/}
                        {/*ultrices sagittis orci a.*/}
                    {/*</Typography>*/}

                    <h1>Tasks list:</h1>
                    <TasksList/>
                    <hr/>
                    <h2>Task details:</h2>
                    <TaskDetails />
                    {/*<FloatingAddButton/>*/}
                    <AddTaskDialog/>
                    {/*<AddGroceryListDialog/>*/}

                    {/*<Header/>*/}
                    <LoginApp/>
                    <SignupApp/>
                    {/*<TaskCreateForm/>*/}
                    {/*<Login/>*/}
                </main>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);