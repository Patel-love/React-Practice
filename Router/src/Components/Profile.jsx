import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container p-5 text-bg-danger ">
        <div className="row">
          <div className="col row">
            {profiles.map((profile) => (
              <NavLink
                key={profile}
                to={`/profile/${profile}`}
                className={(e) => (e.isActive ? "blue" : "")}
              >
                Profile : {profile}
              </NavLink>
              // console.log(profile)
            ))}
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
