import React from 'react'
import Content from './Content'
import Profile from './Profile'
import { Box } from '@chakra-ui/react'

export default function Mobile() {
    return (
        <>
            <Box my={4}>
                <Profile />
            </Box>
            <Box my={4}>
                <Content />
            </Box>
        </>
    )
}
