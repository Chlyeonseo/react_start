import { combineReducers } from "redux";
const initMember = {
    "members": [
        {
            name: "Julia",
            position: "President",
            pic: "member1.jpg"
        },
        {
            name: "David",
            position: "Vice President",
            pic: "member2.jpg"
        },
        {
            name: "Emily",
            position: "UI Designer",
            pic: "member3.jpg"
        },
        {
            name: "Paul",
            position: "Front-end Engineer",
            pic: "member4.jpg"
        },
        {
            name: "Sara",
            position: "Back-end Engineer",
            pic: "member5.jpg"
        },
        {
            name: "Michael",
            position: "Project Manager",
            pic: "member6.jpg"
        }
    ]
}

//초기데이터를 state에 저장했다가 추후 action 객체가 전달되면
//액션의 타입에 따라서 기존의 데이터(state)를 변경해서 리턴하는 함수
//디폴트 파라미터
const memberReducer = (state = initMember, action) => {
    switch (action.type) {
        case "SET_MEMBERS":
            return { ...state, members: action.payload };
        default:
            return state;
    }
    //상태값이 변화가 없습니다
    //왜냐하면 member를 추가하는 것이 아니라, state값을 가지고 와서 사용하는 목적이라서 
    //지금 예제에서는 상태값의 변화는 없습니다.
}
const reducers = combineReducers({ memberReducer })

export default reducers