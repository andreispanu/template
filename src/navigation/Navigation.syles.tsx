import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledNavigationContainer = styled('nav')({
  backgroundColor: '#1976d2', // Background color for the nav
  padding: '10px',
});

export const StyledUnorderedList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
});

export const StyledListItem = styled('li')({
  fontSize: '18px',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  '&:hover': {
    color: '#ff4081', 
  },
});