'use strict';const _0x461349=_0x56c7;function _0x56c7(_0x4eb9d6,_0x479092){const _0x472dae=_0x472d();return _0x56c7=function(_0x56c7b0,_0x3b3b6e){_0x56c7b0=_0x56c7b0-0xb4;let _0x435fe0=_0x472dae[_0x56c7b0];return _0x435fe0;},_0x56c7(_0x4eb9d6,_0x479092);}(function(_0x414134,_0x439fdd){const _0x5c3a7d=_0x56c7,_0x2d94c6=_0x414134();while(!![]){try{const _0x192724=-parseInt(_0x5c3a7d(0xc3))/0x1+parseInt(_0x5c3a7d(0xb9))/0x2+parseInt(_0x5c3a7d(0xbe))/0x3*(-parseInt(_0x5c3a7d(0xbb))/0x4)+-parseInt(_0x5c3a7d(0xc0))/0x5+parseInt(_0x5c3a7d(0xc6))/0x6*(parseInt(_0x5c3a7d(0xc8))/0x7)+parseInt(_0x5c3a7d(0xb8))/0x8+parseInt(_0x5c3a7d(0xbd))/0x9;if(_0x192724===_0x439fdd)break;else _0x2d94c6['push'](_0x2d94c6['shift']());}catch(_0x2468da){_0x2d94c6['push'](_0x2d94c6['shift']());}}}(_0x472d,0xbfcae));var __importDefault=this&&this[_0x461349(0xc7)]||function(_0x475e56){const _0x28694b=_0x461349;return _0x475e56&&_0x475e56[_0x28694b(0xc9)]?_0x475e56:{'default':_0x475e56};};Object['defineProperty'](exports,_0x461349(0xc9),{'value':!![]});const fastify_plugin_1=__importDefault(require(_0x461349(0xc2))),topTracks=async function topTracks(_0x17dc87){const _0x90447c=_0x461349,_0x3ee099={'xQhXW':'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5','GtOuS':function(_0x437113,_0x1657e8){return _0x437113!==_0x1657e8;},'pkHJP':_0x90447c(0xbc)};_0x17dc87[_0x90447c(0xb6)](_0x3ee099[_0x90447c(0xc1)],async(_0x27815b,_0x34f157)=>{const _0x2f09b6=_0x90447c;try{const _0x153767=await _0x27815b[_0x2f09b6(0xb7)]({'url':_0x3ee099[_0x2f09b6(0xbf)]});if(_0x3ee099['GtOuS'](_0x153767?.['statusText']['toLowerCase'](),'ok'))throw new Error(_0x2f09b6(0xb5)+_0x153767?.[_0x2f09b6(0xb4)]);return _0x34f157[_0x2f09b6(0xca)](_0x153767[_0x2f09b6(0xc4)]);}catch(_0x55e513){_0x17dc87['log']['error'](_0x55e513,_0x2f09b6(0xba)),_0x34f157['code'](0x1f4)[_0x2f09b6(0xca)](_0x55e513);}});};function _0x472d(){const _0x1a876e=['676806WPdVRY','__importDefault','77CBpQJG','__esModule','send','status','Request\x20failed\x20with\x20status:\x20','get','spotifyGetRequest','7119008XLGyHu','1883468WRqSKd','Failed\x20to\x20fetch\x20top\x20tracks.','76DWBeQY','/api/top-tracks','457794tvgkMT','138402tyPjxf','xQhXW','1318345NFdHfn','pkHJP','fastify-plugin','1197490Qheozp','data','default'];_0x472d=function(){return _0x1a876e;};return _0x472d();}exports[_0x461349(0xc5)]=(0x0,fastify_plugin_1[_0x461349(0xc5)])(topTracks);