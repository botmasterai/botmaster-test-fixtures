'use strict';

const attachments = require('./attachment_fixtures');

const textMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'Hello World!',
  },
});

const audioMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachment: attachments.audioAttachment(),
  },
});

const fileMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachment: attachments.fileAttachment(),
  },
});

const imageMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachment: attachments.imageAttachment(),
  },
});

const videoMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachment: attachments.imageAttachment(),
  },
});

const textOnlyQuickReplyMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'Please select one of:',
    quick_replies: [
      {
        content_type: 'text',
        title: 'Button 1',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
      },
      {
        content_type: 'text',
        title: 'Button 2',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN',
      },
    ],
  },
});

// Not expected to be part of the default botmaster
const textAndImageURLQuickReplyMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'Please select one of:',
    quick_replies: [
      {
        content_type: 'text',
        title: 'Button 1',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
        image_url: 'http://botmasterai.com/images/favicon.ico',
      },
      {
        content_type: 'text',
        title: 'Button 2',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN',
        image_url: 'http://botmasterai.com/images/favicon.ico',
      },
    ],
  },
});

const locationQuickReplyMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'Please share your location:',
    quick_replies: [
      {
        content_type: 'location',
      },
    ],
  },
});

const typingOnMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  sender_action: 'typing_on',
});

const typingOffMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  sender_action: 'typing_off',
});

const markSeenMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  sender_action: 'mark_seen',
});

const outgoingMessageResponse = () => ({
  recipient_id: 'user_id',
  message_id: 'message_id',
});

module.exports = {
  textMessage,
  audioMessage,
  fileMessage,
  imageMessage,
  videoMessage,
  textOnlyQuickReplyMessage,
  textAndImageURLQuickReplyMessage,
  locationQuickReplyMessage,
  typingOnMessage,
  typingOffMessage,
  markSeenMessage,
  outgoingMessageResponse,
};
