import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const MenuPage = lazy(() => import("./pages/Menu"));
const LocationPage = lazy(() => import("./pages/Location"));
const PitchPage = lazy(() => import("./pages/Pitch"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});

function PageLoader() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const restaurantLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "restaurant",
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => restaurantLayout,
  path: "/",
  component: () => <HomePage />,
});

const menuRoute = createRoute({
  getParentRoute: () => restaurantLayout,
  path: "/menu",
  component: () => <MenuPage />,
});

const locationRoute = createRoute({
  getParentRoute: () => restaurantLayout,
  path: "/location",
  component: () => <LocationPage />,
});

const pitchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pitch",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PitchPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  restaurantLayout.addChildren([homeRoute, menuRoute, locationRoute]),
  pitchRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
