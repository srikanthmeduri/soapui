var data = [{
    "serviceName": "UserProfile",
    "wsdl": "http://example.com/user?wsdl",
    "methods": [{
        "name": "GetUserName",
        "items": [{
            "key": "userid",
            "type": "text",
            "title": "User Id"
        }, {
            "key": "ssn",
            "type": "number",
            "title": "SSN"
        }]
    }, {
        "name": "GetUserAddress",
        "items": [{
            "key": "address",
            "type": "text",
            "title": "Address"
        }]
    }]
}, {
    "serviceName": "GeoLocationService",
    "wsdl": "http://example.com/geo?wsdl",
    "methods": [{
        "name": "GetLocationByCord",
        "items": [{
            "key": "lat",
            "type": "numeric",
            "title": "Lattitude"
        }, {
            "key": "long",
            "type": "numeric",
            "title": "Longitude"
        }]
    }]
}];
