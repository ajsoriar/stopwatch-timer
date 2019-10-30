// ApiRequestService,
// window,
// http,
// q,
// AuthService,

const requestService = () => {

    // Here we handle a list of previous requests in order to stop calling
    // backend when we are awaiting for a previously sent request.

    var ongoingRequests = [];

    const getOngoingRequests = (url, type) => {

        var request = null;
        forEach(ongoingRequests, function (existingRequest) {

            if (existingRequest.url === url && existingRequest.type === type) {
                request = existingRequest;
            }
        });
        return request;
    };

    const addRequest = newRequest => ongoingRequests.push(newRequest);

    const removeRequest = (url, type) => {

        var i, lon = ongoingRequests.length;

        console.log(" ongoingRequests:", ongoingRequests);

        for (i = 0; i < lon; i++) {
            var currentRequest = ongoingRequests[i];

            //console.log( "i:"+ i +" currentRequest: "+ currentRequest );
            if (currentRequest !== undefined) {
                if (currentRequest.url === url && currentRequest.type === type) {
                    ongoingRequests.splice(i, 1);
                }
            }
        }
    };

    var ApiRequest = {
        url: null,
        bodyData: null,
        type: null,
        deferred: null
    };

    const requestUrl = (url, requestData, type) => {

        console.log("requestUrl()");

        var request = null;

        if (type === 'GET') {
            request = getOngoingRequests(url, type);
        }

        if (request) {
            // This request exists and we still waiting for a response so we will not launch a new one.
            console.log("This request exists and we still waiting for a response so we will not launch a new one.");
            console.log("request:", request);

            return request.deferred.promise; // Dont call again if the request exists
        }

        // Create defered request
        var deferred = $q.defer();
        var bodyData = requestData;
        var request = Object.create(ApiRequest);
        request.url = url;
        request.type = type;
        request.deferred = deferred;
        request.bodyData = bodyData;

        addRequest(request);

        $http.defaults.headers.common.Authorization = 'Token ' + AuthService.getSessionToken();
        //localStorage.getItem("KyToken"); //$window.sessionStorage.token;

        $http({
            method: request.type,
            url: request.url,
            data: request.bodyData
        }).then(function successCallback(responseData) {

                var response = {
                    data: responseData
                };

                request.deferred.resolve(response);

            },
            function errorCallback(responseData) {

                var response = {
                    data: responseData
                };

                request.deferred.resolve(response);
            });

        return request.deferred.promise;

    };

    return {

        get: function (url) {
            return requestUrl(url, null, 'GET');
        },
        post: function (url, data) {
            return requestUrl(url, data, 'POST');
        },
        doDelete: function (url, data) {
            return requestUrl(url, data, 'DELETE');
        },
        put: function (url, data) {
            return requestUrl(url, data, 'PUT');
        }
    };

};