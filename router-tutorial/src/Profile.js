import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  velopert: {
    name: "김민준",
    description: "Frontend Engineer @RIDI",
  },
  GGammung2: {
    name: "박정륭",
    description: "Junior Frontend Engineer",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;
