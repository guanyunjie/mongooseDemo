/**
 * Created by Guanyunjie on 2017/4/10.
 */

function returnResult(err,data) {
    var result = {};
    if(err){
        result.message = "error";
        result.result = {};
    }
    else{
        result.message = "success";
        result.result = data;
    }
    return result;
}

exports.returnResult = returnResult;