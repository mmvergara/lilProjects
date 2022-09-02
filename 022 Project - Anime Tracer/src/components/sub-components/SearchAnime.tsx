import axios from "axios";
import { useState } from "react";
import { animeInfo } from "../context/animeInterfaces";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SearchAnimeProps {
  foundAnimes: (data: animeInfo[]) => void;
}

const SearchAnime: React.FC<SearchAnimeProps> = (props: SearchAnimeProps) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [imgUploadedToWeb, setImgUplaodedToWeb] = useState<string>("X");
  const [fetchedMatched, setfetchedMatched] = useState<string>("X");

  const fileSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) return;

    // Upload to Server
    setfetchedMatched("X");
    setImgUplaodedToWeb("L");
    let formData = new FormData();
    formData.append("image", selectedImage);

    const uploadImg = await axios.post(
      "https://api.imgbb.com/1/upload?key=47f97e3cdbc68c81f1f141c8042eb2e4",
      formData
    );
    const imgURL = uploadImg.data.data.image.url;

    // Finding Matches
    setImgUplaodedToWeb("D");
    setfetchedMatched("L");
    const animeData = await axios.get(`https://api.trace.moe/search?url=${imgURL}`);
    props.foundAnimes(animeData.data.result);
    setfetchedMatched("D");
  };

  return (
    <div className='search-anime-container'>
      <div className='image-input'>
        <form onSubmit={fileSubmitHandler}>
          {!selectedImage && <p>Upload the anime image file to search</p>}
          <Form.Group controlId='formFileMultiple' className='mb-3'>
            <Form.Control
              onChange={(e: any) => {
                setSelectedImage(e.target.files![0]);
                setfetchedMatched("X");
                setImgUplaodedToWeb("X");
              }}
              accept='image/png, img/jpg, img/jpeg'
              type='file'
            />
          </Form.Group>
          {selectedImage && (
            <>
              <img
                src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
                className='anime-image-preview'
                alt='n/a'
                width={200}
              />
              <Button type='submit' variant='info'>
                Search this Anime!
              </Button>
            </>
          )}
        </form>
      </div>

      <div className='status-upload'>
        <p>Image Uploaded {selectedImage ? "✔️" : "❌"}</p>
        <p>
          Uploading to Server
          {imgUploadedToWeb === "X" ? "❌" : imgUploadedToWeb === "L" ? LoadingCrown() : "✔️"}
        </p>
        <p>
          Finding Anime Matches
          {fetchedMatched === "X" ? "❌" : fetchedMatched === "L" ? LoadingCrown() : "✔️"}
        </p>
      </div>
    </div>
  );
};

export default SearchAnime;

function LoadingCrown() {
  return <img src='assets/loading.png' width={33} alt={"Loading"} className='loading-crown' />;
}
