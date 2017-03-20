var twilio = require('twilio');
var _ = require('underscore');

var LeadSource = require('../models/LeadSource');
var Lead = require('../models/Lead');
var config = require('../config');

exports.show = function(request, response) {
  Lead.find().then(function(existingLeads) {
    return response.render('leads', {
      existingLeads: existingLeads
    });
  });
};
