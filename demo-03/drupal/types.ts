export default {
    "scalars": [
        2,
        3,
        6,
        8,
        9,
        10,
        12,
        28,
        38,
        39,
        45,
        46,
        47,
        49,
        50
    ],
    "types": {
        "Address": {
            "additionalName": [
                39
            ],
            "addressLine1": [
                39
            ],
            "addressLine2": [
                39
            ],
            "administrativeArea": [
                39
            ],
            "country": [
                1
            ],
            "dependentLocality": [
                39
            ],
            "familyName": [
                39
            ],
            "givenName": [
                39
            ],
            "langcode": [
                39
            ],
            "locality": [
                39
            ],
            "organization": [
                39
            ],
            "postalCode": [
                39
            ],
            "sortingCode": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "AddressCountry": {
            "code": [
                39
            ],
            "name": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "Attributes": {},
        "Boolean": {},
        "DateRange": {
            "end": [
                5
            ],
            "start": [
                5
            ],
            "__typename": [
                39
            ]
        },
        "DateTime": {
            "offset": [
                49
            ],
            "time": [
                45
            ],
            "timestamp": [
                47
            ],
            "timezone": [
                46
            ],
            "__typename": [
                39
            ]
        },
        "Email": {},
        "File": {
            "description": [
                39
            ],
            "mime": [
                39
            ],
            "name": [
                39
            ],
            "size": [
                12
            ],
            "url": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "Float": {},
        "Html": {},
        "ID": {},
        "Image": {
            "alt": [
                39
            ],
            "height": [
                12
            ],
            "mime": [
                39
            ],
            "title": [
                39
            ],
            "url": [
                39
            ],
            "width": [
                12
            ],
            "__typename": [
                39
            ]
        },
        "Int": {},
        "KeyValueInput": {
            "key": [
                39
            ],
            "value": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "Language": {
            "direction": [
                39
            ],
            "id": [
                10
            ],
            "name": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "Link": {
            "internal": [
                3
            ],
            "title": [
                39
            ],
            "url": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "MediaImage": {
            "changed": [
                5
            ],
            "created": [
                5
            ],
            "id": [
                10
            ],
            "image": [
                11
            ],
            "name": [
                39
            ],
            "status": [
                3
            ],
            "__typename": [
                39
            ]
        },
        "MediaInterface": {
            "changed": [
                5
            ],
            "created": [
                5
            ],
            "id": [
                10
            ],
            "name": [
                39
            ],
            "status": [
                3
            ],
            "on_MediaImage": [
                16
            ],
            "__typename": [
                39
            ]
        },
        "MediaUnion": {
            "on_MediaImage": [
                16
            ],
            "on_MediaInterface": [
                17
            ],
            "on_Node": [
                20
            ],
            "__typename": [
                39
            ]
        },
        "Mutation": {
            "_": [
                3
            ],
            "__typename": [
                39
            ]
        },
        "Node": {
            "id": [
                10
            ],
            "on_MediaImage": [
                16
            ],
            "on_NodePage": [
                22
            ],
            "on_ParagraphImage": [
                24
            ],
            "on_ParagraphText": [
                26
            ],
            "__typename": [
                39
            ]
        },
        "NodeInterface": {
            "changed": [
                5
            ],
            "created": [
                5
            ],
            "id": [
                10
            ],
            "langcode": [
                14
            ],
            "path": [
                39
            ],
            "promote": [
                3
            ],
            "status": [
                3
            ],
            "sticky": [
                3
            ],
            "title": [
                39
            ],
            "on_NodePage": [
                22
            ],
            "__typename": [
                39
            ]
        },
        "NodePage": {
            "body": [
                44
            ],
            "changed": [
                5
            ],
            "content": [
                27
            ],
            "created": [
                5
            ],
            "headerImage": [
                18
            ],
            "id": [
                10
            ],
            "langcode": [
                14
            ],
            "path": [
                39
            ],
            "promote": [
                3
            ],
            "status": [
                3
            ],
            "sticky": [
                3
            ],
            "title": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                22
            ],
            "on_Node": [
                20
            ],
            "on_NodeInterface": [
                21
            ],
            "__typename": [
                39
            ]
        },
        "ParagraphImage": {
            "created": [
                5
            ],
            "id": [
                10
            ],
            "image": [
                11
            ],
            "__typename": [
                39
            ]
        },
        "ParagraphInterface": {
            "created": [
                5
            ],
            "id": [
                10
            ],
            "on_ParagraphImage": [
                24
            ],
            "on_ParagraphText": [
                26
            ],
            "__typename": [
                39
            ]
        },
        "ParagraphText": {
            "content": [
                43
            ],
            "created": [
                5
            ],
            "id": [
                10
            ],
            "__typename": [
                39
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphImage": [
                24
            ],
            "on_ParagraphText": [
                26
            ],
            "on_Node": [
                20
            ],
            "on_ParagraphInterface": [
                25
            ],
            "__typename": [
                39
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "info": [
                37
            ],
            "route": [
                36,
                {
                    "langcode": [
                        39
                    ],
                    "path": [
                        39,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                39
            ]
        },
        "Response": {
            "errors": [
                50
            ],
            "__typename": [
                39
            ]
        },
        "Route": {
            "internal": [
                3
            ],
            "url": [
                39
            ],
            "on_RouteExternal": [
                33
            ],
            "on_RouteInternal": [
                34
            ],
            "on_RouteRedirect": [
                35
            ],
            "__typename": [
                39
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                22
            ],
            "on_Node": [
                20
            ],
            "on_NodeInterface": [
                21
            ],
            "__typename": [
                39
            ]
        },
        "RouteExternal": {
            "internal": [
                3
            ],
            "url": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "RouteInternal": {
            "breadcrumbs": [
                15
            ],
            "entity": [
                32
            ],
            "internal": [
                3
            ],
            "url": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "RouteRedirect": {
            "internal": [
                3
            ],
            "redirect": [
                3
            ],
            "status": [
                12
            ],
            "url": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "RouteUnion": {
            "on_RouteExternal": [
                33
            ],
            "on_RouteInternal": [
                34
            ],
            "on_RouteRedirect": [
                35
            ],
            "on_Route": [
                31
            ],
            "__typename": [
                39
            ]
        },
        "SchemaInformation": {
            "description": [
                39
            ],
            "home": [
                39
            ],
            "version": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "SortDirection": {},
        "String": {},
        "Table": {
            "caption": [
                39
            ],
            "format": [
                39
            ],
            "rows": [
                41
            ],
            "__typename": [
                39
            ]
        },
        "TableRow": {
            "data": [
                39
            ],
            "weight": [
                12
            ],
            "__typename": [
                39
            ]
        },
        "TermInterface": {
            "changed": [
                5
            ],
            "description": [
                43
            ],
            "id": [
                10
            ],
            "langcode": [
                14
            ],
            "name": [
                39
            ],
            "path": [
                39
            ],
            "status": [
                3
            ],
            "__typename": [
                39
            ]
        },
        "Text": {
            "format": [
                39
            ],
            "processed": [
                9
            ],
            "value": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "TextSummary": {
            "format": [
                39
            ],
            "processed": [
                9
            ],
            "summary": [
                9
            ],
            "value": [
                39
            ],
            "__typename": [
                39
            ]
        },
        "Time": {},
        "TimeZone": {},
        "Timestamp": {},
        "UnsupportedType": {
            "unsupported": [
                3
            ],
            "__typename": [
                39
            ]
        },
        "UtcOffset": {},
        "Violation": {}
    }
}