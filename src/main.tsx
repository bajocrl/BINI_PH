import { createRoot } from 'react-dom/client';
import { Page } from '@/pages';
import '@/styles/index.css';

import { SpeedInsights } from '@vercel/speed-insights/next';

createRoot(document.getElementById('root')!).render(
  <>
    <SpeedInsights />
    <Page />
  </>
);
