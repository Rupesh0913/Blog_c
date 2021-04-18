import React from 'react';

function Navbar() {
    return (
        <div className="App">
            <div class="nav">
                <div id="nav-1">
                    <ul>
                        <li><a href="#">register</a></li>
                        <li><a href="#">Suggest an article</a></li>
                    </ul>
                </div>
                <div class="grid">
                    <div class="dummy">
                        <h3>FEATURES</h3>
                    </div>
                    <div id="nav-2">
                        <ul>
                            <li><a href="#">Get Started!!</a></li>
                            <li><a href="#">Tour</a></li>
                            <li><a href="#">Cour GuideLines</a></li>
                            <li><a href="#">Standadization</a></li>
                            <li><a href="#">About</a></li>

                        </ul>
                        <div class="form">
                            <form>
                            <input type="search" placeholder="Search Blogs" id="search" name="search"></input>
                            <lable><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" id="s-logo">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></lable>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;