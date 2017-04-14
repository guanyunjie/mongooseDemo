/**
 * Created by Guanyunjie on 2017/4/10.
 */

function package(data,service) {
    var result = {};
    result.service = service;
    result.message = "success";
    result.result = data;
    return result;
}

exports.package = package;