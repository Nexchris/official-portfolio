import React from 'react';
import HomeScreen from './pages/homescreen.jsx';
import Video from './assets/videos/previewvideo.mp4';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      {/* Vidéo de fond */}
      <Box
        component="video"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      />

      {/* Overlay noir */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: -1,
        }}
      />

      {/* Contenu principal */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <HomeScreen />
      </Box>
    </>
  );
}

export default App;
