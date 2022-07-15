import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPaylaoad: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPaylaoad.avatar = `${IMG}/${userFromPaylaoad.avatar}`;
      setUser(userFromPaylaoad);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        alt="Avatar"
        src={user.avatar ?? '/img/avatar-1.png'}
        className="img-fluid mb-20 img-profile"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
