import React from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import LogoImg from '../img/logo.svg';
import NikeImg from '../img/nike.png';

const colors = [  { value: '#b6a179' },  { value: '#272425' },  { value: '#6389cb' },  { value: '#f2c758' },  { value: '#ffffff' },];

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
      >
        <div className='mb-6'>
          <img src={LogoImg} alt='' />
        </div>
        <h1 className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day</h1>
        <p className='max-w-[300px] text-[#000000] mb-6'></p>
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            Add to Bag
          </button>
          <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
        </div>
        <ul className='flex gap-x-[10px]'>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color.value }}
              className='w-8 h-8 rounded-full cursor-pointer'
            />
          ))}
        </ul>
        <motion.div
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100000,
          }}
          className='absolute top-12 -right-64 w-[620px]'
        >
          <img src={NikeImg} alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
