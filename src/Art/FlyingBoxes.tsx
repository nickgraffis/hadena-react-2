import React, { useEffect, useState, FC } from 'react';
import { rand } from '../utils/math';

type Props = {
  colors: string[]
}

export const FlyingBoxes: FC<Props> = ({ colors }: Props) => {

  const [sizes, setSizes] = useState<any[]>([]);
  const [speeds, setSpeeds] = useState<any[]>([]);

  useEffect(() => {
    let options = ['h-48', 'h-36', 'h-60'];
    let sizes = new Array(8).fill(8).map(() => options[rand(3)]);
    setSizes(sizes);
    let speeds = new Array(8).fill(8).map(() => rand(4));
    setSpeeds(speeds);
  }, []);

  return (
    <div className="z-10 w-full lg:px-48 px-12 gap-6 grid grid-cols-4 absolute h-screen top-0 overflow-hidden"> 
      { speeds.length === 8 ? 
        new Array(4).fill(8).map((col, ci) => 
          <div className={`col-span-4 md:col-span-2 lg:col-span-1 space-y-16 
          ${ci % 2 != 0 ? 'md:inline-block hidden' : 'inline-flex'}`} key={ci}>
            {
              new Array(2).fill(8).map((box, bi) => 
                <div 
                  key={bi}
                  className={`animate-float-${speeds[ci * bi]}
                  ${bi % 2 != 0 ? 'md:inline-block hidden' : 'inline-flex'}
                  rounded-lg ${sizes[ci * bi]} w-full`}
                  style={
                    {
                      backgroundColor: colors[ci * bi]
                    }
                  }
                >
                </div>
              )
            }
          </div>
        ) : ''
      }
    </div>
  );
};