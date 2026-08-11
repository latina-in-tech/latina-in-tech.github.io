import React from 'react';

type Props = {
  label: string;
  isPast: boolean;
};

/**
 * diagonal band across the top right corner of an event cover,
 * telling upcoming and past events apart at a glance.
 * the parent must be positioned and clip its overflow.
 */
const EventStatusRibbon: React.FC<Props> = ({ label, isPast }: Props) => (
  <span
    className={`absolute -right-12 top-5 w-40 rotate-45 py-1 text-center text-[11px] font-bold uppercase tracking-wider shadow-md ${
      isPast ? 'bg-green-100 text-green-800' : 'bg-green-500 text-white'
    }`}
  >
    {label}
  </span>
);

export default EventStatusRibbon;
