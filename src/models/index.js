import axios from "./axios";
const apiUrl = "http://aaa.com/eedianbao/api"
// yuanben : get('url?a=dsds&b=dudhsu')
// getUrl('url', {a:decodeURI,b:dsds})
function getUrl(url, data) {
    const _url = apiUrl + url
    let q = Object.keys(data)
        .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");

    return q.length > 0 ? _url + "?" + q : _url;
}

class Models {
    // 给Vue提供安装接口
    install(vue) {
        Object.assign(vue.prototype, {
            // $fetch: this.fetch,
            $get: this.get,
            $post: this.post
        });
    }

    get(url, data = {}, opts = {}) {
        if (!opts.headers) {
            opts.headers = {};
        }
        opts.headers["Content-Type"] = "application/json";
        opts.headers["x-requested-with"] = "xmlhttprequest";
        opts.headers.Authorization =
            "Tenant=5678efgh Credential=5678efgh/credential-scope";
        opts.credentials = "same-origin";
        let _url = getUrl(url, data);
        // opts.mode = 'no-cors'
        return axios
            .get(_url, opts)
            .then(res => {
                // if (res.data.msg == "failure") {
                //     location.href = res.data.url;
                // }
                return res;
            })["catch"](e => {
                //console.log(e);
                throw e;
            });
    }

    post(url, param = {}, opts = {}) {
        if (!opts.headers) {
            opts.headers = {};
        }
        axios.defaults.headers.common.Authorization =
            "Tenant=5678efgh Credential=5678efgh/credential-scope";
        axios.defaults.headers.post["Content-Type"] = "application/json";
        axios.defaults.headers["x-requested-with"] = "xmlhttprequest";
        axios.defaults.headers.common.credentials = "same-origin";
        // opts.mode = 'no-cors'
        const _url = apiUrl + url
        return axios
            .post(_url, param, opts)
            .then(res => {
                return res;
            })["catch"](e => {
                throw e;
            });
    }
}

export default new Models();