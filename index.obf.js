const a0_0xfaa77c=a0_0x338d;(function(_0x2cc5b6,_0x5b1365){const _0x56f06d=a0_0x338d,_0x5886fb=_0x2cc5b6();while(!![]){try{const _0x29e255=parseInt(_0x56f06d(0x1d9))/0x1*(-parseInt(_0x56f06d(0x1a7))/0x2)+-parseInt(_0x56f06d(0x1c2))/0x3+parseInt(_0x56f06d(0x1b6))/0x4*(-parseInt(_0x56f06d(0x209))/0x5)+-parseInt(_0x56f06d(0x1d7))/0x6+-parseInt(_0x56f06d(0x1db))/0x7*(parseInt(_0x56f06d(0x1cd))/0x8)+parseInt(_0x56f06d(0x202))/0x9+parseInt(_0x56f06d(0x1d8))/0xa;if(_0x29e255===_0x5b1365)break;else _0x5886fb['push'](_0x5886fb['shift']());}catch(_0x2b7cf8){_0x5886fb['push'](_0x5886fb['shift']());}}}(a0_0x3b52,0xdc290));const axios=require(a0_0xfaa77c(0x1fa)),chalk=require(a0_0xfaa77c(0x1d4)),cfonts=require(a0_0xfaa77c(0x1d2)),{HttpProxyAgent}=require(a0_0xfaa77c(0x1da)),{HttpsProxyAgent}=require(a0_0xfaa77c(0x1f3)),{SocksProxyAgent}=require(a0_0xfaa77c(0x1a9)),readlineSync=require('readline-sync'),fs=require('fs')[a0_0xfaa77c(0x1b1)],userAgents=[a0_0xfaa77c(0x1dc),a0_0xfaa77c(0x1b4),a0_0xfaa77c(0x1aa),a0_0xfaa77c(0x1ff),'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Edge/122.0.0.0','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/133.0.0.0\x20Safari/537.36','Mozilla/5.0\x20(Windows\x20NT\x2011.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/135.0.0.0\x20Safari/537.36',a0_0xfaa77c(0x1e5),a0_0xfaa77c(0x1c0),a0_0xfaa77c(0x1ea),a0_0xfaa77c(0x1b3),'Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:129.0)\x20Gecko/20100101\x20Firefox/129.0',a0_0xfaa77c(0x1ca),'Mozilla/5.0\x20(iPad;\x20CPU\x20OS\x2016_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/16.6\x20Mobile/15E148\x20Safari/604.1',a0_0xfaa77c(0x1f0)];function getRandomUserAgent(){const _0x26f932=a0_0xfaa77c;return userAgents[Math['floor'](Math[_0x26f932(0x1bc)]()*userAgents[_0x26f932(0x1c5)])];}cfonts[a0_0xfaa77c(0x1af)](a0_0xfaa77c(0x1e7),{'font':'block','align':a0_0xfaa77c(0x1e6),'colors':['cyan',a0_0xfaa77c(0x1ae)],'background':a0_0xfaa77c(0x1ac),'letterSpacing':0x1,'lineHeight':0x1,'space':!![],'maxLength':'0'}),console[a0_0xfaa77c(0x1f4)](chalk[a0_0xfaa77c(0x1a8)][a0_0xfaa77c(0x1ce)](a0_0xfaa77c(0x1b8)));async function readFileLines(_0x14622a){const _0x3bfaaa=a0_0xfaa77c;try{const _0x4c1e8=await fs['readFile'](_0x14622a,_0x3bfaaa(0x1e2));return _0x4c1e8[_0x3bfaaa(0x1f5)]('\x0a')[_0x3bfaaa(0x1b7)](_0x17d66c=>_0x17d66c['trim']()!=='');}catch(_0x2c27e2){return console[_0x3bfaaa(0x1e8)](chalk[_0x3bfaaa(0x1cb)](_0x3bfaaa(0x1e4)+_0x14622a+':\x20'+_0x2c27e2[_0x3bfaaa(0x1b2)])),[];}}function getProxyAgent(_0x5cedd2){const _0x4aeeeb=a0_0xfaa77c;if(_0x5cedd2[_0x4aeeeb(0x203)](_0x4aeeeb(0x1ba)))return new HttpsProxyAgent(_0x5cedd2);else{if(_0x5cedd2[_0x4aeeeb(0x203)](_0x4aeeeb(0x1c9))||_0x5cedd2[_0x4aeeeb(0x203)](_0x4aeeeb(0x1d0)))return new SocksProxyAgent(_0x5cedd2);}return null;}async function getConnectionQuality(_0x595df8,_0x3a3d96=null){const _0x106e43=a0_0xfaa77c,_0x253312={'Authorization':_0x106e43(0x1eb)+_0x595df8,'Content-Type':'application/json','Accept':_0x106e43(0x1d5),'User-Agent':getRandomUserAgent()},_0x8955c=_0x3a3d96?{'httpAgent':getProxyAgent(_0x3a3d96),'httpsAgent':getProxyAgent(_0x3a3d96)}:{};try{const _0x526702=await axios[_0x106e43(0x1bb)](_0x106e43(0x1c1),{'headers':_0x253312,..._0x8955c});return _0x526702[_0x106e43(0x1b9)]['data']||null;}catch(_0x1aea60){return console[_0x106e43(0x1e8)](chalk['red'](_0x106e43(0x1ed)+(_0x1aea60[_0x106e43(0x1f9)]?.[_0x106e43(0x1b9)]?.['message']||_0x1aea60[_0x106e43(0x1b2)]))),null;}}function a0_0x3b52(){const _0x843688=['startsWith','idle','❌\x20Error\x20claiming\x20task\x20\x22','_id','📋\x20Total\x20task:\x20','catch','803775VfAvjM','(Proxy:\x20','❌\x20Pilihan\x20tidak\x20valid!\x20Silakan\x20pilih\x201\x20atau\x202.','https://api.solixdepin.net/api/task/claim-task','pointAmount','claimed','6Fnnalq','magenta','socks-proxy-agent','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64;\x20rv:131.0)\x20Gecko/20100101\x20Firefox/131.0','🔄\x20Memproses\x20task:\x20','transparent','green','yellow','say','\x20akun...\x0a','promises','message','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_14_6)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/132.0.0.0\x20Safari/537.36','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/134.0.0.0\x20Safari/537.36','\x0a⏹️\x20Bot\x20dihentikan\x20oleh\x20pengguna\x20(Ctrl+C)','8KAEQWC','filter','\x0aScript\x20coded\x20by\x20-\x20@balveerxyz\x20|\x20Channel\x20Tele:\x20t.me/airdroplocked\x20|\x20Solix\x20DePIN\x20Management\x20🚀\x0a','data','http://','get','random','exit','SIGINT','\x0a🔄\x20Memulai\x20loop\x20untuk\x20mendapatkan\x20Connection\x20Quality...\x20(Tekan\x20Ctrl+C\x20untuk\x20berhenti)\x0a','Mozilla/5.0\x20(Android\x2014;\x20Mobile;\x20rv:130.0)\x20Gecko/130.0\x20Firefox/130.0','https://api.solixdepin.net/api/point/get-connection-quality','3364464aBltRQ','🔄\x20Task\x20tersedia\x20untuk\x20diklaim:\x20','status','length','2.\x20Get\x20Connection\x20Quality','cyan','\x0a🎉\x20Semua\x20akun\x20selesai\x20diproses!\x20🏆','socks5://','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/133.0.0.0\x20Safari/537.36\x20Edg/133.0.0.0','red','\x0a🌟\x20Memproses\x20','96XEJhxR','bold','\x20points)...','socks4://','❌\x20Fatal\x20error:\x20','cfonts','\x20🌟','chalk','application/json,\x20text/plain,\x20*/*','post','8114310hxKXRu','50324100PoqpkY','432219hPkBxd','http-proxy-agent','226093fvLvZx','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/135.0.0.0\x20Safari/537.36','toLowerCase','❌\x20File\x20proxy.txt\x20kosong\x20atau\x20tidak\x20ditemukan!\x20Melanjutkan\x20tanpa\x20proxy...','Solix\x20DePIN\x20Management:','proxy.txt','\x0a🔄\x20Akun\x20#','utf-8','⚠️\x20Tidak\x20ada\x20task\x20yang\x20bisa\x20diklaim\x20(semua\x20sudah\x20selesai)','❌\x20Error\x20reading\x20','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2017_4\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/17.4\x20Mobile/15E148\x20Safari/604.1','center','Airdrop\x20888','error','application/json','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/134.0.0.0\x20Safari/537.36\x20OPR/120.0.0.0','Bearer\x20','question','❌\x20Error\x20fetching\x20connection\x20quality:\x20','❌\x20File\x20tokens.txt\x20kosong\x20atau\x20tidak\x20ditemukan!','1.\x20Clear\x20All\x20Task','Mozilla/5.0\x20(Android\x2013;\x20Mobile;\x20rv:128.0)\x20Gecko/128.0\x20Firefox/128.0','\x22\x20sudah\x20diproses\x20sebelumnya\x20(Status:\x20','https://api.solixdepin.net/api/task/get-user-task','https-proxy-agent','log','split','\x0a🎯\x20Berhasil\x20mengklaim\x20','Mau\x20menggunakan\x20proxy?\x20(y/n):\x20','gray','response','axios','❌\x20Error:\x20','⏩\x20Task\x20\x22','trim','Pilih\x20(1/2):\x20','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2014.5)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/17.4\x20Safari/605.1.15','name','\x22:\x20','3140946fYQNxe'];a0_0x3b52=function(){return _0x843688;};return a0_0x3b52();}async function runConnectionQualityBot(_0x1ecb49,_0x2ee16d=null){const _0x58a6e5=a0_0xfaa77c;let _0x508a66=!![];process['on'](_0x58a6e5(0x1be),()=>{const _0x1fba41=_0x58a6e5;console[_0x1fba41(0x1f4)](chalk[_0x1fba41(0x1ae)](_0x1fba41(0x1b5))),_0x508a66=![],process[_0x1fba41(0x1bd)](0x0);}),console['log'](chalk[_0x58a6e5(0x1c7)](_0x58a6e5(0x1bf)));while(_0x508a66){const _0x40247a=await getConnectionQuality(_0x1ecb49,_0x2ee16d);_0x40247a!==null?console[_0x58a6e5(0x1f4)](chalk[_0x58a6e5(0x1ad)]('✅\x20Connection\x20Quality:\x20'+_0x40247a+_0x58a6e5(0x1d3))):console[_0x58a6e5(0x1f4)](chalk[_0x58a6e5(0x1cb)]('❌\x20Gagal\x20mendapatkan\x20Connection\x20Quality')),await new Promise(_0x569a73=>setTimeout(_0x569a73,0x1388));}}async function getUserTasks(_0x37c208,_0x52db62=null){const _0x5a574=a0_0xfaa77c,_0x37a14d={'Authorization':_0x5a574(0x1eb)+_0x37c208,'Content-Type':_0x5a574(0x1e9),'Accept':_0x5a574(0x1d5),'User-Agent':_0x5a574(0x1dc)},_0x3b5e60=_0x52db62?{'httpAgent':getProxyAgent(_0x52db62),'httpsAgent':getProxyAgent(_0x52db62)}:{};try{const _0x230e28=await axios[_0x5a574(0x1bb)](_0x5a574(0x1f2),{'headers':_0x37a14d,..._0x3b5e60});return _0x230e28['data'][_0x5a574(0x1b9)]||[];}catch(_0x32490d){return console[_0x5a574(0x1e8)](chalk['red']('❌\x20Error\x20fetching\x20tasks:\x20'+(_0x32490d[_0x5a574(0x1f9)]?.['data']?.[_0x5a574(0x1b2)]||_0x32490d['message']))),[];}}function a0_0x338d(_0x1dd26c,_0x28f3bd){const _0x3b52cc=a0_0x3b52();return a0_0x338d=function(_0x338d71,_0x183eb4){_0x338d71=_0x338d71-0x1a7;let _0x2a91b2=_0x3b52cc[_0x338d71];return _0x2a91b2;},a0_0x338d(_0x1dd26c,_0x28f3bd);}async function claimTask(_0x4c344d,_0x5d4a3d,_0x4ac678,_0x2d7777=null){const _0x3f818f=a0_0xfaa77c,_0x48e90b={'Authorization':_0x3f818f(0x1eb)+_0x4c344d,'Content-Type':_0x3f818f(0x1e9),'Accept':_0x3f818f(0x1d5),'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/135.0.0.0\x20Safari/537.36'},_0xb63d05={'taskId':_0x5d4a3d},_0x104917=_0x2d7777?{'httpAgent':getProxyAgent(_0x2d7777),'httpsAgent':getProxyAgent(_0x2d7777)}:{};try{const _0x5082fe=await axios[_0x3f818f(0x1d6)](_0x3f818f(0x20c),_0xb63d05,{'headers':_0x48e90b,..._0x104917});return _0x5082fe[_0x3f818f(0x1b9)]['result']==='success'?(console['log'](chalk['green']('✅\x20Task\x20\x22'+_0x4ac678+'\x22\x20berhasil\x20diklaim!')),!![]):(console['log'](chalk[_0x3f818f(0x1cb)]('❌\x20Gagal\x20mengklaim\x20task\x20\x22'+_0x4ac678+'\x22')),![]);}catch(_0xba64a2){return console[_0x3f818f(0x1e8)](chalk['red'](_0x3f818f(0x205)+_0x4ac678+_0x3f818f(0x201)+(_0xba64a2[_0x3f818f(0x1f9)]?.['data']?.[_0x3f818f(0x1b2)]||_0xba64a2[_0x3f818f(0x1b2)]))),![];}}async function clearTasks(_0x56396a,_0x1e06f7=null){const _0x2c58d0=a0_0xfaa77c;try{const _0x1da8c0=await getUserTasks(_0x56396a,_0x1e06f7);if(!_0x1da8c0||_0x1da8c0[_0x2c58d0(0x1c5)]===0x0){console[_0x2c58d0(0x1f4)](chalk[_0x2c58d0(0x1ae)]('⚠️\x20Tidak\x20ada\x20task\x20yang\x20tersedia'));return;}const _0x3e3f41=_0x1da8c0[_0x2c58d0(0x1b7)](_0x23146f=>_0x23146f[_0x2c58d0(0x1c4)]===_0x2c58d0(0x204)),_0x50751e=_0x1da8c0[_0x2c58d0(0x1b7)](_0x14c6a8=>_0x14c6a8[_0x2c58d0(0x1c4)]===_0x2c58d0(0x20e));console[_0x2c58d0(0x1f4)](chalk['blue'](_0x2c58d0(0x207)+_0x1da8c0['length'])),console[_0x2c58d0(0x1f4)](chalk['green']('✅\x20Task\x20sudah\x20diklaim:\x20'+_0x50751e[_0x2c58d0(0x1c5)])),console['log'](chalk[_0x2c58d0(0x1c7)](_0x2c58d0(0x1c3)+_0x3e3f41[_0x2c58d0(0x1c5)]+'\x0a'));if(_0x3e3f41[_0x2c58d0(0x1c5)]===0x0){console['log'](chalk['yellow'](_0x2c58d0(0x1e3)));return;}let _0x49d819=0x0;for(const _0x126c22 of _0x1da8c0){if(_0x126c22[_0x2c58d0(0x1c4)]==='idle'){console[_0x2c58d0(0x1f4)](chalk[_0x2c58d0(0x1c7)](_0x2c58d0(0x1ab)+_0x126c22[_0x2c58d0(0x200)]+'\x20('+_0x126c22[_0x2c58d0(0x20d)]+_0x2c58d0(0x1cf)));const _0x4979db=await claimTask(_0x56396a,_0x126c22[_0x2c58d0(0x206)],_0x126c22[_0x2c58d0(0x200)],_0x1e06f7);if(_0x4979db)_0x49d819++;await new Promise(_0x1a005b=>setTimeout(_0x1a005b,0x5dc));}else console[_0x2c58d0(0x1f4)](chalk[_0x2c58d0(0x1f8)](_0x2c58d0(0x1fc)+_0x126c22[_0x2c58d0(0x200)]+_0x2c58d0(0x1f1)+_0x126c22[_0x2c58d0(0x1c4)]+')'));}console['log'](chalk[_0x2c58d0(0x1ad)](_0x2c58d0(0x1f6)+_0x49d819+'/'+_0x3e3f41[_0x2c58d0(0x1c5)]+'\x20task\x20baru!'));}catch(_0x3dcfa1){console['error'](chalk['red'](_0x2c58d0(0x1fb)+_0x3dcfa1['message']));}}async function main(){const _0x2e5864=a0_0xfaa77c;console[_0x2e5864(0x1f4)](chalk[_0x2e5864(0x1c7)](_0x2e5864(0x1df))),console[_0x2e5864(0x1f4)](chalk['cyan']('Pilih\x20mau\x20tugas')),console[_0x2e5864(0x1f4)](chalk[_0x2e5864(0x1c7)](_0x2e5864(0x1ef))),console[_0x2e5864(0x1f4)](chalk['cyan'](_0x2e5864(0x1c6)));const _0x560644=readlineSync[_0x2e5864(0x1ec)](chalk[_0x2e5864(0x1c7)](_0x2e5864(0x1fe)));if(_0x560644!=='1'&&_0x560644!=='2'){console[_0x2e5864(0x1f4)](chalk[_0x2e5864(0x1cb)](_0x2e5864(0x20b)));return;}const _0x3adba6=readlineSync[_0x2e5864(0x1ec)](chalk[_0x2e5864(0x1c7)](_0x2e5864(0x1f7)))[_0x2e5864(0x1dd)]();let _0x36c4b3=[];_0x3adba6==='y'&&(_0x36c4b3=await readFileLines(_0x2e5864(0x1e0)),_0x36c4b3[_0x2e5864(0x1c5)]===0x0&&console[_0x2e5864(0x1f4)](chalk[_0x2e5864(0x1cb)](_0x2e5864(0x1de))));const _0x1d6294=await readFileLines('tokens.txt');if(_0x1d6294[_0x2e5864(0x1c5)]===0x0){console['log'](chalk[_0x2e5864(0x1cb)](_0x2e5864(0x1ee)));return;}console['log'](chalk[_0x2e5864(0x1a8)](_0x2e5864(0x1cc)+_0x1d6294[_0x2e5864(0x1c5)]+_0x2e5864(0x1b0)));for(let _0x26f346=0x0;_0x26f346<_0x1d6294[_0x2e5864(0x1c5)];_0x26f346++){const _0x65fbd7=_0x1d6294[_0x26f346][_0x2e5864(0x1fd)](),_0x653bcd=_0x36c4b3['length']>0x0?_0x36c4b3[_0x26f346%_0x36c4b3[_0x2e5864(0x1c5)]]:null;console['log'](chalk['yellow'](_0x2e5864(0x1e1)+(_0x26f346+0x1)+'\x20'+(_0x653bcd?_0x2e5864(0x20a)+_0x653bcd+')':''))),_0x560644==='1'?await clearTasks(_0x65fbd7,_0x653bcd):await runConnectionQualityBot(_0x65fbd7,_0x653bcd),_0x26f346<_0x1d6294[_0x2e5864(0x1c5)]-0x1&&(console['log'](chalk[_0x2e5864(0x1f8)]('⏳\x20Delay\x203\x20detik\x20sebelum\x20akun\x20berikutnya...')),await new Promise(_0x210b01=>setTimeout(_0x210b01,0xbb8)));}console[_0x2e5864(0x1f4)](chalk[_0x2e5864(0x1ad)](_0x2e5864(0x1c8)));}main()[a0_0xfaa77c(0x208)](_0x5d328e=>{const _0x289ef2=a0_0xfaa77c;console[_0x289ef2(0x1e8)](chalk[_0x289ef2(0x1cb)](_0x289ef2(0x1d1)+_0x5d328e[_0x289ef2(0x1b2)])),process[_0x289ef2(0x1bd)](0x1);});