'use strict';const _0x63b6d8=_0x2f93;(function(_0x70c4a4,_0x1fcb21){const _0x27b595=_0x2f93,_0x3c6f12=_0x70c4a4();while(!![]){try{const _0x1e6da7=parseInt(_0x27b595(0xe2))/0x1+-parseInt(_0x27b595(0xd2))/0x2+-parseInt(_0x27b595(0xe4))/0x3*(parseInt(_0x27b595(0xe0))/0x4)+parseInt(_0x27b595(0xd4))/0x5+-parseInt(_0x27b595(0xe6))/0x6*(parseInt(_0x27b595(0xd0))/0x7)+-parseInt(_0x27b595(0xda))/0x8*(-parseInt(_0x27b595(0xe3))/0x9)+parseInt(_0x27b595(0xd9))/0xa*(-parseInt(_0x27b595(0xdb))/0xb);if(_0x1e6da7===_0x1fcb21)break;else _0x3c6f12['push'](_0x3c6f12['shift']());}catch(_0x12bf97){_0x3c6f12['push'](_0x3c6f12['shift']());}}}(_0x4970,0xcecf7));function _0x4970(){const _0x4a7494=['log','40WPYpju','./top-tracks/top-tracks','866771oDcPVL','171657sJkgVU','78213gbHXIm','Registered\x20API\x20Plugin','5322396gBAIjT','default','./playlists/playlists','defineProperty','7YNhBNt','addPrehandlers','826586fMeUbZ','__importDefault','6817710ZYNSQJ','../../common/prehandlers/requires-authenticated','requiresAuthenticated','apiPlugin','__esModule','20FJQqGI','392LtlUQH','4161993TbUcUJ','registerPlugins','./new-releases/new-releases','info'];_0x4970=function(){return _0x4a7494;};return _0x4970();}var __importDefault=this&&this[_0x63b6d8(0xd3)]||function(_0x53e68c){return _0x53e68c&&_0x53e68c['__esModule']?_0x53e68c:{'default':_0x53e68c};};Object[_0x63b6d8(0xcf)](exports,_0x63b6d8(0xd8),{'value':!![]}),exports[_0x63b6d8(0xd7)]=void 0x0;function _0x2f93(_0x11442f,_0x4baa56){const _0x497058=_0x4970();return _0x2f93=function(_0x2f93df,_0x327dae){_0x2f93df=_0x2f93df-0xcd;let _0x471801=_0x497058[_0x2f93df];return _0x471801;},_0x2f93(_0x11442f,_0x4baa56);}const user_details_1=__importDefault(require('./user-details/user-details')),requires_authenticated_1=require(_0x63b6d8(0xd5)),add_prehandlers_1=__importDefault(require('../utils/add-prehandlers')),playlists_1=__importDefault(require(_0x63b6d8(0xce))),new_releases_1=__importDefault(require(_0x63b6d8(0xdd))),top_tracks_1=__importDefault(require(_0x63b6d8(0xe1))),apiPlugin=async function apiPlugin(_0x468c5b,{apiOptions:_0x5a76e5}){const _0x29afa7=_0x63b6d8,_0x3f12ba={'KZRNG':_0x29afa7(0xe5)};await _0x468c5b['register'](add_prehandlers_1[_0x29afa7(0xcd)]),_0x468c5b[_0x29afa7(0xd1)]([requires_authenticated_1[_0x29afa7(0xd6)]]);const {userDetailsAPIEndpoint:_0x36de6d,playListsAPIOptions:_0xb4f296,newReleasesAPIEndpoint:_0x1da97c}=_0x5a76e5;await _0x468c5b[_0x29afa7(0xdc)]([{'plugin':user_details_1[_0x29afa7(0xcd)],'options':{'userDetailsAPIEndpoint':_0x36de6d}},{'plugin':playlists_1[_0x29afa7(0xcd)],'options':{'playListsAPIOptions':_0xb4f296}},{'plugin':new_releases_1[_0x29afa7(0xcd)],'options':{'newReleasesAPIEndpoint':_0x1da97c}},{'plugin':top_tracks_1['default']}]),_0x468c5b[_0x29afa7(0xdf)][_0x29afa7(0xde)](_0x3f12ba['KZRNG']);};exports[_0x63b6d8(0xd7)]=apiPlugin;