import { createRoot } from 'react-dom/client'
import './index.css'
import App from './RootLayout.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routing/routeTree.js'

const queryClient = new QueryClient()
const router = createRouter({
    routeTree,
    context: {
        queryClient,
    }
})

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
