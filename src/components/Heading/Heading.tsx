import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'lg', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={clsx(
            'text-grey-100 font-bold',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            },
            className
        )}
        >
            {children}
        </Comp>
    )
}