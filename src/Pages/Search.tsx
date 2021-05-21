import React, { FC, useRef, useState, useEffect } from 'react';
import { ColorCard } from '../Components/ColorCard';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { ErrorModal } from '../Components/Error';
import { fetchImages } from '../utils/fetchImages';
import { useHistory } from 'react-navi';
import { useKeypress } from '../hooks/useKeyPress';
import { Image, Unit } from '../hadena';
import { LoadingIndicator } from '../Components/LoadingIndicator';
import { EmptyState } from '../Components/EmptyState';
import { MobileSearch } from '../Components/MobileSearch';

type Props = {
  query: string
}

const masonry = {
  display: 'grid',
  gridGap: '40px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
  gridAutoRows: '200px'
};

export const Search: FC<Props> = ({ query }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Image[]>(new Array(12).fill(8).map(() => { return {}; }));
  const [input, setInput] = useState<string>(query);
  const [units, setUnits] = useState<Unit>('rgb');

  const history = useHistory();

  const getImages = (q: string): void => {
    setError(false);
    setLoading(true);
    fetchImages(q)
      .then(res => {
        setImages(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        if (errorCount < 2) {
          setErrorCount(prev => prev + 1);
          getImages(q);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleInput = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      history.push('/search?query=' + encodeURIComponent(input));
      setErrorCount(0);
      getImages(input);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  
  useKeypress('k', () => {
    if (inputRef.current) inputRef.current.focus();
  });

  useEffect(() => {
    setErrorCount(0);
    getImages(query);
  }, []);

  return (<>
    <div 
      className={`h-screen w-screen fixed flex items-center justify-center z-50 
      ${error ? 'scale-100 opacity-100' : 'scale-50 opacity-0 hidden'}`}
    >
      <ErrorModal 
        error={error}
        setError={setError}
        errorCount={errorCount}
        setErrorCount={setErrorCount}
        query={query}
        getImages={getImages}
      />
    </div>
    <LoadingIndicator loading={isLoading} />
    <div className="space-y-12 items-center h-full flex flex-col min-h-screen">
      <Navbar
        input={input}
        inputRef={inputRef}
        units={units}
        setUnits={setUnits}
        handleChangeInput={handleChangeInput}
        handleInput={handleInput} 
      />
      { images.length ? 
        <div className="w-full px-16 flex-grow" style={masonry}>
          {images.map((image: Image, i: number) => {
            return <ColorCard 
              key={i}
              image={image}
              units={units}
            />;
          }) }</div>: <EmptyState />
      }
      <div className="z-20 py-12 px-12 flex justify-between items-center w-full text-sm font-semibold">
        <Footer />
      </div>
    </div>
    <MobileSearch 
      input={input}
      handleInput={handleInput}
      handleChangeInput={handleChangeInput}
    />
  </>
  );
};