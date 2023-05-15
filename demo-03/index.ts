import {
  MediaImageGenqlSelection,
  MediaInterfaceGenqlSelection,
  NodePageGenqlSelection,
  createClient,
  isNodePage,
  isRouteInternal,
} from "./drupal";

import type { Route } from "@/services/drupal";

async function app() {
  const { route } = await createClient().query({
    route: {
      __args: {
        path: "/",
      },
      __typename: true,
      on_RouteInternal: {
        __typename: true,
        entity: {
          __typename: true,
          on_NodePage: {
            id: true,
            title: true,
            body: {
              processed: true,
            },
          },
        },
      },
    },
  });

  if (isRouteInternal(route) && isNodePage(route.entity)) {
    console.log(route.entity.body?.processed);
  }
}

app();
