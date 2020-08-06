import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='129' cy='116' r='115' />
      <rect x='-1' y='252' rx='3' ry='3' width='280' height='26' />
      <rect x='0' y='291' rx='6' ry='6' width='280' height='84' />
      <rect x='13' y='390' rx='0' ry='0' width='93' height='24' />
      <rect x='159' y='387' rx='20' ry='20' width='106' height='31' />
    </ContentLoader>
  );
}

export default LoadingBlock;
