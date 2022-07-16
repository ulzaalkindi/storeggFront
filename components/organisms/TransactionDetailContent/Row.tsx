import React from 'react';
import NumberFormat from 'react-number-format';

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}
export default function Row(props: Partial<RowProps>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{' '}
      <span className={`purchase-details ${className}`}>
        {typeof value === 'number' ? (
          <NumberFormat
            displayType="text"
            value={value}
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
          />
        ) : (
          value
        )}
      </span>
    </p>
  );
}
