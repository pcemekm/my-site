import { Box, Flex, Text, Heading, Grid, GridItem, Badge, HStack, VStack, Separator, Link } from '@chakra-ui/react'

const Wrap = ({ maxW = '1100px', py, children }: { maxW?: string; py?: string; children: React.ReactNode }) => (
  <Box width="100%" maxWidth={maxW} marginLeft="auto" marginRight="auto" paddingLeft="24px" paddingRight="24px" paddingTop={py} paddingBottom={py}>
    {children}
  </Box>
)

const NAV_LINKS = ['O mnie', 'Usługi', 'Technologie', 'Doświadczenie', 'Kontakt']

const SERVICES = [
  {
    icon: '📅',
    title: 'Aplikacje Kalendarzowe',
    desc: 'Dedykowane systemy do zarządzania harmonogramami, rezerwacjami i grafikami pracowników. Dostosowane do specyfiki Twojej firmy.',
  },
  {
    icon: '👥',
    title: 'Zarządzanie Pracownikami',
    desc: 'Platformy HR do planowania zmian, ewidencji czasu pracy, urlopów i komunikacji wewnętrznej.',
  },
  {
    icon: '🔗',
    title: 'Integracje Systemów',
    desc: 'Łączenie istniejących narzędzi biznesowych w spójny ekosystem. API, webhooks, synchronizacja danych.',
  },
  {
    icon: '📱',
    title: 'Aplikacje Mobilne',
    desc: 'Natywne aplikacje iOS i Android z Flutter. Pracownicy zawsze mają dostęp do harmonogramów na telefonie.',
  },
]

const SKILLS = [
  { cat: 'Backend', items: ['Java 17/21', 'Spring Boot', 'NestJS', 'REST API', 'RabbitMQ'] },
  { cat: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Chakra UI'] },
  { cat: 'Mobile', items: ['Flutter', 'Dart', 'React Native'] },
  { cat: 'Bazy danych', items: ['PostgreSQL', 'MongoDB', 'Cassandra'] },
  { cat: 'Auth & IAM', items: ['Keycloak', 'OAuth2', 'OpenID Connect'] },
  { cat: 'DevOps', items: ['Docker', 'Nginx', 'Jenkins', 'Ansible'] },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Software Engineer',
    company: 'SDI Solution / ErgoFlow',
    period: 'Październik 2025 – obecnie',
    items: ['Java, Spring Boot', 'React, TypeScript', 'Flutter', 'Keycloak SPI, OAuth2', 'RabbitMQ, Docker'],
  },
  {
    role: 'Java Developer',
    company: 'SNP Poland',
    period: 'Luty 2021 – Wrzesień 2025',
    items: ['Java, Spring', 'PostgreSQL, Cassandra', 'Jenkins CI/CD', 'Integracje enterprise'],
  },
  {
    role: 'IT Administrator',
    company: 'SNP Poland',
    period: 'Czerwiec 2019 – Luty 2021',
    items: ['Azure AD', 'Microsoft 365', 'Exchange Online', 'Windows Server, Linux'],
  },
  {
    role: 'Software Developer (C#)',
    company: 'Fabryka Wag Kalisto',
    period: 'Lipiec 2017 – Czerwiec 2019',
    items: ['C# aplikacje biznesowe', 'Bazy danych SQL'],
  },
]

const btnPrimary: React.CSSProperties = {
  display: 'block',
  padding: '12px 24px',
  background: 'white',
  color: 'black',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '14px',
  textDecoration: 'none',
  textAlign: 'center',
  transition: 'opacity 0.2s',
}

const btnSecondary: React.CSSProperties = {
  display: 'block',
  padding: '12px 24px',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '14px',
  textDecoration: 'none',
  textAlign: 'center',
  transition: 'opacity 0.2s',
}

const btnLargePrimary: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '16px 32px',
  background: 'white',
  color: 'black',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
}

const btnLargeSecondary: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '16px 32px',
  background: 'rgba(255,255,255,0.08)',
  color: 'white',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
}

export default function App() {
  return (
    <Box bg="black" minH="100vh" color="white">
      {/* NAV */}
      <Box
        as="nav"
        pos="sticky"
        top={0}
        zIndex={100}
        backdropFilter="blur(20px)"
        bg="rgba(0,0,0,0.8)"
        borderBottom="1px solid rgba(255,255,255,0.08)"
      >
        <Wrap maxW="1100px" py="16px">
          <Flex justify="space-between" align="center">
            <Text fontWeight="600" fontSize="md" letterSpacing="-0.3px" color="white">
              Przemysław Madej
            </Text>
            <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  fontSize="sm"
                  color="rgba(255,255,255,0.7)"
                  _hover={{ color: 'white' }}
                  textDecoration="none"
                >
                  {link}
                </Link>
              ))}
            </HStack>
          </Flex>
        </Wrap>
      </Box>

      {/* HERO */}
      <Box id="o-mnie" pt={{ base: '80px', md: '120px' }} pb={{ base: '80px', md: '140px' }} textAlign="center">
        <Wrap maxW="800px">
          <Badge
            mb={6}
            px={3}
            py={1}
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
            color="rgba(255,255,255,0.7)"
            fontSize="xs"
            fontWeight="500"
            letterSpacing="0.5px"
            textTransform="uppercase"
          >
            Dostępny dla nowych projektów
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '68px' }}
            fontWeight="700"
            letterSpacing="-2px"
            lineHeight="1.05"
            mb={6}
            color="white"
          >
            Aplikacje które{' '}
            <Box as="span" color="rgba(255,255,255,0.4)">
              napędzają
            </Box>{' '}
            Twój biznes.
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            color="rgba(255,255,255,0.6)"
            lineHeight="1.6"
            mb={10}
            maxW="560px"
            mx="auto"
          >
            Full Stack Software Engineer z ponad 6-letnim doświadczeniem. Tworzę dedykowane aplikacje
            kalendarzowe i systemy zarządzania pracownikami dla firm każdej wielkości.
          </Text>
          <Flex justify="center" gap={4} flexWrap="wrap">
            <a href="#kontakt" style={btnPrimary}>Porozmawiajmy</a>
            <a href="#usługi" style={btnSecondary}>Zobacz usługi</a>
          </Flex>
        </Wrap>
      </Box>

      {/* STATS */}
      <Box borderTop="1px solid rgba(255,255,255,0.08)" borderBottom="1px solid rgba(255,255,255,0.08)" py={12}>
        <Wrap maxW="1100px">
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={8} textAlign="center">
            {[
              { n: '6+', label: 'lat doświadczenia' },
              { n: '4', label: 'stanowiska / branże' },
              { n: '15+', label: 'technologii w stack' },
              { n: 'B2B', label: 'forma współpracy' },
            ].map(s => (
              <Box key={s.label}>
                <Text fontSize={{ base: '32px', md: '42px' }} fontWeight="700" letterSpacing="-1px" color="white">
                  {s.n}
                </Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.45)" mt={1}>
                  {s.label}
                </Text>
              </Box>
            ))}
          </Grid>
        </Wrap>
      </Box>

      {/* SERVICES */}
      <Box id="usługi" py={{ base: '80px', md: '120px' }}>
        <Wrap maxW="1100px">
          <VStack mb={16} textAlign="center" gap={4}>
            <Text fontSize="xs" color="rgba(255,255,255,0.4)" letterSpacing="2px" textTransform="uppercase" fontWeight="600">
              Usługi
            </Text>
            <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight="700" letterSpacing="-1.5px" color="white">
              Co mogę dla Ciebie zrobić
            </Heading>
            <Text color="rgba(255,255,255,0.5)" maxW="480px" fontSize="md">
              Specjalizuję się w aplikacjach biznesowych, które realnie usprawniają operacje w firmach.
            </Text>
          </VStack>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
            {SERVICES.map(s => (
              <GridItem key={s.title}>
                <Box
                  p={8}
                  borderRadius="2xl"
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(255,255,255,0.08)"
                  _hover={{ bg: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.15)' }}
                  transition="all 0.3s"
                  h="100%"
                >
                  <Text fontSize="2xl" mb={4}>{s.icon}</Text>
                  <Heading fontSize="xl" fontWeight="600" mb={3} color="white" letterSpacing="-0.5px">
                    {s.title}
                  </Heading>
                  <Text fontSize="sm" color="rgba(255,255,255,0.55)" lineHeight="1.7">
                    {s.desc}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Wrap>
      </Box>

      {/* TECH */}
      <Box id="technologie" py={{ base: '80px', md: '120px' }} bg="rgba(255,255,255,0.02)">
        <Wrap maxW="1100px">
          <VStack mb={16} textAlign="center" gap={4}>
            <Text fontSize="xs" color="rgba(255,255,255,0.4)" letterSpacing="2px" textTransform="uppercase" fontWeight="600">
              Technologie
            </Text>
            <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight="700" letterSpacing="-1.5px" color="white">
              Stack technologiczny
            </Heading>
          </VStack>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }} gap={4}>
            {SKILLS.map(skill => (
              <GridItem key={skill.cat}>
                <Box
                  p={5}
                  borderRadius="xl"
                  border="1px solid rgba(255,255,255,0.08)"
                  bg="rgba(255,255,255,0.03)"
                  h="100%"
                >
                  <Text fontSize="xs" fontWeight="700" color="rgba(255,255,255,0.35)" letterSpacing="1px" textTransform="uppercase" mb={3}>
                    {skill.cat}
                  </Text>
                  <VStack align="start" gap={1.5}>
                    {skill.items.map(item => (
                      <Text key={item} fontSize="sm" color="rgba(255,255,255,0.75)" fontWeight="500">
                        {item}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Wrap>
      </Box>

      {/* EXPERIENCE */}
      <Box id="doświadczenie" py={{ base: '80px', md: '120px' }}>
        <Wrap maxW="800px">
          <VStack mb={16} textAlign="center" gap={4}>
            <Text fontSize="xs" color="rgba(255,255,255,0.4)" letterSpacing="2px" textTransform="uppercase" fontWeight="600">
              Doświadczenie
            </Text>
            <Heading fontSize={{ base: '32px', md: '48px' }} fontWeight="700" letterSpacing="-1.5px" color="white">
              Historia zawodowa
            </Heading>
          </VStack>
          <VStack gap={0} align="stretch">
            {EXPERIENCE.map((exp, i) => (
              <Box key={exp.company}>
                <Box py={8}>
                  <Flex justify="space-between" align="start" mb={4} flexWrap="wrap" gap={2}>
                    <Box>
                      <Text fontWeight="700" fontSize="lg" color="white" letterSpacing="-0.3px">
                        {exp.role}
                      </Text>
                      <Text fontSize="sm" color="rgba(255,255,255,0.5)" mt={0.5}>
                        {exp.company}
                      </Text>
                    </Box>
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg="rgba(255,255,255,0.07)"
                      color="rgba(255,255,255,0.5)"
                      fontSize="xs"
                      fontWeight="500"
                    >
                      {exp.period}
                    </Badge>
                  </Flex>
                  <HStack gap={2} flexWrap="wrap">
                    {exp.items.map(item => (
                      <Badge
                        key={item}
                        px={2.5}
                        py={1}
                        borderRadius="md"
                        bg="rgba(255,255,255,0.05)"
                        color="rgba(255,255,255,0.6)"
                        fontSize="xs"
                        fontWeight="500"
                      >
                        {item}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
                {i < EXPERIENCE.length - 1 && <Separator borderColor="rgba(255,255,255,0.07)" />}
              </Box>
            ))}
          </VStack>
        </Wrap>
      </Box>

      {/* EDUCATION */}
      <Box py={{ base: '60px', md: '80px' }} bg="rgba(255,255,255,0.02)">
        <Wrap maxW="800px">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
            <Box p={6} borderRadius="xl" border="1px solid rgba(255,255,255,0.08)" bg="rgba(255,255,255,0.03)">
              <Text fontSize="xs" fontWeight="700" color="rgba(255,255,255,0.35)" letterSpacing="1px" textTransform="uppercase" mb={4}>
                Wykształcenie
              </Text>
              <Text fontWeight="600" color="white" mb={0.5}>M.Sc. Teleinformatyka</Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.5)">Politechnika Poznańska</Text>
              <Text fontSize="xs" color="rgba(255,255,255,0.3)" mt={1} mb={4}>2020–2021</Text>
              <Separator mb={4} borderColor="rgba(255,255,255,0.07)" />
              <Text fontWeight="600" color="white" mb={0.5}>B.Eng. Elektronika i Telekomunikacja</Text>
              <Text fontSize="sm" color="rgba(255,255,255,0.5)">Politechnika Poznańska</Text>
              <Text fontSize="xs" color="rgba(255,255,255,0.3)" mt={1}>2016–2020</Text>
            </Box>
            <Box p={6} borderRadius="xl" border="1px solid rgba(255,255,255,0.08)" bg="rgba(255,255,255,0.03)">
              <Text fontSize="xs" fontWeight="700" color="rgba(255,255,255,0.35)" letterSpacing="1px" textTransform="uppercase" mb={4}>
                Certyfikaty Cisco
              </Text>
              {[
                'CCNA Exploration: Network Fundamentals',
                'CCNA Exploration: LAN Switching and Wireless',
                'IT Essentials: PC Hardware and Software',
              ].map(cert => (
                <Flex key={cert} align="start" gap={3} mb={4}>
                  <Box w="5px" h="5px" borderRadius="full" bg="rgba(255,255,255,0.3)" flexShrink={0} mt="6px" />
                  <Text fontSize="sm" color="rgba(255,255,255,0.65)">{cert}</Text>
                </Flex>
              ))}
            </Box>
          </Grid>
        </Wrap>
      </Box>

      {/* CONTACT */}
      <Box id="kontakt" py={{ base: '80px', md: '120px' }}>
        <Wrap maxW="600px">
          <Text fontSize="xs" color="rgba(255,255,255,0.4)" letterSpacing="2px" textTransform="uppercase" fontWeight="600" mb={4}>
            Kontakt
          </Text>
          <Heading fontSize={{ base: '32px', md: '52px' }} fontWeight="700" letterSpacing="-1.5px" color="white" mb={5}>
            Zacznijmy razem coś tworzyć.
          </Heading>
          <Text color="rgba(255,255,255,0.5)" mb={10} fontSize="md" lineHeight="1.6">
            Szukasz aplikacji do zarządzania harmonogramami lub masz inny pomysł na projekt?
            Chętnie porozmawiam o Twoich potrzebach biznesowych.
          </Text>
          <VStack gap={4} mb={12}>
            <a href="mailto:praca.pmadej@gmail.com" style={btnLargePrimary}>
              praca.pmadej@gmail.com
            </a>
            <a href="https://linkedin.com/in/przemek-madej" target="_blank" rel="noreferrer" style={btnLargeSecondary}>
              LinkedIn → linkedin.com/in/przemek-madej
            </a>
          </VStack>
        </Wrap>
      </Box>

      {/* FOOTER */}
      <Box borderTop="1px solid rgba(255,255,255,0.08)" py={8}>
        <Wrap maxW="1100px">
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <Text fontSize="sm" color="rgba(255,255,255,0.3)">
              © 2026 Przemysław Madej Software Solutions
            </Text>
            <Text fontSize="sm" color="rgba(255,255,255,0.3)">
              NIP: 9721372251 · REGON: 543222467 · Poznań, Polska
            </Text>
          </Flex>
        </Wrap>
      </Box>
    </Box>
  )
}
