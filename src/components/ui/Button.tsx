import React, { MouseEventHandler } from 'react';

interface ButtonProps extends React.PropsWithChildren {
    primary?: boolean;
    type?: 'button' | 'submit',
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon?: React.ReactNode
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children, icon, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={
      `bg-zinc-900
       text-white
        ${ icon ? 'px-2' : 'px-6'}
        py-2
        border-2
       border-zinc-700
        rounded-lg
        hover:ring-2 hover:ring-red-600 hover:bg-zinc-800 duration-100 hover:border-zinc-900
        disabled:text-zinc-600 disabled:border-zinc-500 disabled:shadow-none disabled:hover:ring-0 disabled:hover:bg-zinc-900
         ${className}`} onClick={onClick}>
        {icon} {children}
    </button>
  )
}

export default Button