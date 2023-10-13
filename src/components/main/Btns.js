import { useRef, useEffect } from "react";
function Btns() {
    //가상돔 main요소를 담을 빈 참조 객체를 생성
    const btnRef = useRef(null);
    //섹션별 세로 위치값을 담을 빈배열로 참조 객체를 생성
    const pos = useRef([]);
    const getPos = () => {
        pos.current = []; //다시 호출되었을때 기존의 배열을 리셋하기 위해서 
        const sections = btnRef.current.parentElement.querySelectorAll(".myScroll");
        //1 기본for문으로 반복돌기
        for (const el of sections) pos.current.push(el.offsetTop);
        //2 배열로 변환한다음 map을 이용해서 반복돌기 

    }
    //버튼, 박스활성화 함수
    const activation = () => {
        const btns = btnRef.current.children;
        const sections = btnRef.current.parentElement.querySelectorAll(".myScroll");
        const scroll = window.scrollY;
        const base = -window.innerHeight / 3;

        pos.current.map((el, index) => {
            if (scroll >= el + base) {
                for (const btn of btns) btn.classList.remove("on");
                for (const section of sections) section.classList.remove("on");
                btns[index].classList.add("on");
                sections[index].classList.add("on");
            }
        })

    }

    useEffect(() => {
        //세로 위치값을 초기화하는 작업
        getPos();
        //브라우저가 리사이즈 될때도 
        window.addEventListener("resize", getPos);
        /*브라우저 리사이즈될때 요소의 탈락/추가로 인해서
        세로 위치값이 변화가 있을 수 있기 때문이다 */
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getPos);
            window.removeEventListener("scroll", activation);
            /*window객체는 최상의 전역 객체이기 때문에
            윈도우 객체에 이벤트를 연결할 때 해당 이벤트가 다른 컴포넌트에 영향을 미칩니다
            다른 컴포넌트에도 실행되는게 아니라면 해당 컴포넌트(btns.js)가 언마운트될때
            클린업 함수로 이벤트 연결을 제거해야합니다 
            */
        }
    }, []); //컴포넌트가 처음 마운트 될때 작업
    return (
        <ul className="scroll_navi" ref={btnRef}>
            <li className="on"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default Btns