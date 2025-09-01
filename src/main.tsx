import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from './providers/theme.provider'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster position='top-center' richColors/>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
