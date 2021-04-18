import React from 'react';
function abc(){
    alert("INAPROPRIATE ACTION")
}


function Body(props){
    return(
        <div>
             <div class="grid">
                <div class="sideblock">
                    <div id="sideblock-1">
                        <a href="#">    Current ISO {props.name} status      </a>
                        <a href="#">    Upcoming ISO {props.name} meetings   </a>
                        <a href="#">    Upcoming {props.name} conferences    </a>
                        <a href="#">    Compiler conformance status </a>
                    </div>

                    <hr style={{ color: "black" }}></hr>
                    <div id="sideblock-2">
                        <h3><b>CATEGORY</b></h3>
                        <a href="#">    News                </a>
                        <a href="#">    Product News        </a>
                        <a href="#">    Articles & Books    </a>
                        <a href="#">    Video & On-Demand   </a>
                        <a href="#">    Events              </a>
                        <a href="#">    Training            </a>
                        <a href="#">    Standardization     </a>
                    </div>

                    <hr style={{ color: "black" }}></hr>
                    <div id="sideblock-3">
                        <h3><b>TAGS</b></h3>
                        <button onClick={abc}>Basic</button>
                        <button onClick={abc}>Intermediate</button>
                        <button onClick={abc}>Advance</button>
                        <button onClick={abc}>Experimental</button>
                    </div>

                    <hr style={{ color: "black" }}></hr>
                    <div id="sideblock-4">
                        <h3><b>ARCHIVES</b></h3>

                        <a href="#">    January 2021        </a>
                        <a href="#">    December 2020       </a>
                        <a href="#">    November 2020       </a>
                        <a href="#">    October 2020        </a>
                        <a href="#">    September 2020      </a>
                        <a href="#">    August 2020         </a>
                        <a href="#">    July 2020           </a>
                        <a href="#">    June 2020           </a>
                        <a href="#">    May 2020            </a>
                        <a href="#">    April 2020          </a>
                        <a href="#">    March 2020          </a>
                        <a href="#">    February 2020       </a>

                    </div>
                </div>
                <div class="Mbody">
                    <div id="head">
                        home {'>>'} {props.name}
                    </div>
                    <div class="clearfix"></div>
                    <div id="inbody">
                        <b>Blog</b>
                        <hr></hr>
                        <a href="#">{props.name} at the end of 2020–Bartlomiej Filipek</a>
                        <p><h6>By Adrien Hamelin | Jan 5, 2021 12:38 PM | Tags:<a href="#">community</a><a href="#">c++23</a><a href="#">c++20</a></h6></p><br></br>
                        <p>A summary of the year and the future.</p>
                        <a href="#">{props.name} at the end of 2020</a>
                        <p>by Bartlomiej Filipek</p>
                        <p><h3>From the article:</h3></p>
                        <p>While 2020 was a crazy and hard year we were fortunate - {props.name} 20 was accepted and published, and the work on new features continues.

                            As usually every year, here’s my overview of the year: the standardization process, features, implementation, compilers, tools, books and more…</p><br></br><br></br>
                       


                        <a href="#">Firsts in 2020 (or, A little dose of good news)–Herb Sutter</a><br></br>
                        <p><h6>By Adrien Hamelin | Jan 5, 2021 12:29 PM | Tags:<a href="#">community</a></h6></p><br></br>
                        <p>A year full of accomplishments.</p>
                        <a href="#">Firsts in 2020 (or, A little dose of good news)</a>
                        <p>by Herb Sutter</p>
                        <p><h3>From the article:</h3></p>
                        <p>2020 has been mostly terrible. That includes for the {props.name} committee and many of our communities, where just this month we lost Beman Dawes. Beman was one of the most important and influential {props.name} experts in the world, and made his many contributions mostly behind the scenes. I and everyone else who has ever benefited from any of the standardized STL, Boost, {props.name} Now, std::filesystem, {props.name}98/11/14/17, and more — so, really, most people who have ever used {props.name} — all owe Beman a debt of gratitude. We miss him greatly.</p>
                        <p>To end the year with a little dose of good news, I thought I’d mention a just few positive {props.name} accomplishments that did happen for 2020, and were happier “first-ever” achievements.</p>
                        <p>First, the big one…</p><br></br><br></br>

                    </div>
                </div>
            </div>

            

        </div>
    );
}
export default Body;
