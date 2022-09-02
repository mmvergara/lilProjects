interface minifiedAnimeInfo {
  filename:string
  video:string
  image:string
  episode:number
  similarity:number
  index:number
}

const AnimeList: React.FC<minifiedAnimeInfo> = (props:minifiedAnimeInfo ) => {
  return (
    <>
      <div style={{ animationDelay: `${props.index / 10}s` }} className='each-list-container'>
        <div className='vid-container'>
          <video
            width='300'
            height='190'
            controls
            typeof='mp4'
            autoPlay
            muted
            src={props.video}
          ></video>
        </div>
        <div className='matched-data-container'>
          <h5>Anime Name : {props.filename}</h5>
          <h5>Episode : {props.episode}</h5>
          <h5>Similarty : {(props.similarity * 100).toFixed(2)}%</h5>
        </div>
      </div>
    </>
  );
};

export default AnimeList;
