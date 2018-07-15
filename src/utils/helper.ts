export interface BearerToken {
    AccessToken: any;
    ExpiresOn: Date;
}

export interface OAuth2Info {
    OAuth2Authority: string;
    OAuth2ClientId: string;
    OAuth2RedirectUri: string;
    OAuth2ResourceIdentifier: string;
    OAuth2TokenService: string;
}

class Helper {
    static TokenCookieName = "accesstokencookie_temp";

    static GUIDEmpty = "00000000-0000-0000-0000-000000000000";

    static O

    static guid = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    static getParameterByNameFromUri = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    static getQueryVariable = (variable: string) =>
    {
        var query = window.location.search.substring(1);
        if (!query && window.location.pathname.indexOf("%3F") > -1) {
            query = window.location.pathname.split("%3F")[1];
        }
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                var value = pair[1];
                return value? decodeURI(value) : null;
            }
        }
        return (false);
    }
}

export default Helper;