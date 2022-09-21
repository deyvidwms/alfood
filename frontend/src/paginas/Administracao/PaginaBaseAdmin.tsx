import { AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography } from "@mui/material";

import { Link as RouterLink, Outlet } from "react-router-dom";

const PaginaBaseAdmin = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography>
              Administração
            </Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{ my: 2, color: "white" }}>
                  Restaurantes
                </Button>
              </Link>
              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{ my: 2, color: "white" }}>
                  Novo Restaurantes
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            {/* AQUI DEVE IR O CONTEÚDO */}
            <Outlet />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default PaginaBaseAdmin;