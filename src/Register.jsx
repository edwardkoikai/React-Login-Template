import React from 'react'
import {useRef, useState, useEffect} from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//The username must start with a letter (either uppercase or lowercase).
//the username can have 3 to 23 characters which can be letters (uppercase or lowercase), digits, hyphens, or underscores.
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

//The password must contain
//  at least one lowercase letter.
//  at least one uppercase letter
//  at least one digit.
//  at least one special character from the set !@#$%
//  must be between 8 and 24 characters long.
                               
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    const userRef = useRef(null)
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] =useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] =useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] =useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    //set focus when the component loads
    useEffect(()=>{
        userRef.current.focus()
    }, [])

    //validate username
    useEffect(()=>{
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)

    }, [user])
    //validate password
    useEffect(()=>{
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    },[pwd, matchPwd])
   // error message
   useEffect(()=>{
    setErrMsg('')
   }, [user, pwd, matchPwd])
    
  return (
    <section>
        <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username:
                <span className={validName? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validName || !user ? "hide": "invalid"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                

            </label>
            <input 
            type='text'
            id= "username"
            ref={userRef}
            autoComplete='off'
            onChange={(e)=> setUser(e.target.value)}
            required
            aria-invalid = {validName ? "false" : "true"}
            aria-describedby='uidnote'
            onFocus={()=> setUserFocus(true)}
            onBlur={()=> setUserFocus(false)}
            />
            <p id='uidnote' className= {userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon  icon={faInfoCircle}/>
                4 to 24 characters.<br/>
                Must begin with a letter.<br/>
                Letters, number, underscores, hyphens allowed
            </p>
        </form>
    </section>
  )
}

export default Register