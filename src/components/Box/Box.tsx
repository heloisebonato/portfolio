import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface BoxProps {
    children: ReactNode;
    className?: string;
}

export function Box({ children, className }: BoxProps) {

    return (
        <Box className='h-5 w-5 text-cyan-500' >
            {children}
        </Box>
    )
}   