import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupTypes } from "../popupTypes";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TOGGLE } from "@/store/slices/popupSlice";

const NABPopup = ({ nabData }: any) => {
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();
  console.log(nabData);
  return (
    <Dialog
      open={isPopupOpen === popupTypes.NAB}
      onOpenChange={(value) =>
        dispatch(
          TOGGLE(
            isPopupOpen === popupTypes.CLOSE ? popupTypes.NAB : popupTypes.CLOSE
          )
        )
      }
    >
      <DialogContent className="bg-white ">
        <div className="relative">
          <div dangerouslySetInnerHTML={{ __html: nabData?.data }}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NABPopup;
