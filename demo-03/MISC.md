# Steps

`npm i -g @genql/cli`

genql --endpoint http://wellington-basic.lndo.site/graphql --output ./generated

```graphql
nodePage(id: "UUID") {
  ... on NodePage {
    id
    title
    body
  }
}
```

```graphql

fragment NodePageFragment on NodePage {
  id
  title
  body
}

nodePage(id: "UUID") {
  ...NodePageFragment
}

```

## Basic query

```js
import { createClient } from "./generated";

const client = createClient({
  url: "http://wellington-basic.lndo.site/graphql",
});

const NodePageFragment: NodePageGenqlSelection = {
  body {
    processed: true
  }
}

const NodeFragment: NodeInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  title: true,
  on_NodePage: NodePageFragment
}

client
  .query({
    nodePage: {
      __args: {
        id: "some-uuid-here",
      },
      on_NodePage: {
        id: true,
        title: true,
        body: true,
      },
    },
  })
  .then(console.log);
```

```js
import { createClient } from "./generated";

const client = createClient({
  url: "http://wellington-basic.lndo.site/graphql",
});

const NodePageFragment: NodePageGenqlSelection = {
  body {
    processed: true
  }
}

const NodeFragment: NodeInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  title: true,
  on_NodePage: NodePageFragment
}

client
  .query({
    nodePage: NodeFragment,
  })
  .then(console.log);
```

```js
const RouteFragment: RouteGenqlSelection = {
  __typename: true,
  url: true,
  internal: true,
};

const { route } = await client.query({
  route: {
    __args: { path: "/" },
    on_Route: RouteFragment,
    on_RouteInternal: {
      entity: {
        on_NodeInterface: NodeFragment,
      },
    },
  },
});
```
