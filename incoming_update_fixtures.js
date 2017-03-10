'use strict';

const attachments = require('./attachment_fixtures');

/**
 * This file defines what incoming updates look like once they've been
 * formated by a Bot class.
 * It can be used to:
 * 1) Test that your __formatUupdate() method is working as expected
 * 2) Test that your middleware is doing what you expect it to with a typical update
 *
 * If writing botClasses, you might need to heavily use or edit these objects to make
 * sure the ids match each other etc
 *
 * !!! They all come as functions, as this assures you that new objects are
 * created every time you have a need to have one.
 */

const textUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    text: 'Hello World!',
  },
});

const quickReplyUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    text: 'Hello World!', // the text that is directly in the quick reply button
    quick_reply: {
      payload: 'Hello World!', // change that to a developer defined payload if need be
    },
  },
});

const audioUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.audioAttachment(),
    ],
  },
});

const fileUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.fileAttachment(),
    ],
  },
});

const imageUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.imageAttachment(),
    ],
  },
});

const imageWithTextUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    text: 'Hello World!',
    attachments: [
      attachments.imageAttachment(),
    ],
  },
});

const videoUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.videoAttachment(),
    ],
  },
});

const payloadUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.payloadAttachment(),
    ],
  },
});

const multiAttachmentsUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    attachments: [
      attachments.imageAttachment(),
      attachments.imageAttachment(),
      attachments.videoAttachment(),
    ],
  },
});

const messageDeliveredUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  delivery: {
    mids: [
      'mid.1457764197618:41d102a3e1ae206a38',
    ],
    watermark: 1458692752477,
    seq: 1,
  },
});

// message delivered update doesn't always necessarily contain
// the mids array
const messageDeliveredWithoutMidsUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  delivery: {
    watermark: 1458692752470,
    seq: 1,
  },
});

const messageReadUpdate = rawUpdate => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752480,
  read: {
    watermark: 1458692752470,
    seq: 1,
  },
});

const echoUpdate = (rawUpdate, showMetadata) => ({
  raw: rawUpdate,
  sender: {
    id: 'user_id',
  },
  recipient: {
    id: 'bot_id',
  },
  timestamp: 1458692752478,
  message: {
    is_echo: true,
    app_id: 'some_app_id',
    // Custom string passed to the Send API as the metadata field
    metadata: showMetadata ? 'DEVELOPER_DEFINED_METADATA_STRING' : undefined,
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    seq: 1,
    text: 'Hello World!',
  },
});

module.exports = {
  textUpdate,
  quickReplyUpdate,
  audioUpdate,
  fileUpdate,
  imageUpdate,
  imageWithTextUpdate,
  payloadUpdate,
  videoUpdate,
  multiAttachmentsUpdate,
  messageDeliveredUpdate,
  messageDeliveredWithoutMidsUpdate,
  messageReadUpdate,
  echoUpdate,
};
