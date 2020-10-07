import React from 'react';
//Stateless or Functional Component
function Header(){
    return (
        <header className="bg-dark text-light py-5 text-center">
             <h1>Weather App</h1>
             <p>This will help you find weather anywhere!</p>
        </header>
    );
}

export default Header;