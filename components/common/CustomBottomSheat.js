import BottomSheet from '@gorhom/bottom-sheet';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomBottomSheat = forwardRef(({ children, ...rest }, ref) => {
  const bottomSheetModalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    show: () => bottomSheetModalRef.current?.expand(),
    close: () => {
      bottomSheetModalRef.current?.close();
    },
  }));

  return (
    <BottomSheet {...rest} index={-1} ref={bottomSheetModalRef} enableDynamicSizing={false} handleComponent={null}>
      {children}
    </BottomSheet>
  );
});

export default CustomBottomSheat;
