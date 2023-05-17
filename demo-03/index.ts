import {
  MediaImageGenqlSelection,
  MediaInterfaceGenqlSelection,
  NodePageGenqlSelection,
  createClient,
  isNodePage,
  isParagraphImage,
  isParagraphInterface,
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
            content: {
              __typename: true,
              on_ParagraphImage: {
                image: {
                  url: true,
                },
              },
              on_ParagraphText: {
                content: {
                  processed: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (isRouteInternal(route) && isNodePage(route.entity)) {
    console.dir(route, { depth: null });

    // Yay types
    route.entity.content?.forEach((paragraph) => {
      if (isParagraphImage(paragraph)) {
        console.log(paragraph.image.url);
      }
    });
  }
}

app();
