import React from "react"
import HamburgerMenu from './HamburgerMenu';
import UserMenu from './UserMenu';

const MainHeader = ({ user_email }) => {
    return (
        <React.Fragment>
            <div className="flex items-center bg-blue-rotary h-16 fixed text-white top-0 w-full">
                <HamburgerMenu />
                <UserMenu user_email={user_email} />
            </div>
        </React.Fragment>
    );
}

export default MainHeader
