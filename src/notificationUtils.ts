import { Glue42 } from "@glue42/desktop";
import { Glue42NotificationsContext } from "@glue42/notifications-ui-react";

export function getNotificationCount(windows: Glue42.Windows.GDWindow[], notificationsContext: Glue42NotificationsContext): number {
    const notifications = notificationsContext.notifications.filter((n) => n.state === "Active" || n.state === "Stale"); // add more states if you need, i.e. Acknowledged

    let notificationsCount = 0;
    for (const notification of notifications) {
        const { instanceId, source } = notification;
        const hasApplication = windows.some((w) => w.application?.name === source); // use if you prefer to show all notifications that have been sent from all application instances
        const hasWindow = windows.some((w) => w.id === instanceId); // use if you prefer to show only notifications that have been sent from a particular application instance
        if (hasWindow) {
            notificationsCount += 1;
        }
    }

    return notificationsCount;
}