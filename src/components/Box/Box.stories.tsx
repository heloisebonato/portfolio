import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from './Box'
import { Text } from '../Text/Text'

export default {
    title: 'Components/Box',
    component: Box,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]

} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
