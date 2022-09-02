import { GifImageModel } from '../../../../models/image/gifImage';

import ResultTitle from '../ResultTitle/ResultTitle';
import GifItem from '../GifItem/GifItem';

import { SearchStatus, SEARCH_STATUS } from '../../hooks/useGifSearch';

import styles from './SearchResult.module.css';

type SearchResultProps = {
  status: SearchStatus;
  gifList: GifImageModel[];
  onLoadMore: () => void;
};

const SearchResult = ({ status, gifList, onLoadMore }: SearchResultProps) => {
  return (
    <section className={styles.searchResultSection}>
      <ResultTitle status={status} />
      {(status === SEARCH_STATUS.FOUND || status === SEARCH_STATUS.BEFORE_SEARCH) && (
        <div className={styles.gifResultWrapper}>
          {gifList.map((gif: GifImageModel) => (
            <GifItem key={gif.id} id={gif.id} imageUrl={gif.imageUrl} title={gif.title} />
          ))}
        </div>
      )}
      {status === SEARCH_STATUS.FOUND && (
        <button className={styles.loadMoreButton} onClick={onLoadMore}>
          load more
        </button>
      )}
    </section>
  );
};

export default SearchResult;
