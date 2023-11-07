import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacter from "./pages/SingleCharacter";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about/',
                element: <AboutPage />,
            },
            {
                path: 'characters/',
                element: <CharactersPage />
            },
            {
                path: 'characters/:id',
                element: <SingleCharacter />
            },
            {
                path: 'favorites/',
                element: <FavoritesPage />
            }
        ],
        errorElement: <NotFoundPage />
    }
]);
export default router;