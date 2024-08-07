import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setOpenCus } from "@/Redux/Reducers/ThemeCustomizerSlice";
import { useState } from "react";

const ThemeCustomizer = () => {
  const [selected, setSelected] = useState("sidebar-type");
  const { openCus } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const callbackNav = (select: string, open: boolean) => {
    setSelected(select);
    dispatch(setOpenCus(open));
  };

  return (
    <>
      <div className={`customizer-links ${openCus ? "open" : ""}`}>

      </div>
  
    </>
  );
};

export default ThemeCustomizer;
