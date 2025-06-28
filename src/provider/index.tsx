"use client"

import { store } from '@/redux';
import React from 'react'
import { Provider } from 'react-redux';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
