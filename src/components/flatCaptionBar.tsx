import { CloseButton, FlatCaption, FlatCaptionBarProps, FlatMoveArea, MaximizeButton, MinimizeButton, RestoreButton, useGDWindow, useGroupComponentVisibility } from "@glue42/groups-ui-react";
import { useNotificationsContext } from "@glue42/notifications-ui-react";
import { FunctionComponent } from "react";
import { getNotificationCount } from "../notificationUtils";
import { Banner } from "./banner";

export const CustomFlatCaptionBar: FunctionComponent<FlatCaptionBarProps> = ({ ...rest }) => {
    const visibilityState = useGroupComponentVisibility();
    const notificationsContext = useNotificationsContext();
    const gdSelectedWindow = useGDWindow(rest.selectedWindow);
    let notificationsCount = gdSelectedWindow ? getNotificationCount([gdSelectedWindow], notificationsContext) : 0;
    const bannerVisible = !visibilityState.groupCaptionBarVisible && notificationsCount > 0;

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <FlatMoveArea moveAreaId={rest.moveAreaId}>
                <FlatCaption caption={rest.caption} />
            </FlatMoveArea>
            <Banner visible={bannerVisible}>{notificationsCount}</Banner>
            <MinimizeButton tooltip='minimize' visible={true} onClick={() => rest.minimize?.onClick()} />
            {rest.maximize?.visible && <MaximizeButton {...rest.maximize} />}
            {rest.restore?.visible && <RestoreButton {...rest.restore} />}
            <CloseButton tooltip='close' visible={true} onClick={() => rest.close?.onClick()} />
        </div>
    );
};