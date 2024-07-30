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
    const [sucess, setSuccess] = useState(false)
  return (
    <div>Register</div>
  )
}

export default Register