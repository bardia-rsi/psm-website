import type { RefObject } from "react";
import { useEffect } from "react";

const useOnclickOutside = (ref: RefObject<HTMLElement>, handler: Function, open: boolean): void => {
    useEffect(() => {

        const listener = (e: MouseEvent | TouchEvent): void => {

            if (!ref.current || ref.current.contains(e.target as Node | null)) {
                return;
            }

            handler();

        }

        if (open) {

            window.addEventListener<"mousedown">("mousedown", listener);
            window.addEventListener<"touchstart">("touchstart", listener);

        }

        return () => {
            window.removeEventListener<"mousedown">("mousedown", listener);
            window.removeEventListener<"touchstart">("touchstart", listener);
        }

    }, [ref, handler, open]);
}

export default useOnclickOutside;















