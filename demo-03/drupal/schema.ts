// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Attributes: any,
    Boolean: boolean,
    Email: any,
    Float: number,
    Html: any,
    ID: string,
    Int: number,
    PhoneNumber: any,
    String: string,
    Time: any,
    TimeZone: any,
    Timestamp: any,
    UtcOffset: any,
    Violation: any,
}


/** Complex address data. */
export interface Address {
    additionalName: (Scalars['String'] | null)
    addressLine1: (Scalars['String'] | null)
    addressLine2: (Scalars['String'] | null)
    administrativeArea: (Scalars['String'] | null)
    country: (AddressCountry | null)
    dependentLocality: (Scalars['String'] | null)
    familyName: (Scalars['String'] | null)
    givenName: (Scalars['String'] | null)
    langcode: (Scalars['String'] | null)
    locality: (Scalars['String'] | null)
    organization: (Scalars['String'] | null)
    postalCode: (Scalars['String'] | null)
    sortingCode: (Scalars['String'] | null)
    __typename: 'Address'
}


/** Address country. */
export interface AddressCountry {
    code: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'AddressCountry'
}


/** A Date range has a start and an end. */
export interface DateRange {
    end: (DateTime | null)
    start: (DateTime | null)
    __typename: 'DateRange'
}


/** A DateTime object. */
export interface DateTime {
    offset: Scalars['UtcOffset']
    time: Scalars['Time']
    timestamp: Scalars['Timestamp']
    timezone: Scalars['TimeZone']
    __typename: 'DateTime'
}


/** A file object to represent an managed file. */
export interface File {
    description: (Scalars['String'] | null)
    mime: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    size: Scalars['Int']
    url: Scalars['String']
    __typename: 'File'
}


/** A image object to represent an managed file. */
export interface Image {
    alt: (Scalars['String'] | null)
    height: Scalars['Int']
    mime: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'Image'
}


/** A language definition provided by the CMS. */
export interface Language {
    direction: (Scalars['String'] | null)
    id: (Scalars['ID'] | null)
    name: (Scalars['String'] | null)
    __typename: 'Language'
}

export interface Link {
    internal: Scalars['Boolean']
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    __typename: 'Link'
}


/** Use local images for reusable media. */
export interface MediaImage {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Image */
    image: Image
    /** Name */
    name: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'MediaImage'
}


/** Entity type media. */
export type MediaInterface = (MediaImage) & { __isUnion?: true }

export type MediaUnion = (MediaImage) & { __isUnion?: true }


/** A GraphQL mutation is a request that changes data on the server. */
export interface Mutation {
    /** Dummy value to enable mutation extension. */
    _: (Scalars['Boolean'] | null)
    __typename: 'Mutation'
}


/** A concrete fetchable type that is addressable by an id. Not to be confused with a Drupal node. */
export type Node = (MediaImage | NodePage | ParagraphImage | ParagraphText) & { __isUnion?: true }


/** Entity type node. */
export type NodeInterface = (NodePage) & { __isUnion?: true }


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePage {
    /** Body */
    body: (TextSummary | null)
    /** The time that the node was last edited. */
    changed: DateTime
    /** Content */
    content: (ParagraphUnion[] | null)
    /** The time that the node was created. */
    created: DateTime
    /** Header Image */
    headerImage: (MediaUnion | null)
    /** UUID */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** URL alias */
    path: Scalars['String']
    /** Promoted to front page */
    promote: Scalars['Boolean']
    /** Published */
    status: Scalars['Boolean']
    /** Sticky at top of lists */
    sticky: Scalars['Boolean']
    /** Title */
    title: Scalars['String']
    __typename: 'NodePage'
}

export type NodeUnion = (NodePage) & { __isUnion?: true }


/** An Image. */
export interface ParagraphImage {
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Image */
    image: (Image | null)
    __typename: 'ParagraphImage'
}


/** Entity type paragraph. */
export type ParagraphInterface = (ParagraphImage | ParagraphText) & { __isUnion?: true }


/** Some WYSIWYG text. */
export interface ParagraphText {
    /** Content */
    content: (Text | null)
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    __typename: 'ParagraphText'
}

export type ParagraphUnion = (ParagraphImage | ParagraphText) & { __isUnion?: true }


/**
 * The schema's entry-point for queries.
 * 
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
    /** Schema generator version. */
    info: SchemaInformation
    /** Load a Route by path. */
    route: (RouteUnion | null)
    __typename: 'Query'
}


/** The base GraphQL Response class. */
export interface Response {
    errors: ((Scalars['Violation'] | null)[] | null)
    __typename: string
}


/** Routes represent incoming requests that resolve to content. */
export type Route = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = (NodePage) & { __isUnion?: true }


/** Route outside of this website. */
export interface RouteExternal {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteExternal'
}


/** Route within this website. */
export interface RouteInternal {
    /** Breadcrumb links for this route. */
    breadcrumbs: (Link[] | null)
    /** Content assigned to this route. */
    entity: (RouteEntityUnion | null)
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteInternal'
}


/** Redirect to another URL with status. */
export interface RouteRedirect {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** Utility prop. Always true for redirects. */
    redirect: Scalars['Boolean']
    /** Suggested status for redirect. Eg 301. */
    status: Scalars['Int']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteRedirect'
}


/** Route types that can exist in the system. */
export type RouteUnion = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** Schema generator version. */
export interface SchemaInformation {
    /** Schema description. */
    description: Scalars['String']
    /** Path to the homepage. */
    home: (Scalars['String'] | null)
    /** Schema module version. */
    version: Scalars['String']
    __typename: 'SchemaInformation'
}


/** List of menus available to load. */
export type SortDirection = 'ASC' | 'DESC'

export interface Table {
    caption: (Scalars['String'] | null)
    /** A text format associated with the row data. */
    format: (Scalars['String'] | null)
    rows: ((TableRow | null)[] | null)
    __typename: 'Table'
}

export interface TableRow {
    data: ((Scalars['String'] | null)[] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'TableRow'
}


/** Entity type taxonomy_term. */
export interface TermInterface {
    /** The time that the term was last edited. */
    changed: (DateTime | null)
    /** Description */
    description: (Text | null)
    /** The term UUID. */
    id: (Scalars['ID'] | null)
    /** The term language code. */
    langcode: (Language | null)
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: (Scalars['String'] | null)
    /** Published */
    status: (Scalars['Boolean'] | null)
    __typename: string
}


/** A processed text format defined by the CMS. */
export interface Text {
    format: (Scalars['String'] | null)
    processed: (Scalars['Html'] | null)
    value: (Scalars['String'] | null)
    __typename: 'Text'
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummary {
    format: (Scalars['String'] | null)
    processed: (Scalars['Html'] | null)
    summary: (Scalars['Html'] | null)
    value: (Scalars['String'] | null)
    __typename: 'TextSummary'
}


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedType {
    /** Unsupported type, always TRUE. */
    unsupported: (Scalars['Boolean'] | null)
    __typename: 'UnsupportedType'
}


/** Complex address data. */
export interface AddressGenqlSelection{
    additionalName?: boolean | number
    addressLine1?: boolean | number
    addressLine2?: boolean | number
    administrativeArea?: boolean | number
    country?: AddressCountryGenqlSelection
    dependentLocality?: boolean | number
    familyName?: boolean | number
    givenName?: boolean | number
    langcode?: boolean | number
    locality?: boolean | number
    organization?: boolean | number
    postalCode?: boolean | number
    sortingCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Address country. */
export interface AddressCountryGenqlSelection{
    code?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Date range has a start and an end. */
export interface DateRangeGenqlSelection{
    end?: DateTimeGenqlSelection
    start?: DateTimeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A DateTime object. */
export interface DateTimeGenqlSelection{
    offset?: boolean | number
    time?: boolean | number
    timestamp?: boolean | number
    timezone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A file object to represent an managed file. */
export interface FileGenqlSelection{
    description?: boolean | number
    mime?: boolean | number
    name?: boolean | number
    size?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A image object to represent an managed file. */
export interface ImageGenqlSelection{
    alt?: boolean | number
    height?: boolean | number
    mime?: boolean | number
    title?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Generic untyped input for key-value pairs. */
export interface KeyValueInput {key?: Scalars['String'],value?: (Scalars['String'] | null)}


/** A language definition provided by the CMS. */
export interface LanguageGenqlSelection{
    direction?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkGenqlSelection{
    internal?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Use local images for reusable media. */
export interface MediaImageGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Image */
    image?: ImageGenqlSelection
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type media. */
export interface MediaInterfaceGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    on_MediaImage?: MediaImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaUnionGenqlSelection{
    on_MediaImage?:MediaImageGenqlSelection,
    on_MediaInterface?: MediaInterfaceGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}


/** A GraphQL mutation is a request that changes data on the server. */
export interface MutationGenqlSelection{
    /** Dummy value to enable mutation extension. */
    _?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A concrete fetchable type that is addressable by an id. Not to be confused with a Drupal node. */
export interface NodeGenqlSelection{
    id?: boolean | number
    on_MediaImage?: MediaImageGenqlSelection
    on_NodePage?: NodePageGenqlSelection
    on_ParagraphImage?: ParagraphImageGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type node. */
export interface NodeInterfaceGenqlSelection{
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Promoted to front page */
    promote?: boolean | number
    /** Published */
    status?: boolean | number
    /** Sticky at top of lists */
    sticky?: boolean | number
    /** Title */
    title?: boolean | number
    on_NodePage?: NodePageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePageGenqlSelection{
    /** Body */
    body?: TextSummaryGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** Content */
    content?: ParagraphUnionGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** Header Image */
    headerImage?: MediaUnionGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Promoted to front page */
    promote?: boolean | number
    /** Published */
    status?: boolean | number
    /** Sticky at top of lists */
    sticky?: boolean | number
    /** Title */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** An Image. */
export interface ParagraphImageGenqlSelection{
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Image */
    image?: ImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type paragraph. */
export interface ParagraphInterfaceGenqlSelection{
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    on_ParagraphImage?: ParagraphImageGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Some WYSIWYG text. */
export interface ParagraphTextGenqlSelection{
    /** Content */
    content?: TextGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ParagraphUnionGenqlSelection{
    on_ParagraphImage?:ParagraphImageGenqlSelection,
    on_ParagraphText?:ParagraphTextGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_ParagraphInterface?: ParagraphInterfaceGenqlSelection,
    __typename?: boolean | number
}


/**
 * The schema's entry-point for queries.
 * 
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryGenqlSelection{
    /** Schema generator version. */
    info?: SchemaInformationGenqlSelection
    /** Load a Route by path. */
    route?: (RouteUnionGenqlSelection & { __args: {
    /** Optionally filter the route by language. Eg en, ja, fr. Defaults to site default language. */
    langcode?: (Scalars['String'] | null), 
    /** Internal path to load. Eg /about */
    path: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The base GraphQL Response class. */
export interface ResponseGenqlSelection{
    errors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Routes represent incoming requests that resolve to content. */
export interface RouteGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    on_RouteExternal?: RouteExternalGenqlSelection
    on_RouteInternal?: RouteInternalGenqlSelection
    on_RouteRedirect?: RouteRedirectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of possible entities that can be returned by URL. */
export interface RouteEntityUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Route outside of this website. */
export interface RouteExternalGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Route within this website. */
export interface RouteInternalGenqlSelection{
    /** Breadcrumb links for this route. */
    breadcrumbs?: LinkGenqlSelection
    /** Content assigned to this route. */
    entity?: RouteEntityUnionGenqlSelection
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Redirect to another URL with status. */
export interface RouteRedirectGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** Utility prop. Always true for redirects. */
    redirect?: boolean | number
    /** Suggested status for redirect. Eg 301. */
    status?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Route types that can exist in the system. */
export interface RouteUnionGenqlSelection{
    on_RouteExternal?:RouteExternalGenqlSelection,
    on_RouteInternal?:RouteInternalGenqlSelection,
    on_RouteRedirect?:RouteRedirectGenqlSelection,
    on_Route?: RouteGenqlSelection,
    __typename?: boolean | number
}


/** Schema generator version. */
export interface SchemaInformationGenqlSelection{
    /** Schema description. */
    description?: boolean | number
    /** Path to the homepage. */
    home?: boolean | number
    /** Schema module version. */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TableGenqlSelection{
    caption?: boolean | number
    /** A text format associated with the row data. */
    format?: boolean | number
    rows?: TableRowGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TableRowGenqlSelection{
    data?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type taxonomy_term. */
export interface TermInterfaceGenqlSelection{
    /** The time that the term was last edited. */
    changed?: DateTimeGenqlSelection
    /** Description */
    description?: TextGenqlSelection
    /** The term UUID. */
    id?: boolean | number
    /** The term language code. */
    langcode?: LanguageGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A processed text format defined by the CMS. */
export interface TextGenqlSelection{
    format?: boolean | number
    processed?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummaryGenqlSelection{
    format?: boolean | number
    processed?: boolean | number
    summary?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedTypeGenqlSelection{
    /** Unsupported type, always TRUE. */
    unsupported?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const AddressCountry_possibleTypes: string[] = ['AddressCountry']
    export const isAddressCountry = (obj?: { __typename?: any } | null): obj is AddressCountry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddressCountry"')
      return AddressCountry_possibleTypes.includes(obj.__typename)
    }
    


    const DateRange_possibleTypes: string[] = ['DateRange']
    export const isDateRange = (obj?: { __typename?: any } | null): obj is DateRange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateRange"')
      return DateRange_possibleTypes.includes(obj.__typename)
    }
    


    const DateTime_possibleTypes: string[] = ['DateTime']
    export const isDateTime = (obj?: { __typename?: any } | null): obj is DateTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateTime"')
      return DateTime_possibleTypes.includes(obj.__typename)
    }
    


    const File_possibleTypes: string[] = ['File']
    export const isFile = (obj?: { __typename?: any } | null): obj is File => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFile"')
      return File_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const Language_possibleTypes: string[] = ['Language']
    export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
      return Language_possibleTypes.includes(obj.__typename)
    }
    


    const Link_possibleTypes: string[] = ['Link']
    export const isLink = (obj?: { __typename?: any } | null): obj is Link => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLink"')
      return Link_possibleTypes.includes(obj.__typename)
    }
    


    const MediaImage_possibleTypes: string[] = ['MediaImage']
    export const isMediaImage = (obj?: { __typename?: any } | null): obj is MediaImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaImage"')
      return MediaImage_possibleTypes.includes(obj.__typename)
    }
    


    const MediaInterface_possibleTypes: string[] = ['MediaImage']
    export const isMediaInterface = (obj?: { __typename?: any } | null): obj is MediaInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaInterface"')
      return MediaInterface_possibleTypes.includes(obj.__typename)
    }
    


    const MediaUnion_possibleTypes: string[] = ['MediaImage']
    export const isMediaUnion = (obj?: { __typename?: any } | null): obj is MediaUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaUnion"')
      return MediaUnion_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['MediaImage','NodePage','ParagraphImage','ParagraphText']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const NodeInterface_possibleTypes: string[] = ['NodePage']
    export const isNodeInterface = (obj?: { __typename?: any } | null): obj is NodeInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeInterface"')
      return NodeInterface_possibleTypes.includes(obj.__typename)
    }
    


    const NodePage_possibleTypes: string[] = ['NodePage']
    export const isNodePage = (obj?: { __typename?: any } | null): obj is NodePage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodePage"')
      return NodePage_possibleTypes.includes(obj.__typename)
    }
    


    const NodeUnion_possibleTypes: string[] = ['NodePage']
    export const isNodeUnion = (obj?: { __typename?: any } | null): obj is NodeUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeUnion"')
      return NodeUnion_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphImage_possibleTypes: string[] = ['ParagraphImage']
    export const isParagraphImage = (obj?: { __typename?: any } | null): obj is ParagraphImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphImage"')
      return ParagraphImage_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphInterface_possibleTypes: string[] = ['ParagraphImage','ParagraphText']
    export const isParagraphInterface = (obj?: { __typename?: any } | null): obj is ParagraphInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphInterface"')
      return ParagraphInterface_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphText_possibleTypes: string[] = ['ParagraphText']
    export const isParagraphText = (obj?: { __typename?: any } | null): obj is ParagraphText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphText"')
      return ParagraphText_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphUnion_possibleTypes: string[] = ['ParagraphImage','ParagraphText']
    export const isParagraphUnion = (obj?: { __typename?: any } | null): obj is ParagraphUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphUnion"')
      return ParagraphUnion_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Response_possibleTypes: string[] = []
    export const isResponse = (obj?: { __typename?: any } | null): obj is Response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResponse"')
      return Response_possibleTypes.includes(obj.__typename)
    }
    


    const Route_possibleTypes: string[] = ['RouteExternal','RouteInternal','RouteRedirect']
    export const isRoute = (obj?: { __typename?: any } | null): obj is Route => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoute"')
      return Route_possibleTypes.includes(obj.__typename)
    }
    


    const RouteEntityUnion_possibleTypes: string[] = ['NodePage']
    export const isRouteEntityUnion = (obj?: { __typename?: any } | null): obj is RouteEntityUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteEntityUnion"')
      return RouteEntityUnion_possibleTypes.includes(obj.__typename)
    }
    


    const RouteExternal_possibleTypes: string[] = ['RouteExternal']
    export const isRouteExternal = (obj?: { __typename?: any } | null): obj is RouteExternal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteExternal"')
      return RouteExternal_possibleTypes.includes(obj.__typename)
    }
    


    const RouteInternal_possibleTypes: string[] = ['RouteInternal']
    export const isRouteInternal = (obj?: { __typename?: any } | null): obj is RouteInternal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteInternal"')
      return RouteInternal_possibleTypes.includes(obj.__typename)
    }
    


    const RouteRedirect_possibleTypes: string[] = ['RouteRedirect']
    export const isRouteRedirect = (obj?: { __typename?: any } | null): obj is RouteRedirect => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteRedirect"')
      return RouteRedirect_possibleTypes.includes(obj.__typename)
    }
    


    const RouteUnion_possibleTypes: string[] = ['RouteExternal','RouteInternal','RouteRedirect']
    export const isRouteUnion = (obj?: { __typename?: any } | null): obj is RouteUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteUnion"')
      return RouteUnion_possibleTypes.includes(obj.__typename)
    }
    


    const SchemaInformation_possibleTypes: string[] = ['SchemaInformation']
    export const isSchemaInformation = (obj?: { __typename?: any } | null): obj is SchemaInformation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSchemaInformation"')
      return SchemaInformation_possibleTypes.includes(obj.__typename)
    }
    


    const Table_possibleTypes: string[] = ['Table']
    export const isTable = (obj?: { __typename?: any } | null): obj is Table => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTable"')
      return Table_possibleTypes.includes(obj.__typename)
    }
    


    const TableRow_possibleTypes: string[] = ['TableRow']
    export const isTableRow = (obj?: { __typename?: any } | null): obj is TableRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTableRow"')
      return TableRow_possibleTypes.includes(obj.__typename)
    }
    


    const TermInterface_possibleTypes: string[] = []
    export const isTermInterface = (obj?: { __typename?: any } | null): obj is TermInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermInterface"')
      return TermInterface_possibleTypes.includes(obj.__typename)
    }
    


    const Text_possibleTypes: string[] = ['Text']
    export const isText = (obj?: { __typename?: any } | null): obj is Text => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isText"')
      return Text_possibleTypes.includes(obj.__typename)
    }
    


    const TextSummary_possibleTypes: string[] = ['TextSummary']
    export const isTextSummary = (obj?: { __typename?: any } | null): obj is TextSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTextSummary"')
      return TextSummary_possibleTypes.includes(obj.__typename)
    }
    


    const UnsupportedType_possibleTypes: string[] = ['UnsupportedType']
    export const isUnsupportedType = (obj?: { __typename?: any } | null): obj is UnsupportedType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnsupportedType"')
      return UnsupportedType_possibleTypes.includes(obj.__typename)
    }
    

export const enumSortDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}
