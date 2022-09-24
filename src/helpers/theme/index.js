/* eslint-disable import/prefer-default-export */
import { createTheme,  styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

export const theme = createTheme({
    palette: {
        primary: {
            main: `#FFC59E`
        }
    }
})


export const BootstrapButton = styled(Button)({
    textTransform: 'none',
    color: '#FFFFFF',
    lineHeight: 1,
    padding: 8,
    borderRadius: 33.5,
    backgroundColor: 'rgba(255, 197, 158, 1)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgba(255, 197, 158, 1)',
      boxShadow: '0px 4px 20px 0px rgba(255, 197, 158, 1)'
    },
    '&:active': {
        boxShadow: '0px 4px 20px 0px rgba(255, 197, 158, 1)',
      backgroundColor: 'rgba(255, 197, 158, 1)',
    },
    '&:focus': {
        boxShadow: '0px 4px 20px 0px rgba(255, 197, 158, 1)'
    },
  });