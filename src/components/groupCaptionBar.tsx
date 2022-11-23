import { CloseButton, getGroupId, GroupCaption, GroupCaptionBarProps, GroupMoveArea, MaximizeButton, MinimizeButton, RestoreButton } from "@glue42/groups-ui-react";
import { useNotificationsContext } from "@glue42/notifications-ui-react";
import { FunctionComponent } from "react";
import { useWebGroupWindows } from "../hooks/useWebGroupWindows";
import { getNotificationCount } from "../notificationUtils";
import { Banner } from "./banner";

export const CustomGroupCaptionBar: FunctionComponent<GroupCaptionBarProps> = ({ ...rest }) => {
    const notificationsContext = useNotificationsContext();
    const groupWindows = useWebGroupWindows(getGroupId());
    const notificationsCount = getNotificationCount(groupWindows, notificationsContext);
    const bannerVisible = rest.visible && notificationsCount > 0;

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <GroupMoveArea moveAreaId={rest.moveAreaId}>
                <GroupCaption caption={rest.caption} />
            </GroupMoveArea>
            <Banner visible={bannerVisible}>{notificationsCount}</Banner>
            <MinimizeButton tooltip='minimize' visible={true} onClick={() => rest.minimize.onClick()} />
            {rest.maximize?.visible && <MaximizeButton {...rest.maximize} />}
            {rest.restore?.visible && <RestoreButton {...rest.restore} />}
            <CloseButton tooltip='close' visible={true} onClick={() => rest.close.onClick()} />
        </div>
    );
};