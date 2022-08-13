import React,{useState} from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {search} from '../../features/search';


const Header = () => {
    const searchResult=useSelector(state=>state.search);
    console.log(searchResult)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [searchActive,setSearchActive]=useState(false);
    const [inputSearch, setInputSearch] = useState('')
    const handleSearch=(e)=>{
        dispatch(search(e.target.value))
        setInputSearch(e.target.value)
    }

    return (
        <div className='header'>
            <div className="header__icons" onClick={()=>{navigate('/')}}>
                <div className="header__icon
                header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
            </div>
            <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
            </div>
            <div className="header__icon">
                <LiveTvIcon/>
                <p>Verified</p>
            </div>
            <div className="header__icon">
                <VideoLibraryIcon/>
                <p>Collections</p>
            </div>
            <div className="header__icon" onClick={()=>{setSearchActive(!searchActive)}}>
                <SearchIcon/>
                <p>Search</p>
            </div>
            {/*<div className="header__icon">*/}
            {/*    <PersonOutlineIcon/>*/}
            {/*    <p>Account</p>*/}
            {/*</div>*/}
            {searchActive && <input placeholder="Search..." value={inputSearch} className="sb__input" onChange={handleSearch} />}

            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt=""/>
        </div>
    );
};

export default Header;