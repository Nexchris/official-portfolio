import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DevIcon from '../assets/images/devicon.png'
import FrenchIcon from '../assets/images/flag/frenchicon.png'
import EnglishIcon from '../assets/images/flag/englishicon.png'
import SpanishIcon from '../assets/images/flag/spainishicon.png'

const pages = ['Accueil', 'À propos ', 'Compétences', 'Projet', 'Contact'];

function AppBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [currentLang, setCurrentLang] = React.useState('fr');
const [anchorElLang, setAnchorElLang] = React.useState(null);

const handleOpenLangMenu = (event) => {
  setAnchorElLang(event.currentTarget);
};

const handleCloseLangMenu = () => {
  setAnchorElLang(null);
};

const handleLangChange = (lang) => {
  setCurrentLang(lang);
  handleCloseLangMenu();
  // Tu pourras déclencher i18n.changeLanguage(lang) ici si besoin
};

const getLangIcon = (lang) => {
  switch (lang) {
    case 'fr':
      return FrenchIcon;
    case 'en':
      return EnglishIcon;
    case 'es':
      return SpanishIcon;
    default:
      return FrenchIcon;
  }
};

  return (
    <AppBar position="static"
    sx={{
        backgroundColor:'transparent',
    }}
    >
      <Container maxWidth="xl">
       <Toolbar disableGutters sx={{ width: '100%' }}>
  {/* ----------- VERSION MOBILE ----------- */}
  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <IconButton
    size="large"
    aria-label="menu"
    onClick={handleOpenNavMenu}
    color="inherit"
  >
    <MenuIcon />
  </IconButton>

</Box>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{ display: { xs: 'block', md: 'none' } }}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>

  <Typography
    variant="h5"
    noWrap
    component="a"
    href="#app-bar-with-responsive-menu"
    sx={{
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
      fontFamily: 'Unbounded, sans-serif',
      fontWeight: 700,
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    Ngabala Chris
  </Typography>

  <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
  <Tooltip title="Changer la langue">
    <IconButton onClick={handleOpenLangMenu}>
      <Avatar
        alt="Langue actuelle"
        src={getLangIcon(currentLang)}
        sx={{ width: 28, height: 28 }}
      />
    </IconButton>
  </Tooltip>
</Box>


  

  {/* ----------- VERSION DESKTOP ----------- */}
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
        marginBottom: '0.5rem',
        marginTop: '0.5rem',

    }}
  >
    {/* Zone Gauche : Typographies */}
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 700,
          fontSize: '1.5rem',
          color: 'white',
          letterSpacing: '0.05rem',
        }}
      >
        Ngabala Chris
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 400,
          fontSize: '1.25rem',
          color: 'white',
          letterSpacing: '0.05rem',
        }}
      >
        Développeur Fullstack
      </Typography>

     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <span
    style={{
      height: '12px',
      width: '12px',
      backgroundColor: '#00ff1c',
      borderRadius: '50%',
      display: 'inline-block',
       boxShadow: '0 0 8px 3px #00ff1c',
    }}
  />
  <Typography
    sx={{
      fontFamily: 'Unbounded, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      color: 'white',
      letterSpacing: '0.05rem',
    }}
  >
    Statut : En recherche d'alternance
  </Typography>
</div>

    </Box>

    {/* Zone Centre : Pages */}
    <Box sx={{ display: 'flex', marginLeft: '-10rem', gap: 2 }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ color: 'white', textTransform: 'none', fontFamily: 'Unbounded, sans-serif'}}
        >
          {page}
        </Button>
      ))}
    </Box>

    {/* Zone Droite : Avatar */}
 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <Tooltip title="Changer la langue">
    <IconButton onClick={handleOpenLangMenu}>
      <Avatar
        alt="Langue actuelle"
        src={getLangIcon(currentLang)}
        sx={{ width: 30, height: 30 }}
      />
    </IconButton>
  </Tooltip>
  <Menu
    anchorEl={anchorElLang}
    open={Boolean(anchorElLang)}
    onClose={handleCloseLangMenu}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <MenuItem onClick={() => handleLangChange('fr')}>
      <Avatar src={FrenchIcon} sx={{ width: 24, height: 24, mr: 1 }} /> Français
    </MenuItem>
    <MenuItem onClick={() => handleLangChange('en')}>
      <Avatar src={EnglishIcon} sx={{ width: 24, height: 24, mr: 1 }} /> English
    </MenuItem>
    <MenuItem onClick={() => handleLangChange('es')}>
      <Avatar src={SpanishIcon} sx={{ width: 24, height: 24, mr: 1 }} /> Español
    </MenuItem>
  </Menu>
</Box>
  </Box>
</Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarComponent;
