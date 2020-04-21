const fetch = require('node-fetch');

module.exports.get = async url => {
    console.log(url);
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
};

module.exports.post = async (url,data) => {

    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
};

module.exports.put = async (url,data) => {

    const response = await fetch(url,{
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
};

module.exports.delete = async (url) => {

    const response = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    });
    const resData = await "删除成功";
    return resData;
};