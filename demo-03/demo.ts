import { createClient, isNodePage, isRouteInternal } from "./drupal";

async function app() {
  const { route } = await createClient().query({
    route: {
      __args: {
        path: "/",
      },
      // ... on
    },
  });

  if (isRouteInternal(route) && isNodePage(route.entity)) {
    console.log(route.entity.body?.processed);
  }
}

app();
