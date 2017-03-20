var twilio = require('twilio');
var _ = require('underscore');

var LeadSource = require('../models/LeadSource');
var Leads = require('../models/Lead');
var config = require('../config');

exports.show = function(request, response) {
  LeadSource.find().then(function(leadSources) {
    return response.render('dashboard', {
      leadSources: leadSources,
      appSid: config.appSid
    });
  });
};
