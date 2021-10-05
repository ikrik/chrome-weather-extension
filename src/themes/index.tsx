import { createTheme, darken, lighten } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { black, defaultCol, error, primary, secondary, success } from './colors';

export default createTheme({
  typography: {
    fontSize: 14,
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'light',
    tonalOffset: 0.2,
    contrastThreshold: 3,
    background: {
      default: defaultCol,
    },
    primary: {
      main: primary,
      dark: darken(primary, 0.1),
      light: lighten(primary, 0.1),
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondary,
      dark: darken(secondary, 0.1),
      light: lighten(secondary, 0.1),
    },
    success: {
      main: success,
      light: '#e0eee4',
    },
    error: {
      main: error,
    },
    warning: {
      main: orange[500],
      dark: orange[800],
    },
    common: {
      black,
      white: '#ffffff',
    },
  },
});
