import { Fragment } from 'react';
import { Outlet ,Link } from 'react-router-dom';
import './Navigation.scss'

const Navivation = ()=>{
    return (
        <Fragment>
            <div className="nav">
                <Link className="link" to='/'>
                    Recipe App
                </Link>
                <Link  to='/Create'>
                    <button className="nav__btn">Create Recipe</button>
                </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navivation;