angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '林志玲',
    lastText: '什么啊',
    cohesion: '9.1',
    likeDateTime: '2015.09.17 23:35',
    face: 'img/a1.jpg'
  }, {
    id: 1,
    name: '范冰冰',
    lastText: '好呀',
    cohesion: '8.4',
    likeDateTime: '2015.09.17 22:49',
    face: 'img/a2.jpg'
  }, {
    id: 2,
    name: '唐嫣',
    lastText: '节操碎一地了',
    cohesion: '7.9',
    likeDateTime: '2015.09.17 22:03',
    face: 'img/a3.jpg'
  }, {
    id: 3,
    name: '杨幂',
    lastText: '什么啊，不明白耶',
    cohesion: '6.3',
    likeDateTime: '2015.09.17 20:34',
    face: 'img/a4.jpg'
  }, {
    id: 4,
    name: '高圆圆',
    lastText: '那就这么定了咯',
    cohesion: '3.1',
    likeDateTime: '2015.09.17 18:35',
    face: 'img/a0.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
