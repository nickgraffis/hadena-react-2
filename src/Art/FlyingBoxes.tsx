import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { RGB } from '../utils/imagesearch';
import hadena from 'hadenajs';
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
    <div className="z-10 w-full px-48 gap-6 grid grid-cols-4 absolute h-screen top-0 overflow-hidden"> 
      { speeds.length === 8 ? 
        new Array(4).fill(8).map((col, ci) => 
          <div className="col-span-1 space-y-16" key={ci}>
            {
              new Array(2).fill(8).map((box, bi) => 
                <div 
                  key={bi}
                  className={`animate-float-${speeds[ci * bi]}
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