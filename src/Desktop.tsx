import { Box, Flex } from '@chakra-ui/react'
import Profile from './Profile'
import Content from './Content'

export default function Desktop() {

    return (
        <>
            <Flex mt={4}>
                <Box flex={3}>
                    <Profile />
                </Box>
                <Box flex={9}>
                    <Content/>
                </Box>
            </Flex>
        </>
    )
}
