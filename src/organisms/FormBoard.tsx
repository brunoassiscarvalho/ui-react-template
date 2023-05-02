import React from 'react';

interface FormBoardProps {
  children: React.ReactNode;
}

export default function FormBoard({ children }: FormBoardProps) {
  return <form>{children}</form>;
}
