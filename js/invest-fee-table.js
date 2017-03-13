/**
 * Created by anton on 13.03.17.
 */
'use strict';

var investFeeTable = angular.module('investFeeTable', []);

investFeeTable.controller('investTable', ['$scope', function ($scope) {
    /* Vars */
    $scope.incomeAmount;
    $scope.incomePercent;

    $scope.clientFeeAmount;
    $scope.clientFeePercent;
    $scope.traderFeeAmount;
    $scope.traderFeePercent;
    $scope.fondFeeAmount;
    $scope.fondFeePercent;

    /* Functions */
    var getSuccessFeePercent = function (percent) {
        if ($scope.incomePercent >= 1000) {
            return 50;
        } else if ($scope.incomePercent >= 700) {
            return 46;
        } else if ($scope.incomePercent >= 400) {
            return 42;
        } else if ($scope.incomePercent >= 200) {
            return 38;
        } else if ($scope.incomePercent >= 100) {
            return 35;
        } else if ($scope.incomePercent >= 50) {
            return 30;
        } else if ($scope.incomePercent >= 30) {
            return 20;
        } else {
            return 10;
        }
        // Profit %	Profit k$	Total sucess fee %	Total sucess fee k$
        // 10%	    1	10%	0,1
        // 30%	    3	20%	0,6
        // 50%	    5	30%	1,5
        // 100%	    10	35%	3,5
        // 200%	    20	38%	7,6
        // 400%	    40	42%	16,8
        // 700%	    70	46%	32,2
        // 1000%	100	50%	50
    };
    var getShareFeeFondPercent = function (percent) {
        if ($scope.incomePercent >= 1000) {
            return 30;
        } else if ($scope.incomePercent >= 700) {
            return 38;
        } else if ($scope.incomePercent >= 400) {
            return 44;
        } else if ($scope.incomePercent >= 200) {
            return 52;
        } else if ($scope.incomePercent >= 100) {
            return 57;
        } else if ($scope.incomePercent >= 50) {
            return 65;
        } else if ($scope.incomePercent >= 30) {
            return 70;
        } else {
            return 75;
        }
        // Profit %	Fee share fund %
        // 10%	    75%
        // 30%	    70%
        // 50%	    65%
        // 100%	    57%
        // 200%	    52%
        // 400%	    44%
        // 700%	    38%
        // 1000%	30%
    };
    var getShareFeeTraderPercent = function (percent) {
        if ($scope.incomePercent >= 1000) {
            return 70;
        } else if ($scope.incomePercent >= 700) {
            return 62;
        } else if ($scope.incomePercent >= 400) {
            return 56;
        } else if ($scope.incomePercent >= 200) {
            return 48;
        } else if ($scope.incomePercent >= 100) {
            return 43;
        } else if ($scope.incomePercent >= 50) {
            return 35;
        } else if ($scope.incomePercent >= 30) {
            return 30;
        } else {
            return 25;
        }
        // Profit %  Fee share trdr %
        // 10%	    25%
        // 30%	    30%
        // 50%	    35%
        // 100%	    43%
        // 200%	    48%
        // 400%	    56%
        // 700%	    62%
        // 1000%	70%
    };
    $scope.changeIncome = function () {
        if (($scope.incomeAmount == undefined) || ($scope.incomePercent == undefined)) {
            $scope.clientFeeAmount = undefined;
            $scope.clentFeePercent = undefined;
            $scope.traderFeeAmount = undefined;
            $scope.traderFeePercent = undefined;
            $scope.fondFeeAmount = undefined;
            $scope.fondFeePercent = undefined;
            return;
        }

        var profit = ($scope.incomeAmount * $scope.incomePercent) / 100;

        var totalSuccessFeePercent = getSuccessFeePercent($scope.incomePercent);
        var shareFeeTraderPercent = getShareFeeTraderPercent($scope.incomePercent);
        var shareFeeFondPercent = getShareFeeFondPercent($scope.incomePercent);

        var fee = profit * totalSuccessFeePercent / 100;
        $scope.clientFeeAmount = profit - fee;
        $scope.clentFeePercent = 100 - totalSuccessFeePercent;

        $scope.traderFeeAmount = fee * shareFeeTraderPercent / 100;
        $scope.traderFeePercent = totalSuccessFeePercent * shareFeeTraderPercent / 100;
        $scope.fondFeeAmount = fee * shareFeeFondPercent / 100;
        $scope.fondFeePercent = totalSuccessFeePercent * shareFeeFondPercent / 100;


    };

}]);