import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import { AppBar,
    Toolbar, Box,
    Typography, IconButton,
    Container, Avatar
}	from '@mui/material';

import { Outlet } from 'react-router-dom';

const DashboardLayout = () => { return (
    <Box sx={{ display: 'flex' }}>
    <AppBar position="absolute">
    <Toolbar sx={{
    pr: '24px',
    }}
    >
    
    
    <Typography
    component="h1" variant="h6"
    color="inherit" noWrap
    sx={{ flexGrow: 1 }}
    >
    Pilar Tecno Web
    </Typography>
    <IconButton
    size="small"
    sx={{ ml: 2 }}
    >
    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
    </IconButton>
    </Toolbar>
</AppBar>


<Box
component="main" sx={{
backgroundColor: (theme) =>
theme.palette.mode === 'light'
? theme.palette.grey[100]
: theme.palette.grey[900], flexGrow: 1,
height: '100vh', overflow: 'auto',
}}
>
<Toolbar />
<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
<Outlet/>
</Container>
</Box>
</Box>
)
}

const[open, setOpen] =
useState(false)

const SideMenu = ({open, onClose}) => {
    const { pathname } = useLocation()
    useEffect(()=>{
if(open){
onClose()
}
}, [pathname] )
return(
<Box sx={{display:'flex'}}>
<Drawer open={open} onClose={onClose} sx={{
width: drawerWidth,
flexShrink: 0,
'& .MuiDrawer-paper': {
width: drawerWidth,
boxSizing: 'border-box',
},
}}>
<Menu items={drawerMenu} />
</Drawer>
</Box>
)
}

<SideMenu open={open}
onClose={()=>setOpen(false)}/>

export default DashboardLayout;