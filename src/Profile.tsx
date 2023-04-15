import { Heading, Divider, VStack, HStack, Link, Box, Image, Text } from '@chakra-ui/react'
import { MailIcon, LinkIcon } from '@iconicicons/react'
import memoji from './memoji.png'

export default function Profile() {
    const contacts = [
        {
            name: 'E-mail',
            link: 'mailto:cv@vandeas.be',
            icon: <MailIcon />,
            text: 'cv@vandeas.be'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/LotuxPunk',
            icon: <LinkIcon />,
            text: '/LotuxPunk'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/cl%C3%A9ment-vandendaelen/',
            icon: <LinkIcon />,
            text: '/clément-vandendaelen'
        }
    ]
    
    return (
        <Box backgroundColor={'darkerblue.700'} border={'1px'} borderColor={'darkerblue.600'} borderRadius={'lg'} boxShadow={"lg"}>
            <Image backgroundColor={'darkerblue.600'} borderRadius={"2xl"} mx={'auto'} my={4} src={memoji} maxWidth={'200px'} />
            <Heading textAlign={'center'} as={'h1'} size={'lg'}>Clément Vandendaelen</Heading>
            <Box backgroundColor={'darkerblue.600'} borderRadius={"2xl"} maxW={'fit-content'} px={4} mx={'auto'} my={4}>
                <Text textAlign={'center'} as={'h2'} size={'md'}>Software Engineer</Text>
            </Box>
            <Divider />
            <VStack divider={<Divider />} align={'flex-start'} spacing={4} my={4}>
                {contacts.map((contact, index) => (
                    <Box key={index}>
                        <HStack align={'flex-start'} px={8}>
                            <Box >
                                <Link href={contact.link} target='_blank'>
                                    <Box backgroundColor={'darkerblue.500'} _hover={{ backgroundColor: 'darkerblue.600', boxShadow: 'inner' }} borderRadius={"2xl"} maxW={'fit-content'} color={'pink.200'} p={4}>
                                        {contact.icon}
                                    </Box>
                                </Link>
                            </Box>
                            <Box>
                                <Heading as={'h2'} size={'md'}>{contact.name}</Heading>
                                <Text as={'h3'} size={'sm'}>{contact.text}</Text>
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    )
}
