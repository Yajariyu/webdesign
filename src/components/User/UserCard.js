import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser, editUser } from "../../actions/userActions";
import { checkErrorForm } from "../../helpers/utils";

function UserCard({ disable }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userEdit, loading, error } = useSelector((state) => state.users);
  const [user, setUser] = useState(userEdit);
  const [errorForm, setErrorForm] = useState({});

  useEffect(() => {
    let mounted = true;
    const getOneUser = async () => await dispatch(getUser(id));
    if (mounted) {
      getOneUser();
      setUser(userEdit);
    }
    return () => {
      mounted = false;
    };
  }, [userEdit.id, dispatch, id]);

  const { name, username, email, phone, website, address, company } = user;

  const handleInput = (e) => {
    setErrorForm({});
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddress = (e) => {
    setErrorForm({});
    setUser({
      ...user,
      address: {
        ...user.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleGeo = (e) => {
    setErrorForm({});
    setUser({
      ...user,
      address: {
        ...user.address,
        geo: {
          ...user.address.geo,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const handleCompany = (e) => {
    setErrorForm({});
    setUser({
      ...user,
      company: {
        ...user.company,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [check, error] = checkErrorForm(user);
    if (!check) {
      setErrorForm(error);
    } else {
      dispatch(editUser(user));
    }
  };

  if (error) return <div>Ocurrio un error</div>;
  return Object.keys(user).length === 0 ? (
    <div>No hay usuario</div>
  ) : (
    <div className="user">
      <fieldset disabled={disable}>
        <form onSubmit={handleSubmit}>
          <div className="user_info">
            <div className="user_info_avatar">
              <div className="user_avatar">
                <img
                  src="https://avatars.dicebear.com/v2/male/:seed.svg"
                  alt="avatar"
                />
              </div>
            </div>

            <div className="user_personal">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInput}
                  required
                />
                <span>{errorForm?.name ? "Coloca un Nombre valido" : ""}</span>
              </div>

              <div className="form-control">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInput}
                  required
                />
                <span>
                  {errorForm?.username ? "Coloca un Username valido" : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  required
                />
                <span>{errorForm?.email ? "Coloca un Email valido" : ""}</span>
              </div>
            </div>
          </div>

          <div className="user_extrainfor">
            <div className="address">
              <h4>Address</h4>

              <div className="form-control">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleAddress}
                  required
                />
                <span>
                  {errorForm?.address?.street ? "Coloca un Stree valido" : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="suite">suite</label>
                <input
                  type="text"
                  name="suite"
                  value={address.suite}
                  onChange={handleAddress}
                  required
                />
                <span>
                  {errorForm?.address?.suite ? "Coloca un Sutie valido" : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="city">city</label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddress}
                  required
                />
                <span>
                  {errorForm?.address?.city ? "Coloca un City valido" : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="zipcode">zip</label>
                <input
                  type="text"
                  name="zipcode"
                  value={address.zipcode}
                  onChange={handleAddress}
                  required
                />
                <span>
                  {errorForm?.address?.zipcode
                    ? "Coloca un Zipcode valido"
                    : ""}
                </span>
              </div>

              <div className="form-control lal">
                <label htmlFor="lat">Latitud</label>
                <input
                  type="text"
                  name="lat"
                  value={address.geo.lat}
                  onChange={handleGeo}
                  required
                />
                <span>
                  {errorForm?.address?.geo?.lat
                    ? "Coloca una Latitud valida"
                    : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="lng">Longitud</label>
                <input
                  type="text"
                  name="lng"
                  value={address.geo.lng}
                  onChange={handleGeo}
                  required
                />
                <span>
                  {errorForm?.address?.geo?.lng
                    ? "Coloca una Longitud valida"
                    : ""}
                </span>
              </div>
            </div>
            <div className="company">
              <h4>Company</h4>
              <div className="form-control company_name">
                <label htmlFor="name">Company Name</label>
                <input
                  type="text"
                  name="name"
                  value={company.name}
                  onChange={handleCompany}
                  required
                />
                <span>
                  {errorForm?.company?.name
                    ? "Coloca un Company Name valido"
                    : ""}
                </span>
              </div>

              <div className="form-control">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  name="webiste"
                  value={website}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleInput}
                  required
                />
                <span>
                  {errorForm?.phone ? "Coloca un Telefono  valido" : ""}
                </span>
              </div>

              <div className="form-control company_description">
                <label htmlFor="bs">Description</label>
                <textarea
                  name="bs"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={handleCompany}
                  value={company.bs}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {!disable && (
            <div className="submit">
              <button class="button" type="submit">
                Enviar
              </button>
            </div>
          )}
        </form>
      </fieldset>
    </div>
  );
}

export default UserCard;
