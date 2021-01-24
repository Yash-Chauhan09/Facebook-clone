import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FParykartcom-436936600402735%2F&tabs=timeline&width=320&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="320" height="100%" style={{border:"none",
             overflow:"hidden"}}
              scrolling="no"
               frameborder="0" 
               allowTransparency="true"
                allow="encrypted-media"></iframe>
            {/* <iframe
             src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100046461972420&tabs=timeline&width=300&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="100%" style={{border:"none",
             overflow:"hidden"}}
              scrolling="no"
               frameborder="0" 
               allowTransparency="true"
                allow="encrypted-media"> */}

             {/* </iframe> */}
        </div>
    )
}

export default Widgets
