import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList = ['여성','남성','아동'];
    const navigate = useNavigate()
    const goToLogin=()=>{
        authenticate==true?setAuthenticate(false):navigate('/login')
    }
    const goToMain=()=>{
        navigate('/')
    }
    const search=(event)=>{
        if(event.key ==="Enter"){
            let keyword = event.target.value
            console.log('123123123213',keyword)
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            <div class="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>{authenticate==true?"로그아웃":"로그인"}</div>
            </div>
        </div>
        <div class="nav-section" onClick={goToMain}>
            <img width={100} src="data:image/png;base64,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" />
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu=>(
                    <li>{menu}</li>
                ))}
            </ul>
        </div>
        <div className="search-area">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(event)=>search(event)}></input>
        </div>
    </div>
  )
}

export default Navbar