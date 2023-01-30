import { Navigation } from './Navigation/Navigation';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/auth-selectors';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Header = () => {
  const token = useSelector(selectToken);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Grid container spacing={2} columns={16}>
          <Navigation />
          {token ? <AuthMenu /> : <AuthNav />}
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
};
