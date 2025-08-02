/* 
* Router [Outlet, Link] 
*
*/

import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    const navStyle = {
        margin : '20px'
    }

    return (
    <>
    <nav style={navStyle}>
        <Link to="/"> 메인 </Link>
        <Link to="/view-profile"> 프로필 </Link>    
    </nav>
    <Outlet/>
    </>
    )
}

export default Layout;