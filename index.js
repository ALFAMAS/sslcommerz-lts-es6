import SslCommerzPayment from "./api/payment-controller.js";

class SSLCommerzPayment extends SslCommerzPayment {
    constructor(store_id, store_password, live = false) {
        super(store_id, store_password, live);
    }
}

export default SSLCommerzPayment;
