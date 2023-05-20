import React, { useState } from 'react';

const Gallery = () => {
  const img2 = "https://i.ibb.co/ydfz1RD/61-To-Xc-EAWL-AC-SR360-460.jpg";
  const img3 = "https://i.ibb.co/xHRC80Y/41dwjbdrd-AL-AC-SR360-460.jpg";
  const img5 = "https://i.ibb.co/B6Dz2bL/download.jpg";
  const img6 = "https://i.ibb.co/bLQ2Rj1/download-1.jpg";

  const [index, setIndex] = useState(0);
  const picList = [ img2, img3, img5 , img6];

  const onClickNext = () => {
    if (index + 1 === picList.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const onClickPrevious = () => {
    if (index - 1 === -1) {
      setIndex(picList.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className='w-[40%] mx-auto'>
        <h1 className='font-bold text-3xl text-center my-4'>Image Gallery</h1>
      <div>
        <img src={picList[index]} style={{ maxHeight: '40%', maxWidth: '40%' }} alt="Gallery" /> <br />
        <button onClick={onClickPrevious} className="btn btn-primary">Previous</button>
        <button onClick={onClickNext} className="btn btn-primary ml-4">Next</button>
        
      </div>
    </div>
  );
};

export default Gallery;
