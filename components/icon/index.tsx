import React from 'react';
import {joinClass} from '../helper';
import './index.scss';
// import './importIcons'
// import './icons/tiger.svg';
import './importIcons';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({name, className, ...reset}) => {
  return (
    <svg className={joinClass('ice-icon', className)} {...reset}>
      {/*【 # + id（文明名）】显示svg */}
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
