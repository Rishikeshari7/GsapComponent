
'use client';

import React, { ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from './config/cn';

interface CustomTextProps {
  children: ReactNode;
  duration?: number;
  translateY?: number;
  staggerEach?: number;
  staggerFrom?: 'start' | 'center' | 'end';
  axis?: 'x' | 'y';
  rotation?: number;
  opacity?: number;
  containerClass?: string;
  textClass?: string;
  letterClass?: string;
}

const CustomTextEffect: React.FC<CustomTextProps> = ({
  children,
  duration = 1,
  rotation = 0,
  opacity = 1,
  translateY = 0,
  staggerEach = 0.02,
  staggerFrom = 'start',
  axis = 'x',
  containerClass,
  textClass,
  letterClass
}) => {
  useEffect(() => {
    gsap.to('.letter', {
      duration,
      rotation,
      opacity,
      translateY: translateY,
      stagger: {
        each: staggerEach,
        from: staggerFrom,
        axis: axis,
      },
    });
  }, [duration, rotation, opacity, translateY, staggerEach, staggerFrom, axis]);

  const words = typeof children === 'string' ? children.split(' ') : [];

  return (
    <div className="flex w-full">
      <div className={cn("flex flex-col space-y-10 mx-auto my-auto w-[80vw]", containerClass)}>
        {words.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className={`overflow-hidden inline-block ${wordIndex % 2 === 0 ? 'self-start' : 'self-end'
              }`}
          >
            <div className={cn(`text-9xl font-medium font-grotesk`, textClass)}>
              {word.split('').map((letter, letterIndex) => (
                <p key={letterIndex} className={cn("letter", letterClass)}>
                  {letter}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTextEffect;






























// 'use client'
// import React, { ReactNode, useEffect } from 'react'
// import gsap from 'gsap'

// interface prop {
//     children: ReactNode
// }

// const Four: React.FC<prop> = ({ children }) => {
//     useEffect(() => {
//         gsap.to(".letter", {
//             duration: 1,
//             rotation: 0,
//             opacity: 1,
//             translateY:0,
//             stagger: {
//                 each: 0.02,
//                 from: "start",
//                 axis: "x"
//             }
//         });
//     }, []);

//     const words = typeof children === "string" ? children.split(' ') : [];

//     return (
//         <div className='flex w-full'>
//             <div className='flex flex-col space-y-10 mx-auto my-auto w-[80vw]'>
//                 {words.map((word, wordIndex) => (
//                     <div key={wordIndex} className={`overflow-hidden inline-block ${wordIndex % 2 === 0 ? 'self-start' : 'self-end'}`}>
//                         <div className="text-9xl font-medium font-grotesk">
//                             {word.split('').map((letter, letterIndex) => (
//                                 <p
//                                     key={letterIndex}
//                                     className="letter"
//                                 >
//                                     {letter}
//                                 </p>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Four;