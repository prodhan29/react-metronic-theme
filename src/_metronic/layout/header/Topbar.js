import React from "react";
import UserNotifications from "../../../app/partials/layout/UserNotifications";
import UserProfile from "../../../app/partials/layout/UserProfile";
import { toAbsoluteUrl } from "../../utils/utils"

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="kt-header__topbar">
        <UserNotifications
          bgImage={toAbsoluteUrl("/media/misc/bg-1.jpg")}
          pulse="true"
          pulseLight="false"
          skin="dark"
          iconType=""
          type="success"
          useSVG="true"
          dot="false"
        />
        <UserProfile showAvatar={true} showHi={true} showBadge={false} />
      </div>
    );
  }
}
