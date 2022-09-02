import { useState } from "react";
import AnimeList from "./sub-components/AnimeList";
import SearchAnime from "./sub-components/SearchAnime";
import { animeInfo } from "./context/animeInterfaces";
import uniqid from "uniqid";

const AnimeTracer: React.FC = () => {
  const [animeFoundList, setAnimeFoundList] = useState<animeInfo[] | []>([]);
  const [searched, setSearched] = useState<boolean>(false);
  const fetchedAnimeHandler = (data: animeInfo[]) => {
    setAnimeFoundList(data);
    setSearched(true);
  };

  const list = animeFoundList.map((a, i) => {
    return (
      <AnimeList
        index={i}
        episode={a.episode}
        filename={a.filename}
        image={a.image}
        similarity={a.similarity}
        video={a.video}
        key={uniqid()}
      />
    );
  });

  console.log(animeFoundList);
  return (
    <>
      <SearchAnime foundAnimes={fetchedAnimeHandler} />

      <div className='anime-list-maincontainer'>
        {animeFoundList.length === 0 ? (
          <h2 className='no-anime-found'>
            {searched ? "No anime Found 🤔" : "Upload an image above to find that anime😉"}
          </h2>
        ) : (
          <>{list}</>
        )}
      </div>
    </>
  );
};

export default AnimeTracer;
