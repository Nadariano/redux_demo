import { AppBar, Container, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function Navigation() {
    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Redux Toolkit Demo
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    )
}