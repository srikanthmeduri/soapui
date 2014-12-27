var app = angular.module('soap', []);

app.controller('SoapCtrl', function($scope, $http) {
    var tArr = [];
    var tObj;
    data.forEach(function(obj) {
        tObj = {
            serviceName: obj.serviceName,
            wsdl: obj.wsdl,
            methods: [],
            items: []
        };
        obj.methods.forEach(function(o) {
            tObj.methods.push(o.name);
            tObj.items.push(o.items);
        });
        tArr.push(tObj);
    });
    //console.log(JSON.stringify(tArr));
    $scope.data = tArr;
    $scope.selMeth = function(index) {
        $scope.selectedMethod = $scope.selectedService.items[index];
    };
    $scope.changeService = function() {
        $scope.selectedMethod = null;
    };
    $scope.makeAjax = function() {
        var form = $('#Form').serializeArray();
        var model = {};
        form.forEach(function(o) {
            model[o.name] = o.value;
        });
        console.log(JSON.stringify(model));
        console.log($scope.selectedService.wsdl);
        var url = $scope.selectedService.wsdl;
        /*$http.post(url, model).then(function(obj) {
            console.log(obj);
        }, function(e) {
            console.log(e);
        });*/
    };
});
