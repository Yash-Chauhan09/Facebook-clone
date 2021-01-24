import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcons from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcons from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon  from '@material-ui/icons/Forum';
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" alt="facebook logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    < SubscriptionsOutlinedIcons fontSize="large" />
                </div>

                <div className="header__option">
                    < StorefrontOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    < SupervisedUserCircleIcons fontSize="large" />
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                < Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
                < IconButton >
                <AddIcon />
                </IconButton>

                < IconButton >
                <ForumIcon />
                </IconButton>

                < IconButton >
                <NotificationsActiveIcon />
                </IconButton>

                < IconButton >
                <ExpandMoreIcon />
                </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Header;
