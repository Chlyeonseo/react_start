import React from 'react';
import Layout from '../common/Layout';
import Pop from '../common/Pop';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
  const line = useRef(null);
  const pop = useRef(null);
  const [Vids, setVids] = useState([]);
  // const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const getYoutube = async () => {
    let key = "AIzaSyBxnZ1kg_BJjZCcQrxHM4iiBdGWtEnUNgE";
    let playlistId = "PLOUTaH0Ih5K8zV_dti0-4B_G39jP84oq2";
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}`;
    axios.get(url).then((json) => {
      setVids(json.data.items);
    })
  }

  useEffect(() => {
    getYoutube();
  }, []);
  return (
    <>
      <Layout name={"Youtube"}>
        <p>Youtube</p>
        {Vids.map((el, idx) => (
          <article key={idx}>
            <h2>
              {el.snippet.title.length > 30 ?
                el.snippet.title.substr(0, 30) + " ..." :
                el.snippet.title}
            </h2>
            <div className="txt">
              <p>{el.snippet.description.substr(0, 200) + "..."}</p>
              <span>{el.snippet.publishedAt.split("T")[0]}</span>
            </div>
            <div className="pic">
              <img src={el.snippet.thumbnails.standard.url} alt={el.snippet.title} />
              <FontAwesomeIcon icon={faYoutube} ref={line}
                onClick={() => { pop.current.open(); setIndex(idx); }
                } />
            </div>
          </article>
        ))}
      </Layout>
      <Pop ref={pop}>
        {Vids.length !== 0 && (
          <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder="0">
          </iframe>
        )}

      </Pop>
    </>
  )
}

export default Youtube

/*
1. 반복문 사용이 어렵다
2. 반복문 이후로 
*/
