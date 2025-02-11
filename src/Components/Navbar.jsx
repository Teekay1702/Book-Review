import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div>
            <h1>CR</h1>
            <nav>
                <ul className="">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/quotes">Quotes</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};
export default NavBar;