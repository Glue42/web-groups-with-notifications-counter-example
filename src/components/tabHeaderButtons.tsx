import { CloseButton, getGroupId, MaximizeButton, MinimizeButton, RestoreButton, TabHeaderButtonsProps, useGDWindow, useGroupComponentVisibility } from "@glue42/groups-ui-react";
import { useNotificationsContext } from "@glue42/notifications-ui-react";
import { FunctionComponent } from "react";
import { useWebGroupWindows } from "../hooks/useWebGroupWindows";
import { getNotificationCount } from "../notificationUtils";
import { Banner } from "./banner";

export const CustomTabHeaderButtons: FunctionComponent<TabHeaderButtonsProps> = ({ ...rest }) => {
  const visibilityState = useGroupComponentVisibility();
  const notificationsContext = useNotificationsContext();
  useWebGroupWindows(getGroupId());
  const gdSelectedWindow = useGDWindow(rest.selectedWindow);
  const tabGroupWindows = gdSelectedWindow?.tabs ?? [];
  let notificationsCount = getNotificationCount(tabGroupWindows, notificationsContext);
  const bannerVisible = !visibilityState.groupCaptionBarVisible && notificationsCount > 0;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <Banner visible={bannerVisible}>{notificationsCount}</Banner>
      <MinimizeButton tooltip='minimize' visible={true} onClick={() => rest.minimize?.onClick()} />
      {rest.maximize?.visible && <MaximizeButton {...rest.maximize} />}
      {rest.restore?.visible && <RestoreButton {...rest.restore} />}
      <CloseButton tooltip='close' visible={true} onClick={() => rest.close?.onClick()} />
    </div>
  );
};