import React, { FC, useEffect, useRef, useState } from 'react';
import { rand } from '../utils/math';
import { ColorCard } from '../Components/ColorCard';
import { useKeypress } from '../hooks/useKeyPress';
import { Link, useHistory } from 'react-navi';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { Hadena } from '../Icons/Hadena';

type Props = {
  query: string
}

const masonry = {
  display: 'grid',
  gridGap: '40px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
  gridAutoRows: '200px'
};

const getColors = async (query: string) => {
  let colors = await fetch(`/api/search?q=${query}&pp=24`).then(res => res.json()).catch(err => err);
  return colors;
};

export const Search: FC<Props> = ({ query }: Props) => {
  const [status, setStatus] = useState<string[]>([]);
  const [sizes, setSizes] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [units, setUnits] = useState<string>('rgb');

  const [colors, setColors] = useState<any[]>(new Array(24).fill(8).map(() => {
    return {
      displayColor: {r: 209, g: 213, b: 219},
      image: null,
      palette: []
    };
  }));

  const [isLoading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>(query);
  const history = useHistory();
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  let errorCount = 0;
  const fetchColors = (query: string): void => {
    setError(false);
    setLoading(true);
    getColors(query).then(res => {
      if(!Object.keys(res).length) {
        setStatus(prev => [...prev, 'Got an empty object ' + res.toString()]);
        if (errorCount < 3) {
          fetchColors(query);
          errorCount++;
          setStatus(prev => [...prev, 'Fetching agian with ' + query + ' ' + errorCount]);
        } else {
          setStatus(prev => [...prev, 'Done trying ' + query + ' ' + errorCount]);
          setError(true);
          setLoading(false);
          return;
        }
      } else {
        setColors(res.colors);
        setLoading(false);
        console.log(res);
        setStatus(prev => [...prev, `Found ${res.colors.length} colors/images!`]);
      }
    }).catch(err => setStatus(prev => [...prev, 'caught an error' + err.toString()]));
  }; 

  const handleInput = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      setLoading(true);
      history.push('/search?query=' + encodeURIComponent(input));
      errorCount = 0;
      fetchColors(input);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  
  useKeypress('k', () => {
    if (inputRef.current) inputRef.current.focus();
  });

  useEffect(() => {
    let sizes = new Array(24).fill(8).map(() => rand(2, 1));
    setSizes(sizes);
    setStatus(prev => [...prev, 'Fetching images/colors based on ' + query]);
    fetchColors(query);
  }, []);

  return (<>
    <div className="hidden absolute bottom-16 right-16 w-96 h-48 bg-blueGray-100 border-[1px] border-blueGray-400 z-50 rounded-lg">
      {status}
    </div>
    <div className={`h-screen w-screen fixed flex items-center justify-center z-50 ${error ? 'scale-100 opacity-100' : 'scale-50 opacity-0 hidden'}`}>
      <div className={`p-12 bg-blueGray-100 w-96 space-y-12 ring-4 ring-blueGray-800 rounded-lg flex flex-col items-center transform transition-all duration-300 ${error ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <p className="text-xl font-black">There was an error!</p>
        <div className="font-semibold leading-9 text-center">
          <p>
            {'This could be becuase your search words couldn\'t find any images.'
            + ' Or possibly there was some sort of error in the machine learning used to calculate the colors.'}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div onClick={() => { errorCount = 0; fetchColors(query);}} className="transform transition-all duration-150 hover:-translate-y-1 hover:shadow-xl shadow-md cursor-pointer rounded-md bg-red-500 text-blueGray-100 p-2 font-semibold">Try Again</div>
          <Link href="/" className="font-semibold text-blue-500 hover:text-blue-700">New Search</Link>
        </div>
      </div>
    </div>
    <div className={`absolute top-0 h-2 bg-blue-500 transition-all ease-in-out duration-150 ${isLoading ? 'animate-load' : ''}`}></div>
    <div className="space-y-12 items-center h-full flex flex-col min-h-screen">
      <Navbar
        input={input}
        inputRef={inputRef}
        units={units}
        setUnits={setUnits}
        handleChangeInput={handleChangeInput}
        handleInput={handleInput} 
      />
      { colors.length ? 
        <div className="w-full px-16 flex-grow" style={masonry}>
          {colors.map((d: any, i: number) => {
            return <ColorCard 
              key={i}
              displayColor={d.displayColor} 
              size={sizes[i]} 
              isLoading={isLoading}
              error={error}
              image={d.image}
              link={d.link}
              setStatus={setStatus}
              units={units}
            />;
          }) }</div>: <div className="flex-grow flex items-center justify-center px-16 flex-col space-y-12">
          <Hadena className="h-[255px] w-[255px]" />
          <p className="text-5xl font-black text-center">{'Oh no! We couldn\'t find any results!'}</p>
        </div>
      }
      <div className="z-20 py-12 px-12 flex justify-between items-center w-full text-sm font-semibold">
        <Footer />
      </div>
    </div>
    <div className={'z-20 relative flex items-center px-16 fixed bottom-24 w-full lg:hidden'}>
      <div className="absolute left-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input value={input} onChange={handleChangeInput} onKeyDown={handleInput} className="apperance-none pl-10 bg-gray-100 dark:bg-blueGray-800 px-4 py-2 text-md rounded-lg w-full focus:outline-none ring-2 ring-blueGray-800 dark:ring-gray-100" />
    </div>
  </>
  );
};