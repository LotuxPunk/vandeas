import { Box, Divider, HStack, Heading, Link, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Monitor2Icon, SmartphoneIcon, ServerIcon, MonitorIcon } from "@iconicicons/react";

export default function Content() {

    const services = [
        {
            name: 'Web Development',
            icon: <Monitor2Icon />,
            text: 'High-quality of web apps at the professional level'
        },
        {
            name: 'Mobile Development',
            icon: <SmartphoneIcon />,
            text: 'Professional development of mobile apps for iOS and Android'

        },
        {
            name: 'Backend Development',
            icon: <ServerIcon />,
            text: 'Backend development for web and mobile apps'
        }
    ]

    const projects = [
        {
            name: 'Cinema Caméo iOS app',
            icon: <SmartphoneIcon />,
            link: 'https://apps.apple.com/be/app/cin%C3%A9ma-cam%C3%A9o/id1626862677',
            text: 'iOS app for the Cinema Caméo of Tamines'
        },
        {
            name: 'Cinema Caméo Android app',
            icon: <SmartphoneIcon />,
            link: 'https://play.google.com/store/apps/details?id=com.vandendaelen.cameo',
            text: 'Android app for the Cinema Caméo of Tamines'
        },
        {
            name: 'Cinema Caméo website',
            icon: <MonitorIcon />,
            link: 'https://cinecameo.be',
            text: 'Website for the Cinema Caméo of Tamines'
        },
        {
            name: 'Ciné Couvin iOS app',
            icon: <SmartphoneIcon />,
            link: 'https://apps.apple.com/be/app/cin%C3%A9-couvin/id6444228655',
            text: 'iOS app for the Ciné Couvin'
        },
        {
            name: 'Ciné Couvin Android app',
            icon: <SmartphoneIcon />,
            link: 'https://play.google.com/store/apps/details?id=com.vandendaelen.cameo.couvin',
            text: 'Android app for the Ciné Couvin'
        },
        {
            name: 'Ciné Couvin website',
            icon: <MonitorIcon />,
            link: 'https://cinecouvin.be',
            text: 'Website for the Ciné Couvin'
        },
        {
            name: 'Spy Tennis Club web app',
            icon: <MonitorIcon />,
            link: 'https://spytennis.be',
            text: 'Web app for the Spy Tennis Club'
        },
        {
            name: 'Car-Master website',
            icon: <MonitorIcon />,
            link: 'https://car-master-belgium.be',
            text: 'Website for Car-Master, a seller of second-hand cars in Jemeppe-sur-Sambre'
        }
    ]

    const marginLeft = useBreakpointValue({ base: 0, sm: 4 })

    return (
        <Box ml={marginLeft} flex={9} backgroundColor={'darkerblue.700'} border={'1px'} borderColor={'darkerblue.600'} borderRadius={'lg'} boxShadow={"lg"} p={4}>
            <Heading>
                About me
            </Heading>
            <Text>
                Hi there! I'm Clément, a programmer currently working at iCure. My interest in programming was sparked by the video game Minecraft and has grown to include a range of exciting projects such as an ERP for cinemas and several websites and mobile apps. In April 2023, I took the leap and started my own side business. Take a look at my projects to see some of my work! 🚀
            </Text>
            <Divider my={4} />
            <Heading>
                Services
            </Heading>
            <SimpleGrid minChildWidth={'200px'} spacing={'8px'} my={2}>
                {services.map((service, index) => (
                    <Box key={index} backgroundColor={'darkerblue.600'} borderRadius={"2xl"} maxW={'fit-content'} p={2} boxShadow={'lg'}>
                        <HStack align={'flex-start'}>
                            <Box my={'auto'}>
                                <Box backgroundColor={'darkerblue.500'} borderRadius={"2xl"} maxW={'fit-content'} p={4}>
                                    {service.icon}
                                </Box>
                            </Box>
                            <Box>
                                <Heading as={'h2'} size={'md'}>{service.name}</Heading>
                                <Text as={'h3'} size={'sm'}>{service.text}</Text>
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
            <Divider my={4} />
            <Heading>
                Projects
            </Heading>
            <SimpleGrid columns={[1, null, 2]} spacing={'8px'} my={2}>
                {projects.map((project, index) => (
                    <Link key={index} backgroundColor={'darkerblue.600'} borderRadius={"2xl"} maxW={'full'} p={2} boxShadow={'lg'} href={project.link} _hover={{ backgroundColor: 'darkerblue.400' }} target='_blank'>
                        <HStack align={'flex-start'}>
                            <Box my={'auto'}>
                                <Box backgroundColor={'darkerblue.500'} borderRadius={"2xl"} maxW={'fit-content'} p={4}>
                                    {project.icon}
                                </Box>
                            </Box>
                            <Box>
                                <Heading as={'h2'} size={'md'}>{project.name}</Heading>
                                <Text as={'h3'} size={'sm'}>{project.text}</Text>
                            </Box>
                        </HStack>
                    </Link>
                ))}
            </SimpleGrid>

        </Box>
    )
}
