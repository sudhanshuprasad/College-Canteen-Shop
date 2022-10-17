import style from "../style/Navbar.module.css";
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreaters } from "../reduxState/index";
// import urlContext from "../context/api_url/urlContext";
import Axios from 'axios';


export default function Navbar() {

    const dispatch = useDispatch();
    // const host = useContext(urlContext);
    const login = useSelector(state => state.login);
    const theme = useSelector(state => state.theme);


    if(theme) {
        document.body.classList.add('background-dark');
    }
    else{
        document.body.classList.remove('background-dark');
    }
    console.log(theme)

    // // const [login, SetLogin] = useState([Boolean(localStorage.getItem('authToken'))]);
    // // let navigate=useNavigate();
    // const handleLogout = () => {
    //     // SetLogin(false)
    //     dispatch(actionCreaters.setLogin(false))
    //     localStorage.removeItem("authToken");
    //     // navigate('/');
    // }

    // useEffect(() => {
    //     localStorage.getItem('authToken') && dispatch(actionCreaters.setLogin(true));

    //     if(!localStorage.getItem('authToken')) return

    //     let url = `${host}/api/cart/getCart`;

    //     // if(true||localStorage.getItem('authToken')!==null){
    //     if (localStorage.getItem('authToken') !== null) {
            
    //         // async function fetchUser() {
    //         // const axres = await Axios.get(url, {withCredentials:true}).catch((err) => {console.log(err)})
    //         // console.log(axres)
    //         // }
    //         // fetchUser();

    //         // // same request but with fetch
    //         fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': '*/*',
    //                 'authToken': localStorage.getItem('authToken')
    //             },
    //             // credentials: 'include'
    //         })
    //             .then(response => {
    //                 // console.log(response)
    //                 return response.json()
    //             })
    //             .then(data => {
    //                 if(Object.keys(data).length===0) return

    //                 // console.log(Object.keys(data).length);
    //                 // console.log(data[0].items);
    //                 dispatch(actionCreaters.setCart(data[0].items));
    //                 dispatch(actionCreaters.setCartPrice(data.cartPrice));
    //                 // console.log(data.cartPrice)

    //                 let cartSize = 0
    //                 data[0].items.map((element) => {
    //                     cartSize += element.quantity;
    //                     return 0
    //                 })

    //                 dispatch(actionCreaters.setCartSize(cartSize));
    //             })
    //             .catch((error) => {
    //                 console.log("some error occured while fetching GET request", error)
    //             });
    //     }

    // }, [])

    return (
        <>
            <div className={style.sticky_nav}>
                <div className={style.navbar}>
                <Link style={{textDecoration: 'none'}} to="/home">
                    <ul className={style.nav_ul} id={style.left}>
                        <li><h2 id={style.fc}>FC</h2></li>
                        <li><img id={style.fclogo} src='https://img.icons8.com/color-glass/90/000000/bread-and-rolling-pin.png' alt='fc logo' /></li>
                    </ul>
                    </Link>
                    {/* {login ? <ul className='nav-ul search-area' id="search-area">
                        <li><input placeholder='Search' type='text' name='search-text' id="search-bar" /></li>
                        <li><img src='https://img.icons8.com/ios-filled/25/000000/search--v1.png' alt='search' id="search-icon" /></li>
                    </ul> : null} */}
                    <ul className={style.nav_ul} id={style.right}>
                        <li onClick={() => {
                            dispatch(actionCreaters.setThemeDark(!theme));
                        }}>
                            <div className={style.theme}>
                                <img alt='toggle theme'
                                    src="https://img.icons8.com/fluency-systems-regular/48/000000/brightness-settings.png"/>
                            </div>
                        </li>
                        {!login ? <li onClick={() => {
                            // SetLogin(true);
                            // dispatch(actionCreaters.setLogin(!login))
                        }}><Link to="/login"><p id={style.login}>Login</p></Link></li>
                            : null /* <li onClick={handleLogout}><p id='login'>Logout</p></li> */}
                        {login ? <>
                            <li>
                                <Link to="/profile">
                                    <img src="https://img.icons8.com/windows/32/000000/user-male-circle.png" alt="profile" id={style.profile} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/inventory">
                                    <img alt="inventory" id={style.cart} src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/32/000000/external-inventory-logistic-delivery-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"/>
                                </Link>
                                <span className={style.cartSize}>{5}</span>
                            </li>
                        </> : null}
                    </ul>
                </div>
            </div>
        </>
    );
}