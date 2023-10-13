import { useEffect, useRef } from "react";
function Layout({ children, name }) {

    const frame = useRef(null);
    // document.queryselector("null");
    // console.log(frame); //current : null

    //useEffect를 사용해서
    //컴포넌트가 마운트 될때 한번만 frame에 on을 붙여줍니다
    useEffect(() => {
        frame.current.classList.add("on");
    }, []);


    return (
        <section className={`content ${name}`} ref={frame}>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/img/${name}.jpg`} alt={name} />
                <h1>{name}</h1>
            </figure>
            <div className="inner">
                {children}
            </div>
        </section>
    )
}

export default Layout