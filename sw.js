if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()})),i.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},i=(i,s)=>{Promise.all(i.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(i)};self.define=(i,r,a)=>{s[i]||(s[i]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return s;case"module":return c;default:return e(i)}})).then(e=>{const i=a(...e);return s.default||(s.default=i),s})}))}}define("./sw.js",["./workbox-8f032362"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/bootstrap.min.css",revision:"6fc9e95a4de3ce57247d5e455458df9b"},{url:"css/custom.css",revision:"deb635a2183fba2e6feae4e40e7eec41"},{url:"css/font-awesome.min.css",revision:"4083f5d376eb849a458cc790b53ba080"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"fonts/classy.eot",revision:"4dfb9d1976a2838d7d019e4ca2ff64d5"},{url:"fonts/classy.svg",revision:"cceceb330a698645d365cfd0e571f043"},{url:"fonts/classy.ttf",revision:"c6dd5e6e6b7590465f1175a6e8953565"},{url:"fonts/classy.woff",revision:"999ab95a97ed648512c4e9fd82441129"},{url:"fonts/DroidKufi-Regular.ttf",revision:"a9b030e29a35f523a137ee0175be419f"},{url:"fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"fonts/FontAwesome.otf",revision:"0d2717cd5d853e5c765ca032dfd41a4d"},{url:"fonts/icomoon.eot",revision:"6265cb4328de993eb7086246387a3efc"},{url:"fonts/icomoon.svg",revision:"c2a44f17e3e1175e08a4d90527c42fc1"},{url:"fonts/icomoon.ttf",revision:"57ed60cd26d522595d083606b702dcc3"},{url:"fonts/icomoon.woff",revision:"42405d8d80aa5f70b6c9304033bff37d"},{url:"images/ads/1000009279.jpg",revision:"187fdbf21ce5f4db2357d9c480240fd1"},{url:"images/ads/aside-ad.jpg",revision:"e51143455c0f8434ee971d27f64e2c1b"},{url:"images/ads/footer-ad-1.jpg",revision:"7fbc042fd3562c03e52a883a57ea79c0"},{url:"images/ads/footer-ad-2.jpg",revision:"3b97774a7906c25ff7b6441d2d9cad91"},{url:"images/ads/footer-ad-3.jpg",revision:"7fbc042fd3562c03e52a883a57ea79c0"},{url:"images/ads/footer-ad-4.jpg",revision:"3b97774a7906c25ff7b6441d2d9cad91"},{url:"images/ads/hr.jpg",revision:"b59175b13d1b49106985f4019bb9d31a"},{url:"images/bg-cta.jpg",revision:"36ddbb2de498313fdacd1b2a64eb8363"},{url:"images/icons/basket.png",revision:"da7e9e550f1536e677d3979ac1358ced"},{url:"images/icons/Chat.png",revision:"51b52ad92e492fbb5c31f315aeb53981"},{url:"images/icons/contact.jpg",revision:"759235273ce6d38fb354a2a22319edc3"},{url:"images/icons/envelope.png",revision:"a59bfccc13260ac718bef87361cd10d2"},{url:"images/icons/Home.png",revision:"9dff996c92f685b515e079a3f9385577"},{url:"images/icons/logo.png",revision:"d8fc46896eb9dae9190302d0e370bc9b"},{url:"images/icons/products.png",revision:"6e34c89e93c4529729c5e272846a0c10"},{url:"images/icons/stamp.png",revision:"9c034ff757da02757fcfd9085270cab4"},{url:"images/loading/ink.png",revision:"7e4eaacbfd1604bc67c02cdd927f7914"},{url:"images/products/battery/battery1.jpg",revision:"c05a25cd86f1455fe02372c722fc1a79"},{url:"images/products/battery/battery10.jpg",revision:"be72e7f4da1b416801e7f91721d82cd7"},{url:"images/products/battery/battery11.jpg",revision:"e9afc60c94ab2ceb744e05331876c241"},{url:"images/products/battery/battery12.jpg",revision:"6d33b0b64415a29374e8b64752642726"},{url:"images/products/battery/battery13.jpg",revision:"3a75ab12afb69108d719d9aeb8d8e850"},{url:"images/products/battery/battery14.jpg",revision:"6822b13c725e972385672def26d6c6fc"},{url:"images/products/battery/battery15.jpg",revision:"443b5e37c538a926f198cb009fae1a14"},{url:"images/products/battery/battery16.jpg",revision:"16859ae4f8ea4c48b86c75d95467c44c"},{url:"images/products/battery/battery17.jpg",revision:"443b5e37c538a926f198cb009fae1a14"},{url:"images/products/battery/battery18.jpg",revision:"ac17394419662bce1b70a7c31f0dc840"},{url:"images/products/battery/battery19.jpg",revision:"ac17394419662bce1b70a7c31f0dc840"},{url:"images/products/battery/battery2.jpg",revision:"ee11306bd78f68995024cdff8c124a1a"},{url:"images/products/battery/battery20.jpg",revision:"424f7b8c35daf51d4e4b6b4318e60eff"},{url:"images/products/battery/battery21.jpg",revision:"0c823c10a7217453a00737a65c7c6a52"},{url:"images/products/battery/battery22.jpg",revision:"6723aa8b0d4eb2cb97cf556fd3b6f503"},{url:"images/products/battery/battery23.jpg",revision:"8fed0c2bed42fe23b12b42870b522b74"},{url:"images/products/battery/battery24.jpg",revision:"6723aa8b0d4eb2cb97cf556fd3b6f503"},{url:"images/products/battery/battery25.jpg",revision:"7ae9a0bbaf8deddfb83a05d3c2d25e07"},{url:"images/products/battery/battery26.jpg",revision:"0071720628ee5f3ad339b1b258f49244"},{url:"images/products/battery/battery27.jpg",revision:"1e636085899fdddb475ac2db2823c339"},{url:"images/products/battery/battery28.jpg",revision:"52c00703ea7013797135778e45ec726d"},{url:"images/products/battery/battery29.jpg",revision:"4cf66dd1127ebd6ca4422484cfbeef94"},{url:"images/products/battery/battery3.jpg",revision:"67ba7451df2ea348f2cd42578f575542"},{url:"images/products/battery/battery30.jpg",revision:"9ab8b0858b0f1c41c0511630557e1533"},{url:"images/products/battery/battery31.jpg",revision:"3949d7b9c915fb4e51a1ba735e8a1574"},{url:"images/products/battery/battery32.jpg",revision:"dd594c617c98e3cbcde6730175b08f5f"},{url:"images/products/battery/battery33.jpg",revision:"066d63531c7d1ddcbddccc02b18cca21"},{url:"images/products/battery/battery4.jpg",revision:"e499726663683c52d96c2df9d4cf2bb4"},{url:"images/products/battery/battery5.jpg",revision:"e9afc60c94ab2ceb744e05331876c241"},{url:"images/products/battery/battery6.jpg",revision:"b0a0c0566959ce6629effa84188d4203"},{url:"images/products/battery/battery7.jpg",revision:"824dade314649537ba3eff363468307a"},{url:"images/products/battery/battery8.jpg",revision:"80183d7638767c92bc8ba3c5c905b2b5"},{url:"images/products/battery/battery9.jpg",revision:"1c230f3d8f88fe5ce2b5ab496a713c2f"},{url:"images/products/beauty/cream1.jpg",revision:"8cd854b57be9223e3bddfaae8a680bb4"},{url:"images/products/beauty/cream2.jpg",revision:"065a3b816048c209daeb4cedf94d53eb"},{url:"images/products/beauty/cream3.jpg",revision:"aac28797fd2161a9808a21c1667a83a5"},{url:"images/products/beauty/leis.jpg",revision:"21ae880042b58ca305da2443b316b5a6"},{url:"images/products/beauty/leis2.jpg",revision:"0f43cffa4abcba43fd412505a3932429"},{url:"images/products/beauty/leis3.jpg",revision:"70d757f9d5a482f20066f99cc76909bd"},{url:"images/products/beauty/leis4.jpg",revision:"3cde845cc3e79f363f9fde00d90f78f0"},{url:"images/products/beauty/leis5.jpg",revision:"d1b8bd2ac4d1a610e2c7fca1fd023e53"},{url:"images/products/beauty/leis6.jpg",revision:"3567cba7f0eece402875c0383df36fea"},{url:"images/products/beauty/mekiaj.jpg",revision:"f0b7194a5309d3e4b8bc19e7745a727c"},{url:"images/products/beauty/necklace.jpg",revision:"3aff21d113f11186ea95cd10a2148f16"},{url:"images/products/beauty/perfume1.jpg",revision:"b18e9401e78250654d2ad2eed02197e5"},{url:"images/products/beauty/perfume2.jpg",revision:"a4857911249c4dcdb15f4875f6c58a7b"},{url:"images/products/beauty/perfume3.jpg",revision:"e20071ee77c987400a8b3858b4398074"},{url:"images/products/beauty/perfume4.jpg",revision:"fc1e0c77efd7980f009e670b465cfb18"},{url:"images/products/bedrooms/bedroom1.jpg",revision:"3eaf929e9bcbaff2b35b0d0a2fbd000f"},{url:"images/products/bedrooms/bedroom10.jpg",revision:"3c8f8e0f82d88125194895b0e4adaad3"},{url:"images/products/bedrooms/bedroom11.jpg",revision:"4785be1092994f606d206131c7ef7118"},{url:"images/products/bedrooms/bedroom12.jpg",revision:"640e2d4470a368b6ee76d37b5eef89fb"},{url:"images/products/bedrooms/bedroom13.jpg",revision:"322babf719d3cbdea3a2e0d08046cb49"},{url:"images/products/bedrooms/bedroom14.jpg",revision:"01cf0010903cf90d35ebed0f5f7a3ff2"},{url:"images/products/bedrooms/bedroom15.jpg",revision:"cda294a992f685528ea4375127e169d4"},{url:"images/products/bedrooms/bedroom16.jpg",revision:"b1bac8de95dcf3c4c918eaa850b1f747"},{url:"images/products/bedrooms/bedroom18.jpg",revision:"4785be1092994f606d206131c7ef7118"},{url:"images/products/bedrooms/bedroom2.jpg",revision:"b1bac8de95dcf3c4c918eaa850b1f747"},{url:"images/products/bedrooms/bedroom3.jpg",revision:"4262d9ec96d5f539e0b3fa9d3f66ad68"},{url:"images/products/bedrooms/bedroom4.jpg",revision:"b23f8b4bbdfd374291589d50b74e26b4"},{url:"images/products/bedrooms/bedroom5.jpg",revision:"3eaf929e9bcbaff2b35b0d0a2fbd000f"},{url:"images/products/bedrooms/bedroom6.jpg",revision:"322babf719d3cbdea3a2e0d08046cb49"},{url:"images/products/bedrooms/bedroom9.jpg",revision:"8c02a6112b6bb962cffcd819e64c608d"},{url:"images/products/clock/watch1.jpg",revision:"bb78e194ccf840542ec08510afee8213"},{url:"images/products/clock/watch2.jpg",revision:"461f032826719c02cc806f571a5dad40"},{url:"images/products/clothing/blouse1.jpg",revision:"88ceb33055e6717ac907aad429999d9f"},{url:"images/products/clothing/blouse2.jpg",revision:"ee7e26e2088a2034302b010da6a63f48"},{url:"images/products/clothing/blouse3.jpg",revision:"74f90263dbfe88e5360cc6ce5c180d85"},{url:"images/products/clothing/dress.jpg",revision:"66f6f731b37831aeef4debed8ac3c372"},{url:"images/products/clothing/dress1.jpg",revision:"73afb9dffff2b8e396bdcc1281ec863d"},{url:"images/products/clothing/dress2.jpg",revision:"d77679242ccf389a7f07d0c1cc2617ba"},{url:"images/products/clothing/dress3.jpg",revision:"8ed3470f4b8ee683bb73763b0316868e"},{url:"images/products/clothing/dress4.jpg",revision:"ffdd24cbefcc81105956ca86aebfed2c"},{url:"images/products/clothing/dress5.jpg",revision:"08c1bcd73521e00f6b4857363f950e52"},{url:"images/products/clothing/dress6.jpg",revision:"a217cb5b6de304600300e6c1125a9bf7"},{url:"images/products/clothing/shoes.jpg",revision:"0e140e4627d1cdce8b0bbbb739202e6d"},{url:"images/products/dogs/dog11.jpg",revision:"218df7e9dc45b2bd9c00dc51b62326e1"},{url:"images/products/dogs/dog12.jpg",revision:"636e67d5ee9d00cf5fd5454a0426fd3c"},{url:"images/products/dogs/dog13.jpg",revision:"7fbf6827953fbc4f1e0c31b045724cd4"},{url:"images/products/dogs/dog21.jpg",revision:"0194138d7ba0a7d481b0f3c6fe6757d2"},{url:"images/products/dogs/dog22.jpg",revision:"f107b6f29d146df98f8ab93a68541d51"},{url:"images/products/dogs/dog31.jpg",revision:"9e976f4694433b8a197e38f328cf54c5"},{url:"images/products/electricity/spinner1.jpg",revision:"4e3cd5a41c05be1599b1c98f3963c330"},{url:"images/products/electricity/spinner12.jpg",revision:"1752ee958a728d3732953036bdd41c9f"},{url:"images/products/electricity/spinner13.jpg",revision:"256b6efb872656a5f0197bb895e458bc"},{url:"images/products/electricity/spinner14.jpg",revision:"6828ebddaff85239213ce93fef930f56"},{url:"images/products/electricity/spinner15.jpg",revision:"4e3cd5a41c05be1599b1c98f3963c330"},{url:"images/products/electricity/spinner21.jpg",revision:"06c98b77fb96f6a30a1e9640d161f94d"},{url:"images/products/electricity/spinner22.jpg",revision:"d3407cdf8fcfa162651cdb138d439762"},{url:"images/products/electricity/spinner23.jpg",revision:"7f1d8923d242458f6cc6b7e352537807"},{url:"images/products/electricity/spinner24.jpg",revision:"7f1d8923d242458f6cc6b7e352537807"},{url:"images/products/electricity/switch1.jpg",revision:"49280f954d9818ea35d4e0ef80f3f42b"},{url:"images/products/electricity/switch12.jpg",revision:"23c89ad32092982fbfa34dc6d06e9b9d"},{url:"images/products/electricity/switch13.jpg",revision:"f7770036aec26c5c1975d9ec14aedd38"},{url:"images/products/electricity/tester.jpg",revision:"8b9e5f51aabb1b3d55ad298c15462c1d"},{url:"images/products/electronics/card11.jpg",revision:"344dc2bd815d9cb750f5564043cb95ea"},{url:"images/products/electronics/card12.jpg",revision:"2174e34e059f2c9af7f69748b70f1b07"},{url:"images/products/electronics/card21.jpg",revision:"f9262b00a0cb08452e3f3be3788fd904"},{url:"images/products/electronics/hard.jpg",revision:"1c8f5abc9e76c753cd544470271188cd"},{url:"images/products/electronics/hard2.jpg",revision:"8fe2ca4f483032a43ae4f12cd7b5d078"},{url:"images/products/electronics/hub.jpg",revision:"50b6dffea5156737c7869245700f585c"},{url:"images/products/electronics/hub1.jpg",revision:"e669051752f6588e98fffea378e90aa9"},{url:"images/products/electronics/hub10.jpg",revision:"06021037fd7f94457bd675c12d0a14a5"},{url:"images/products/electronics/hub102.jpg",revision:"075bf2509a001e3872f8f1649e61be57"},{url:"images/products/electronics/hub11.jpg",revision:"a7c9c38f94d98a422736a2fc77ca5503"},{url:"images/products/electronics/hub2.jpg",revision:"73ee33552af97e30af9885a87545720d"},{url:"images/products/electronics/hub3.jpg",revision:"38e3188764c1796d5de14e3b25e839f1"},{url:"images/products/electronics/hub31.jpg",revision:"f5b092950caa6cac5f79da82d65aec66"},{url:"images/products/electronics/hub33.jpg",revision:"2cd9bc1e796ee29a4a4bfa1dc9d67a7f"},{url:"images/products/electronics/hub4.jpg",revision:"876cb99eeec880e20aa046bad35fef02"},{url:"images/products/electronics/hub41.jpg",revision:"ce7ea0fd4068946773141287eb566b05"},{url:"images/products/electronics/hub5.jpg",revision:"cf810c24da700bacba3705913e2df0e8"},{url:"images/products/electronics/hub6.jpg",revision:"1d5f18fd3fa691af57d1c33851961514"},{url:"images/products/electronics/hub7.jpg",revision:"67d5e294280473121ebcc91d879716dc"},{url:"images/products/electronics/hub8.jpg",revision:"dd44ee16182417fd3fafe716e8c9be0e"},{url:"images/products/electronics/hub81.jpg",revision:"ee202ffd753ef89c70b300649b356b0f"},{url:"images/products/electronics/hub82.jpg",revision:"87f12d36293f76d18ed32c90a87fa8a9"},{url:"images/products/electronics/hyb103.jpg",revision:"675e7b4a0f7d8cce7b3e9df4bfeae13b"},{url:"images/products/electronics/lens.jpg",revision:"e6dcfd8bc7757caa68fef1b9a1427fda"},{url:"images/products/electronics/machine.jpg",revision:"c0b309bba6b60d4c17dfc8ad57633b19"},{url:"images/products/electronics/mic.jpg",revision:"88c1995d67728f8578d7a6396c693966"},{url:"images/products/electronics/router.jpg",revision:"10c24a3a31d38d563d70f3e7ffc7de77"},{url:"images/products/electronics/vgacable.jpg",revision:"d9d0462d91614f34ac7f155a6158e0c1"},{url:"images/products/foods/banana-2.jpg",revision:"076b35966c7300d7b7d06fe4d5a15f4c"},{url:"images/products/foods/banana.jpg",revision:"157e36129e94be1bde9b125fe432e7c1"},{url:"images/products/foods/bread1.jpg",revision:"ffbf1d24c6cba0814735616fefb28ee5"},{url:"images/products/foods/bread2.jpg",revision:"35adbb4674f9ff1746cf7d7c1c9f7f64"},{url:"images/products/foods/cheese-2.jpg",revision:"66f3a2d51e79dd4d9a77ac0bb191a568"},{url:"images/products/foods/cheese.jpg",revision:"6aa8aae779fc85c949943c3f7cbf3186"},{url:"images/products/foods/choco.jpg",revision:"dbc1c815ae4abe0a8a28c587ea806fef"},{url:"images/products/foods/coolbox.jpg",revision:"fbabab68c8fa190e9e0516d4e00e753a"},{url:"images/products/foods/d2.jpg",revision:"419f876480043a1bc4edc946814cec7a"},{url:"images/products/foods/d3.jpg",revision:"10ecc3af493782dfe9147bff9e3cbec6"},{url:"images/products/foods/egg.jpg",revision:"eb6d99163f01ae3a4b28a858df1f24bf"},{url:"images/products/foods/handtool.jpg",revision:"f08d1f502780355fda02fc047347a0f4"},{url:"images/products/foods/honey.jpg",revision:"e5fb5342faebe5009e9961322dac1b1b"},{url:"images/products/foods/meat1.jpg",revision:"d25b956720192ff0dd4fc058002de96c"},{url:"images/products/foods/meat2.jpg",revision:"ef98b7e6a3ac6684585844dae625de23"},{url:"images/products/foods/meat3.jpg",revision:"df9d85e318200b7e25bfd58540661bf8"},{url:"images/products/foods/milk-2.jpg",revision:"e8d3e0494875883de175ea0b5b915009"},{url:"images/products/foods/milk.jpg",revision:"7e0f7601145bdcf3901f9bdb2eef6f35"},{url:"images/products/foods/oil.jpg",revision:"a2b6628e7859befa4f9411dcbda60470"},{url:"images/products/foods/pepsi.jpg",revision:"a21edd652d0307e3dde422a9236fe9a6"},{url:"images/products/foods/pt-2.jpg",revision:"2c803623994b1c48563e3848e645e1cf"},{url:"images/products/foods/pt-3.jpg",revision:"1ce635cec68842e1caf596138a52d490"},{url:"images/products/foods/pt-4.jpg",revision:"d6e6b9c29b29c70fb9974c21a568691d"},{url:"images/products/foods/pt-5.jpg",revision:"ece4407f8e29b5f24bd85ba4b8edbfcc"},{url:"images/products/foods/pt.jpg",revision:"7dd0c1c2b32af2e133c003c549fcdfc0"},{url:"images/products/foods/tea.jpg",revision:"2d65906e5059cd2d757a2e3935ad8fd2"},{url:"images/products/furniture/chair11.jpg",revision:"0d127b97c4475ff3dc70c7ce5060d73f"},{url:"images/products/furniture/chair21.jpg",revision:"4c1f54df81a3295fdb65541e7f7309e0"},{url:"images/products/furniture/chair31.jpg",revision:"b0a32507d30aad5a6014c53d5adc24d7"},{url:"images/products/furniture/chair32.jpg",revision:"2675550aa31a5b9bc68f7047fb620b9b"},{url:"images/products/furniture/chair41.jpg",revision:"2609ff30cea715f0b298db7b7a74208f"},{url:"images/products/furniture/lamp1.jpg",revision:"0a4f96042e0abdc4382b981bc9d69ef6"},{url:"images/products/furniture/table1.jpg",revision:"04a578c83fe2adb704b4e9e4b60af1b6"},{url:"images/products/furniture/vase1.jpg",revision:"f56d468787b87119691985b6ec67451f"},{url:"images/products/furniture/vase12.jpg",revision:"3d22fdc62ec7c6e529580bd26789cb8d"},{url:"images/products/furniture/vase21.jpg",revision:"f2f15d8b063d927129e3d1e3a8aa9078"},{url:"images/products/furniture/vase22.jpg",revision:"65b279ca522032cf8607872f442de44d"},{url:"images/products/furniture/vase31.jpg",revision:"06ec6871b5880bec7cb9038ebe6e3740"},{url:"images/products/mobiles/huawi2016.jpg",revision:"59363a904a0aa3c517e2958bbbfe87f4"},{url:"images/products/mobiles/huawi2017.jpg",revision:"39df28571f4c6a5451d1217d944cc5d6"},{url:"images/products/mobiles/huawi2018.jpg",revision:"60b95b83399c4baea90a7dd8b8f26b1a"},{url:"images/products/mobiles/huawi20182.jpg",revision:"f958ccc30a3922a24083bebe0cebf362"},{url:"images/products/mobiles/huawi2019.jpg",revision:"9637395d78b64516fd41a7ae7028d84d"},{url:"images/products/mobiles/huawi20192.jpg",revision:"d26264befb1a8977a676d8b5841f4c1e"},{url:"images/products/mobiles/huawi20193.jpg",revision:"e9b2441a52b6569c9d20ea21d8d3059f"},{url:"images/products/mobiles/huawi20194.jpg",revision:"549317c995b2349b186a7d24c72d5ac7"},{url:"images/products/mobiles/huawi2020.jpg",revision:"b1517b6ed911cf32be7bcfff78742c37"},{url:"images/products/mobiles/huawi20202.jpg",revision:"dd739cedf9f7b62cfd54ad01d329b199"},{url:"images/products/mobiles/huawi20203.jpg",revision:"b7db8a03f256cf714afadf0de50d7c4a"},{url:"images/products/mobiles/ipad.png",revision:"daeab9d1e66ef6e2a5ec00436d8667d2"},{url:"images/products/mobiles/iphone7.png",revision:"b7220de9063b1444a4fecb21620188fb"},{url:"images/products/mobiles/iphone72.png",revision:"ffec639e2cbca21e92c99ce205e94d5a"},{url:"images/products/mobiles/iphone73.png",revision:"97c7dc517bc8d1bde3adbdd034476e1b"},{url:"images/products/mobiles/iphone74.png",revision:"c93e95149a9616eab6ba8633888309fc"},{url:"images/products/mobiles/iphone75.png",revision:"0fe36dd10be9c2bca42d4cc3e4a53fde"},{url:"images/products/mobiles/mobile-30.jpg",revision:"bc6a6d32cb09f02e8e065018ffa6039b"},{url:"images/products/mobiles/nokia2019.jpg",revision:"7ec355a602c856ef375221a21a29ef58"},{url:"images/products/mobiles/nokia20192.jpg",revision:"8eba4a635bbad9241c24b6cbe11ad8cb"},{url:"images/products/mobiles/nokia20193.jpg",revision:"8eba4a635bbad9241c24b6cbe11ad8cb"},{url:"images/products/mobiles/sm-b.jpg",revision:"affe07c3ce952459daf4a7b74d2ffbc2"},{url:"images/products/mobiles/sm2015-2.jpg",revision:"74fa970f4cec39ace4754096c536c546"},{url:"images/products/mobiles/sm2015.jpg",revision:"131d854816fbb94d036fc5b64f32b6b1"},{url:"images/products/mobiles/sm2018.jpg",revision:"87aaaf721154aaaff369ae5ee2bc3449"},{url:"images/products/mobiles/sm2019-2.jpg",revision:"175733352394611b5302d4f2f003d7fd"},{url:"images/products/mobiles/sm2019-3.jpg",revision:"494b95c2a490118102534dc3fd1bfe8d"},{url:"images/products/mobiles/sm2019-4.jpg",revision:"8e2fcb633dfaf3167e38e68db88ab992"},{url:"images/products/mobiles/sm2019.jpg",revision:"f158f87575b2e0fed1cb52f4259a9524"},{url:"images/products/mobiles/sm2020-2.jpg",revision:"b4a00a688810f8ad46c2340e4f993407"},{url:"images/products/mobiles/sm2020-3.jpg",revision:"607408683f33b68911445b0f2f995cab"},{url:"images/products/mobiles/sm2020-4.jpg",revision:"bb8b502dd20f5c5cca9adabda8f18c4b"},{url:"images/products/mobiles/sm2020.jpg",revision:"b6b79834fd09211b7ab9271fa981b1ed"},{url:"images/products/mobiles/sony2020.jpg",revision:"b8acb0f18bdd8651a62255901d09c815"},{url:"images/products/mobiles/sony20202.jpg",revision:"b8acb0f18bdd8651a62255901d09c815"},{url:"images/products/stationery/bag.jpg",revision:"bd3a3144527cc71973107da53a446092"},{url:"images/products/stationery/notebook.jpg",revision:"585cb2c6b7404227ed0d9baa71163621"},{url:"images/products/stationery/pen.jpg",revision:"a1d4a4566292fcfe5dd654f14ab5ce52"},{url:"images/slider/slider-1.png",revision:"aec5329ed0e35830f389e26e5eac622e"},{url:"images/slider/slider-2.png",revision:"76151e614d93d51f571e2274c4d48aff"},{url:"images/slider/slider-3.png",revision:"dc92f32bc2eea692ef6ad65eeceea87f"},{url:"images/slider/slider-4.png",revision:"ee1b35bd0b73c963d7ceb6aae2c9acd6"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"f22d501a35a87d9f21701cb031f6ea17"},{url:"index.html",revision:"7fbc65e53360763109166b62e5e82da8"},{url:"json/langTranslations_Ar.json",revision:"1e06254973258de3cd78a1a761cd54e2"},{url:"json/langTranslations_En.json",revision:"d9debe653eae0fe640b5b7833ce099c3"},{url:"json/productsData_Ar.json",revision:"f409799bce6ab9398b2fadb61f9098b7"},{url:"json/productsData_En.json",revision:"9c6317a5f57968f1865b50fbc812452c"},{url:"json/sliderData_Ar.json",revision:"f6835850085f3a9c377d073bce101020"},{url:"json/sliderData_En.json",revision:"0125ac3523c2df5d4cb7a23ba313ba01"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=sw.js.map
