import {useSelector, useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {fetchTrendingGifList, fetchSearchGifList, resetListItem} from "../redux/feature/getListItem";

function HeaderBar() {
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setSearchString(e.target.value);
    }

    const handleSubmitButton = (e) => {

    }

    const handleSendingButton = () => {
        dispatch(resetListItem())
    }
}

export default HeaderBar;