'use strict';const _0x1eddf8=_0x4039;function _0x4dce(){const _0x53e3a7=['3119522PTRlom','get','12125mXaCDE','error','existsSync','cwd','3270yRxoir','27213xLeapO','trace','getMonth','412890uVtFJJ','10083986tpQNOK','7020304DJrYei','warn','40fHIpYv','__esModule','getFullYear','11153163tYjdzv','debug','mkdir','parse','ZvRsZ','dayRotatedFileStream','logs','info','45KhpHuc','1RUbPZk','appendFile','set','defineProperty'];_0x4dce=function(){return _0x53e3a7;};return _0x4dce();}(function(_0x490d9f,_0x599b20){const _0x2ed9ae=_0x4039,_0xc21a60=_0x490d9f();while(!![]){try{const _0x131fad=-parseInt(_0x2ed9ae(0x19f))/0x1*(parseInt(_0x2ed9ae(0x1a3))/0x2)+parseInt(_0x2ed9ae(0x1aa))/0x3*(parseInt(_0x2ed9ae(0x193))/0x4)+-parseInt(_0x2ed9ae(0x1a5))/0x5*(parseInt(_0x2ed9ae(0x1a9))/0x6)+parseInt(_0x2ed9ae(0x196))/0x7+parseInt(_0x2ed9ae(0x191))/0x8+-parseInt(_0x2ed9ae(0x19e))/0x9*(-parseInt(_0x2ed9ae(0x18f))/0xa)+parseInt(_0x2ed9ae(0x190))/0xb;if(_0x131fad===_0x599b20)break;else _0xc21a60['push'](_0xc21a60['shift']());}catch(_0x4787cf){_0xc21a60['push'](_0xc21a60['shift']());}}}(_0x4dce,0xc420e));Object[_0x1eddf8(0x1a2)](exports,_0x1eddf8(0x194),{'value':!![]}),exports[_0x1eddf8(0x19b)]=void 0x0;const fs_1=require('fs'),promises_1=require('fs/promises'),path_1=require('path'),levels=new Map();levels['set'](0xa,_0x1eddf8(0x18d)),levels[_0x1eddf8(0x1a1)](0x14,_0x1eddf8(0x197)),levels[_0x1eddf8(0x1a1)](0x1e,_0x1eddf8(0x19d)),levels[_0x1eddf8(0x1a1)](0x28,_0x1eddf8(0x192)),levels['set'](0x32,_0x1eddf8(0x1a6)),levels[_0x1eddf8(0x1a1)](0x3c,'fatal');const logDir=(0x0,path_1['join'])(process[_0x1eddf8(0x1a8)](),_0x1eddf8(0x19c));function dayRotatedFileStream(){const _0x2a72f0={'ZvRsZ':function(_0x2c6c,_0x59596b){return _0x2c6c+_0x59596b;}},_0x2f1fae={async 'write'(_0x50bff4){const _0x132315=_0x4039,_0xeb9ac1=JSON[_0x132315(0x199)](_0x50bff4),_0x216279=levels[_0x132315(0x1a4)](_0xeb9ac1['level']);delete _0xeb9ac1['level'];const _0x3cb997=new Date(),_0x233298=(0x0,path_1['join'])(logDir,_0x216279);!(0x0,fs_1[_0x132315(0x1a7)])(_0x233298)&&await(0x0,promises_1[_0x132315(0x198)])(_0x233298,{'recursive':!![]});const _0x37c869=_0x216279+('_'+_0x3cb997[_0x132315(0x195)]()+'_'+_0x2a72f0[_0x132315(0x19a)](_0x3cb997[_0x132315(0x18e)](),0x1)+'_'+_0x3cb997['getDate']()+'.json');await(0x0,promises_1[_0x132315(0x1a0)])((0x0,path_1['join'])(_0x233298,_0x37c869),JSON['stringify'](_0xeb9ac1,null,0x2));}};return _0x2f1fae;}function _0x4039(_0x24fd44,_0x26de59){const _0x4dce0e=_0x4dce();return _0x4039=function(_0x40399c,_0xcec7b7){_0x40399c=_0x40399c-0x18d;let _0x4ce01b=_0x4dce0e[_0x40399c];return _0x4ce01b;},_0x4039(_0x24fd44,_0x26de59);}exports[_0x1eddf8(0x19b)]=dayRotatedFileStream;