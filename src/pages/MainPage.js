import giphyApi from "../api/GiphyApi";
import {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import ListItems from "../components/ListItems";
import "../assets/css/pages/MainPage.css"

function MainPage() {
    return (
        <>
            <div className={'navbarLayout'}>
                <NavBar/>
            </div>
            <div>
                <ListItems/>
            </div>
        </>
    )
}

export default MainPage