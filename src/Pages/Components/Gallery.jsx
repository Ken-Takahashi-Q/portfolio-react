import React from 'react';
import { Carousel } from 'antd';

const Gallery = () => {
  return (
    <Carousel autoplay style={{width: "100%", overflow: "hidden"}}>
      <div>
        1{/* Gallery item 1 */}
      </div>
      <div>
        2{/* Gallery item 2 */}
      </div>
      <div>
        3{/* Gallery item 3 */}
      </div>
      <div>
        4{/* Gallery item 4 */}
      </div>
    </Carousel>
  );
};

export default Gallery;
