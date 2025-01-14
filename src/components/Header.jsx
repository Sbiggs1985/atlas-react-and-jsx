import React from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}

export default Header;

// importing the Greeting & SocialLinks: These components are used inside the Header component.
// Return a nav element: The nav acts as the container for the Greeting & SocialLinks components.
// Render the components: Inside the nav, we include the Greeting & SocialLinks components.