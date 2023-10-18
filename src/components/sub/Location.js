import Layout from '../common/Layout'
import { useEffect, useRef, useReducer } from 'react';
const { kakao } = window;
/*
초기값 설정
밑의 액션으로 변경될 값들이 초기값으로
선언되어야합니다
*/
const intialState = {
  location: null,
  traffic: false,
  index: 0,
  info: [
    {
      title: "우리인재 개발원",
      latlng: new kakao.maps.LatLng(37.4868352, 126.7830001),
      imgSrc: process.env.PUBLIC_URL + "/img/marker1.png",
      imgSize: new kakao.maps.Size(232, 99),
      imgPoz: { offset: new kakao.maps.Point(116, 99) }
    },
    {
      title: "지점1",
      latlng: new kakao.maps.LatLng(37.579617, 126.977041),
      imgSrc: process.env.PUBLIC_URL + "/img/marker2.png",
      imgSize: new kakao.maps.Size(232, 99),
      imgPoz: { offset: new kakao.maps.Point(116, 99) }
    }, {
      title: "지점2",
      latlng: new kakao.maps.LatLng(36.3727807, 127.3536125),
      imgSrc: process.env.PUBLIC_URL + "/img/marker3.png",
      imgSize: new kakao.maps.Size(232, 99),
      imgPoz: { offset: new kakao.maps.Point(116, 99) }
    }
  ]
}
/*
액션으로 지정할 기존의 state
SET_LOCATION  -> map_instance
TOGGLE_TRAFFIC 불린값으로 할 예정
SET_INDEX -> index
*/
//리듀서 함수를 정의합니다
function reducer(state, action) {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state, location: action.loadMap
      };

    case "TOGGLE_TRAFFIC":
      return {
        ...state, traffic: !state.traffic
      };

    case "SET_INDEX":
      return {
        ...state, index: action.idx
      };
    default:
      return state;
    // throw new Error("타입이 달라요 ${action.type}");

  }
}

function Location() {

  const [state, dispatch] = useReducer(reducer, intialState);
  const container = useRef(null);

  //구조분해할당으로 state를 할당합니다
  const { location, traffic, index, info } = state;

  const options = { //지도를 생성할 때 필요한 기본 옵션
    center: info[index].latlng, //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };
  const imgSrc = info[index].imgSrc;
  const imgSize = info[index].imgSize;
  const imgPoz = info[index].imgPoz;
  const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPoz);

  useEffect(() => {
    container.current.innerHTML = "";

    const marker = new kakao.maps.Marker({
      position: options.center,
      image: markerImage,
    })

    const map_instance = new kakao.maps.Map(container.current, options);
    marker.setMap(map_instance);

    // setLocation(map_instance);
    dispatch({ type: "SET_LOCATION", loadMap: map_instance });

    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMLEFT);
    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    //리사이즈시 계속 지도를 가운데 위치하도록 하는 함수를 만듬
    const handleResize = () => {
      map_instance.setCenter(info[index].latlng);
    }
    //리사이즈 이벤트가 일어날때 위의 핸들리사이즈 함수를 호출하도록 합니다
    window.addEventListener("resize", handleResize);

    //클린업 함수로, 언마운트 될때 removeEventListener를 발생해서
    //전역객체인 window에 resize이벤트를 제거해줍니다
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [index, info, kakao.maps.ControlPosition.BOTTOMLEFT, kakao.maps.ControlPosition.LEFT, kakao.maps.Map, kakao.maps.MapTypeControl, kakao.maps.ZoomControl]);

  useEffect(() => {
    if (!location) return;
    traffic ?
      location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) :
      location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }, [traffic]);
  return (
    <Layout name={"Location"}>
      <p>Location</p>
      <div id="map" ref={container}></div>

      <button onClick={() => dispatch({ type: "TOGGLE_TRAFFIC" })}>{traffic ? "트래픽 끔" : "트래픽 킴"}</button>
      {/* <button onClick={() => Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)}>트래픽 온</button>
      <button onClick={() => Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)}>트래픽 오프</button> */}

      <ul className="branch">
        {/* <li onClick={() => setIndex(0)}>{Info[0].title}</li>
        <li onClick={() => setIndex(1)}>{Info[1].title}</li>
        <li onClick={() => setIndex(2)}>{Info[2].title}</li> */}
        {info.map((el, Ind) => {
          return (
            <li key={Ind} className={index === Ind ? "on" : ""} onClick={() => dispatch({ type: "SET_INDEX", idx: Ind })}>{el.title}</li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Location