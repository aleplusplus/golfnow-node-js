/*!
 * golfnow
 * Copyright (c) 2016 Alejandro Labrada Diaz
 * MIT Licensed
 */

'use strict';

var Request = require('./request').Request;
var util = require('util');

exports.Reservation = module.exports.Reservation = Reservation;

util.inherits(Reservation, Request);

function Reservation(application, channelId, customerEmail, reservationId, options) {
    var self = this;

    self.channelId = channelId;
    self.customerEmail = customerEmail;
    self.reservationId = reservationId;

    Reservation.super_.apply(this, [application, options]);
}

Reservation.prototype._headers = function() {
    var headers = Reservation.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

Reservation.prototype._requestOptions = function() {
    var request_options = Reservation.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint +
        'channels/' + this.channelId +
        '/customers/' + this.customerEmail +
        '/reservations/' + this.reservationId;
    request_options.method = 'GET';

    return request_options
};

Reservation.prototype.end = function() {

    Reservation.super_.prototype.end.apply(this, arguments);
};


exports.CreateReservation = module.exports.CreateReservation = CreateReservation;

util.inherits(CreateReservation, Request);

function CreateReservation(application, channelId, invoiceId, golferInfo, paymentInfo, options) {
    var self = this;

    self.channelId = channelId;
    self.invoiceId = invoiceId;
    self.golferInfo = golferInfo;
    self.paymentInfo = paymentInfo;

    CreateReservation.super_.apply(this, [application, options]);
}

CreateReservation.prototype._headers = function() {
    var headers = CreateReservation.super_.prototype._headers.apply(this, arguments);

    headers['Content-Type'] = 'application/json; charset=utf-8';

    return headers;
};

CreateReservation.prototype._requestOptions = function() {
    var request_options = CreateReservation.super_.prototype._requestOptions.apply(this, arguments);

    request_options.path = this.endpoint + 'channels/' + this.channelId + '/reservations';
    request_options.method = 'POST';

    return request_options
};

CreateReservation.prototype.end = function() {
    var self = this;

    self.write(JSON.stringify({
        invoiceId: self.invoiceId,
        golferInfo: self.golferInfo,
        paymentInfo: self.paymentInfo
    }));

    CreateReservation.super_.prototype.end.apply(this, arguments);
};