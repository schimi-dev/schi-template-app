import locale from "@/locale";
import { useCallback, useMemo } from "react";

export default function useDatetime() {

    const displayDate = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleDateString(locale.lang);
    }, [])

    const displayTime = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleTimeString(locale.lang);
    }, [])

    const displayDatetime = useCallback((date: Date) => {
        if (!date) return null;
        return date.toLocaleString(locale.lang);
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