import React from 'react'
import Layout from '../common/Layout'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Department() {
  const path = process.env.PUBLIC_URL;
  const [Members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.PUBLIC_URL + "/DB/members.json")
      .then((json) => { setMembers(json.data.members); })
  }, []);


  useEffect(() => {
    console.log(Members);
  }, [Members])
  return (
    <Layout name={"Department"}>
      {Members.map((el, index) => (
        <article key={index}>
          <div className="inner">
            <div className="picFrame">
              <div className="reflect">
                <img src={`${path}/img/${el.pic}`} alt={el.name} />
              </div>
              <div className="pic">
                <img src={`${path}/img/${el.pic}`} alt={el.name} />
              </div>
            </div>

            <h2>{el.name}</h2>
            <p>{el.position}</p>
          </div>
        </article>
      ))}

    </Layout>
  )
}
// jsx문법
//if문을 쓰면안되는이유, 기본for문을 사용하면 안되는이유
//if문경우 if () else /else  그 순서대로 읽지를 못하기 때문에 -> 3항연산자나 &&등의 논리연산자로 조건문을 수행하여야한다
//반복문도 리액트에서는 반복할때 각 반복되는 요소별로 고유 key값이 부여되어야하는데 기본for문은 할수없고, 따라서 map으로 반복문을 사용합니다
export default Department
/*
axios vs fetch

axios 에대한 설명
axios는 설치가 필요하다
보안기능을 제공한다
자동으로JSON데이터변환을 지원합니다
http요청을 기본적으로 제공합니다
다운로드 프로세스를 지원합니다

fetch에 대한 설명
fetch는 설치가 필요없다
보안기능이 없음 
수동으로 JSON데이터 변환을 핸들링해줘야함
http요청을 제공하지않음
다운로드 프로세스도 지원안함


*/






/*
SSR  vs CSR
웹페이지 렌더링 방식에 대한 개념

SPA vs MPA
SPA (Single Page Application)
MPA (Multi Page Application)

웹 애플리케이션의 구조와 페이지 전환 방식에 대한 개념

SPA 는 한개의 html페이지만 가지며, 필요한 콘텐츠는 동적으로 JS를 통해서
로드를 합니다
이후 사용자와의 상호작용에 따라서 페이지를 새로고침없이 동적으로만 업데이트를 합니다
-> react

MPA는 전통적인 웹 애플리케이션 방식입니다
각각의 페이지마다 고유한 URL을 부여합니다, 사용자 요청에 따라서
새로운 페이지를 전달하는 방식입니다


리액트는 CSR의 렌더링 방식으로 SPA의 구조와 페이지 전환 방식으로 구현된
웹어플리케이션을 만드는 도구입니다

SSR을 사용하는 SPA가 있습니다
NEXT.js라는 리액트 기반 SSR지원하는 프레임워크입니다

MPA - CSR덧입히는것 - 블로그 포스팅방식
상품 목록페이지는 전통적인 SSR을 가져오고
하지만 필터링을 하거나 정렬할 때는 동적으로만 하도록 CSR을 덧붙이는 
하이브리드로 사용하기도 합니다





*/
