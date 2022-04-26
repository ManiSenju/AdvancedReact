export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "auth": false,
            "comments": [
                "home",
                "green"
            ]
        }
    ],
    "required": [
        "auth",
        "comments"
    ],
    "properties": {
        "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The auth schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                false
            ]
        },
        "comments": {
            "$id": "#/properties/comments",
            "type": "array",
            "title": "The comments schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    "home",
                    "green"
                ]
            ],
            "additionalItems": true,
            "items": {
                "$id": "#/properties/comments/items",
                "anyOf": [
                    {
                        "$id": "#/properties/comments/items/anyOf/0",
                        "type": "string",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "home",
                            "green"
                        ]
                    }
                ]
            }
        }
    },
    "additionalProperties": true
}