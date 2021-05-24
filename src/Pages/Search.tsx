import React, { FC, useRef, useState, useEffect, Suspense, lazy } from 'react';
import { fetchImages } from '../utils/fetchImages';
import { useHistory } from 'react-navi';
import { useKeypress } from '../hooks/useKeyPress';
import { Image, Unit } from '../hadena';
import { LoadingIndicator } from '../Components/LoadingIndicator';
import { EmptyState } from '../Components/EmptyState';
import { MobileSearch } from '../Components/MobileSearch';
const ColorCard = lazy(() => import('../Components/ColorCard'));
const ErrorModal = lazy(() => import('../Components/Error'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import('../Components/Footer'));

type Props = {
  query: string
}

const masonry = {
  display: 'grid',
  gridGap: '40px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
  gridAutoRows: '200px'
};

const Search: FC<Props> = ({ query }: Props) => {
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
    <Suspense fallback={null}>
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
    </Suspense>
    <LoadingIndicator loading={isLoading} />
    <div className="space-y-12 items-center h-full flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <Navbar
          input={input}
          inputRef={inputRef}
          units={units}
          setUnits={setUnits}
          handleChangeInput={handleChangeInput}
          handleInput={handleInput} 
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        { images.length ? 
          <div className="w-full lg:px-16 px-4 flex-grow" style={masonry}>
            {images.map((image: Image, i: number) => {
              return <ColorCard 
                key={i}
                image={image}
                units={units}
              />;
            }) }</div>: <EmptyState />
        }
      </Suspense>
      <div className="z-20 lg:py-12 py-4 lg:px-12 px-4 flex justify-between items-center w-full text-sm font-semibold">
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

export default Search;