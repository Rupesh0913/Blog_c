import React from 'react';

function Footetr(props) {
    return (
        <div className="App">
            <div class="center">
                <div class="footer">
                <p>&copy; Copyright 2021 Standard {props.name} Foundation. All rights reserved.Terms of Use Privacy Policy</p>
                 <p>Hosted by <a href="#">TigerHunt</a></p>
                </div>
                
            </div>
        </div>
    );
}
export default Footetr;