import React from 'react';
import { Carousel } from 'antd';
import { Rate } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '50vh',
  color: '#d74343',
  lineHeight: '160px',
  textAlign: 'end',
  fontWeight: '500',
  fontSize: '20px',
  alignContent: 'end'
};

const CarouselComponent: React.FC = () => (
  <>
    <Carousel autoplaySpeed={2000} arrows={true} autoplay>
      <div className="bg-center bg-cover bg-[url('/Caro1.jpg')] h-full">

        <div style={contentStyle}>
          <a className='flex justify-center flex-col leading-8 mb-5 mr-5' target="_blank" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">
            <p >
              4.9 on Google
            </p>
            <Rate allowHalf defaultValue={4.9} />
          </a>
        </div>
      </div>
      <div className="bg-center bg-cover bg-[url('/Caro2.jpg')] h-full">

        <div style={contentStyle}>
          <a className='flex justify-center flex-col leading-8 mb-5 mr-5' target="_blank" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">
            <p >
              4.9 on Google
            </p>
            <Rate allowHalf defaultValue={4.9} />
          </a>
        </div>
      </div>
      <div className="bg-center bg-cover bg-[url('/Caro5.jpg')] h-full">

        <div style={contentStyle}>
          <a className='flex justify-center flex-col leading-8 mb-5 mr-5' target="_blank" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">
            <p >
              4.9 on Google
            </p>
            <Rate allowHalf defaultValue={4.9} />
          </a>
        </div>
      </div>
      <div className="bg-center bg-cover bg-[url('/Caro4.jpg')] h-full">

        <div style={contentStyle}>
          <a className='flex justify-center flex-col leading-8 mb-5 mr-5' target="_blank" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">
            <p >
              4.9 on Google
            </p>
            <Rate allowHalf defaultValue={4.9} />
          </a>
        </div>
      </div>

    </Carousel>
  </>
);

export default CarouselComponent;
