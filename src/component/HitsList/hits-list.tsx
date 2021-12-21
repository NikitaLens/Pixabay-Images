import React, {EventHandler, useState} from 'react';
import './hits-list.scss';
import { LazyImage } from 'react-lazy-images';
import { Button } from '../Button/button';
import { HitsType } from '../../types';

interface Props {
  hits: HitsType[];
  onLoad: () => void;
  needLoading: boolean;
  isNotFound: boolean;
}

export const HitsList = (props: Props) => {
  const { hits, onLoad, needLoading, isNotFound } = props;

  return (
    <main className="main">
      {hits.length > 0 && (
        <>
          <div className="hits-list">
            {hits.map(hit => <div className="hit-card" key={hit.id}>
              <a href={hit.largeImageURL} target="_blank" >
                <LazyImage
                  src={hit.webformatURL}
                  alt={hit.tags}
                  placeholder={({ imageProps, ref }) => (
                    <img ref={ref} src={hit.previewURL} alt={imageProps.alt} />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
              </a>
              </div>
            )}
          </div>
          {needLoading && <Button label="Load more" onClick={onLoad}/>}
        </>
      )}
      {isNotFound && <span className="not-found">Not found</span>}
    </main>
  );
}
