import React from 'react';
import { Link } from 'react-router-dom';
import { StyledListItem, StyledNavigationContainer, StyledUnorderedList } from './Navigation.syles';

const Navigation = () => {
  return (
    <StyledNavigationContainer>
          <StyledUnorderedList>
          <StyledListItem>
              <Link to="/">Home</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/form">Form</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/test">Test Page</Link>
            </StyledListItem>
          </StyledUnorderedList>
        </StyledNavigationContainer>
  );
};

export default Navigation;
