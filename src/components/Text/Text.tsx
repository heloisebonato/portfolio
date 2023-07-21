import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'lg', children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={clsx(
            'text-white-800',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
                'text-lg': size === 'xl',
            },
            className,
        )}
        >
            {children}
        </Comp>
    )
}