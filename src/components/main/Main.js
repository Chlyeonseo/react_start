import Header from "../common/Header"
import News from "./News";
import Vids from "./Vids";
import Btns from "./Btns";
import Content from "./Content";
import Visual from "./Visual";

function Main() {

    return (
        <main>
            <Header type={"main"} />
            <Visual />
            <News />
            <Content />
            <Vids />
            <Btns />
        </main>
    )
}

export default Main