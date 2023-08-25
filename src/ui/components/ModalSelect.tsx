import React from 'react';
import DatePicker from 'react-native-date-picker';

interface ModalSelectProps {
  date: Date;
  onDateChange: (date: Date) => void;
  open: boolean;
  onClose: () => void;
  yearOnly?: boolean; // Prop to control whether to show only the year
}

export const ModalSelect: React.FC<ModalSelectProps> = ({
  date,
  onDateChange,
  open,
  onClose,
  yearOnly,
}) => {
  return (
    <>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={yearOnly ? 'year' : 'date'}
        onConfirm={newDate => {
          onClose();
          onDateChange(newDate);
        }}
        onCancel={() => {
          onClose();
        }}
      />
    </>
  );
};
