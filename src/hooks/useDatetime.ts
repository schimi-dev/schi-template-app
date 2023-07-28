import lang from "@/lang";
import { useCallback, useMemo } from "react";

export default function useDatetime() {

    const displayDate = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleDateString(lang);
    }, [])

    const displayTime = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleTimeString(lang);
    }, [])

    const displayDatetime = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleString(lang);
    }, [])


    const result = useMemo(() => {
        return {
            displayDate,
            displayTime,
            displayDatetime,
        }
    }, [displayDatetime, displayTime, displayDate])

    return result;

}