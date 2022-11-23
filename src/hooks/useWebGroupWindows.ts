import { Glue42 } from "@glue42/desktop";
import { GlueContext } from "@glue42/react-hooks";
import { useContext, useEffect, useState } from "react";

export function useWebGroupWindows(groupId: string): Glue42.Windows.GDWindow[] {
    const glue = useContext(GlueContext) as Glue42.Glue;
    const [windows, setGroup] = useState<any>([]);

    useEffect(() => {
        let wndAddedUn: () => void;
        let wndRemovedUn: () => void;

        const myGroupPromise = glue.windows.groups.waitForGroup(groupId);
        myGroupPromise.then((myGroup) => {
            wndAddedUn = myGroup.onWindowAdded(_ => setGroup(myGroup.windows));
            wndRemovedUn = myGroup.onWindowRemoved(_ => setGroup(myGroup.windows));
            setGroup(myGroup.windows);
        });

        return () => {
            wndAddedUn?.();
            wndRemovedUn?.();
        }   
    }, []);

    return windows;
}