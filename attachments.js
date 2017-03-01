'use strict';

/**
 * This file defines what various attachments that you might want to use in your tests
 * They are used by default in the incoming_updates and outgoing_messages
 * fixtures where appropriate
 */

const audioAttachment = () => ({
  type: 'audio',
  payload: {
    url: 'SOME_AUDIO_URL',
  },
});

const fileAttachment = () => ({
  type: 'file',
  payload: {
    url: 'SOME_FILE_URL',
  },
});

const imageAttachment = () => ({
  type: 'image',
  payload: {
    url: 'SOME_IMAGE_URL',
  },
});

const videoAttachment = () => ({
  type: 'file',
  payload: {
    url: 'SOME_VIDEO_URL',
  },
});

// These can happen when e.g. A user sends simply a URL that links to an image
// or some other kind of media. Messenger will for some reason create a fallback
// type of attachment with its own facebook URL for it (i.e. it stores the sent media file)
const payloadAttachment = () => ({
  title: 'i0.wp.com',
  url: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fi0.wp.com%2Fwww.developermemes.com%2Fwp-content%2Fuploads%2F2015%2F10%2FNow-That-You-Have-That-Feature-Done-I-Want-It-To-Do-Something-Else-Instead-Web-Developer-Meme.jpg%3Fresize%3D385%252C232&h=ATPVmc3aARMYIBYm5A3P16ERZ9KQPGXGEkAgoohtJVfayD7cjxh8laOnTHgJV0h_sEy3fQKotP3uuV1DBF7H09Gyy4i6-EsJ8oue8cIo8-KKJQIJrYP2IWk-b_BCOJYhRPlQObI&s=1&enc=AZOXAWT_VFtoYxZSN3iWPWVliiNkIImqgVQtl43-Ec01qfwYLsKmSdZJ-tdBwOvuhnKpymCXe_1dYVRFQ9APT5y5',
  type: 'fallback',
  payload: null,
});

const locationAttachment = () => ({
  title: 'Pinned Location',
  url: 'https://maps.google.com/?q=51.524498,-0.076595',
  type: 'location',
  payload: {
    coordinates: {
      lat: 51.524498,
      long: -0.076595,
    },
  },
});

module.exports = {
  audioAttachment,
  fileAttachment,
  imageAttachment,
  videoAttachment,
  payloadAttachment,
  locationAttachment,
};
