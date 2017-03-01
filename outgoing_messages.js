'use strict';

const attachments = require('./attachments');

const textMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'HelloWorld!',
  },
});

const audioMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachments: attachments.audioAttachment(),
  },
});

const fileMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachments: attachments.fileAttachment(),
  },
});

const imageMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachments: attachments.imageAttachment(),
  },
});

const videoMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    attachments: attachments.imageAttachment(),
  },
});

const textOnlyQuickReplyMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  message: {
    text: 'Pick one of the following:',
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
    text: 'Pick one of the following:',
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
  sender_action: 'typing_on',
});

const markSeenMessage = () => ({
  recipient: {
    id: 'user_id',
  },
  sender_action: 'typing_on',
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
  typingOnMessage,
  typingOffMessage,
  markSeenMessage,
  outgoingMessageResponse,
};
