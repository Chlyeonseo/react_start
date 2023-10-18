import { createStore } from "redux";
import reducers from "./reducer";
//스토어 공간을 createStore로 생성한 다음 전달된 reducers를 받아서 저장하고 내보내는 작업이 필요합니다

const store = createStore(reducers);
export default store