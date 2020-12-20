import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3041D9',
    },
    secondary: {
      main: '#E3B641',
      contrastText: '#ffffff'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        }
      },
      label: {
        textTransform: 'capitalize',
      }
    }, 
    MuiTypography: {
      root: {
        fontSize: 14,
      },
      body1: {
        fontSize: 14,
      },
      h1: {
        fontSize: 34,
      },
      h2: {
        fontSize: 30,
      },
      h3: {
        fontSize: 26,
      },
      h4: {
        fontSize: 22,
      },
      h5: {
        fontSize: 18,
      },
      h6: {
        fontSize: 14,
      },
    }
  }
})

const ThemeProvider: React.FC = (props) => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider;
