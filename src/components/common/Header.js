import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
//props는 상위 파일에서 하위 파일로
//전해지는 모든것을 받는 매개변수
//
export default function Header({ type }) {
    const active = { color: "#000" };
    let logoURL = "";
    // (조건) ? 참인경우 : 거짓인경우;
    type === "main" ? (logoURL = "./img/logo_w.png") : (logoURL = "./img/logo_b.png");
    //메인일경우 어떤 url들어가고
    //서브일경우에는 어떤 url이 들어가는지를 
    //3항연산자로 사용해서 구분할예정
    //3항연산자로 type의 값이 main인지를 물어봅니다
    //참이면 logoURL에 ./img/logo_w.png
    //거짓이면 logoURL에 ./img/logo_b.png를 넣도록 

    return (
        <header className={type}>
            <h1>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + logoURL} alt="LOGO" />
                </Link>
                <span>Here comse logo is</span>
            </h1>
            <nav>
                <ul id="gnb">
                    <li>
                        <NavLink to="/department" activeStyle={active}>
                            Department
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/community" activeStyle={active}>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeStyle={active}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/youtube" activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/location" activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/members" activeStyle={active}>
                            Members
                        </NavLink>
                    </li>
                </ul>
            </nav>


            <FontAwesomeIcon icon={faBars} />
        </header>
    )
}

