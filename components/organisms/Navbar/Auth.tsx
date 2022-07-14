import Link from 'next/link'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState({
    avatar: '',
  })
  useEffect(() => {
    const token = Cookie.get('token')
    if (token) {
      const jwtToken = atob(token)
      const payload: JWTPayloadTypes = jwtDecode(jwtToken)
      const userFromPaylaoad: UserTypes = payload.player
      // dibawah ini karena urlnya mengarah ke heroku, jika yang lain maka beda lagi jadi
      // langsung saja dipanggil userFrom payload
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPaylaoad.avatar}`;
      setIsLogin(true)
      setUser(user);
    }
  }, [])

  const onLogout = () => {
    Cookie.remove('token');
    setIsLogin(false)
    router.push('/');
  }

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <Link href="/">
            <a
              className="dropdown-toggle ms-lg-40"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>
          </Link>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/my-wallet">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <button type="button" onClick={onLogout} className="dropdown-item text-lg color-palette-2">Log Out</button>
            </li>
          </ul>
        </div>
      </li>
    )
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  )
}
