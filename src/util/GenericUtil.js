
export default class GenericUtil {

    static nvl(obj, key) {
        return key.split(".").reduce(function(o, x) {
            return (typeof o == "undefined" || o === null) ? o : o[x];
        }, obj);
    }

    static parseFloat(strNumber){
        var parsed = Number.parseFloat(strNumber);
        if (Number.isNaN(parsed)) {
            return null;
        }
        return parsed;
    }

    static numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

}