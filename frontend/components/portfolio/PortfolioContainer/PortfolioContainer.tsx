'use client';

import { styled } from '@mui/material/styles';

const PageContainer = styled('div')({
  maxWidth: 960,
  margin: '0 auto',
  padding: '52px 24px 80px',
  '@media (max-width: 600px)': {
    padding: '36px 16px 64px',
  },
});

export default PageContainer;
