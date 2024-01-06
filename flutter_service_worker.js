'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin.json": "1d602effc3da7b43846d2e42d6a1782f",
"assets/assets/menu%25205.pdf": "361288eb068d2d629cd850d8fe0337d3",
"assets/assets/photo_6107315282004523877_m.jpg": "dad779a414915ccfd0f23ae3f9268169",
"assets/assets/top-view-composition-delicious-indonesian-bakso.jpg": "0af40658c57a4d4fc7c307fb283de9c2",
"assets/assets/selection-various-cocktails-table.jpg": "4a84e6685da8848b9ab2b0b44245eaac",
"assets/assets/menu%25204.pdf": "26ece38296e9ed0b880743280054976d",
"assets/assets/menu%25203.pdf": "d8a134a68a58f284d76002a34e1b0627",
"assets/assets/menu%25202.pdf": "5c21dc7704d98445696807dbc329fdbf",
"assets/assets/menu%25201.pdf": "bd540611730faa17d9b397b98cb5dcbc",
"assets/assets/traditional-nasi-lemak-meal-assortment.jpg": "03b839c49832a33d9bb49db591c4fe62",
"assets/assets/menu%25206.pdf": "dbea162dee2ae50b7c83d8530d76d483",
"assets/NOTICES": "95bf380124eba14d21ebb027a214615f",
"assets/AssetManifest.json": "e0f9379e8446027b937d9d99f1feed07",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "6f74526e4f688bcb271f8931091a7ba0",
"assets/AssetManifest.bin": "7ceeef2d39e506c219a17a59abf72ce4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "07acaaa0501a1a5e44f1ad2a3cc85dbd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"manifest.json": "f5d6dcf182a74f687bc6b6a0a04f1513",
"main.dart.js": "03cb22e0ee2835ae77b35245c369de83",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "2572087e3746cb5f2da9b14b5bc64fa8",
"/": "2572087e3746cb5f2da9b14b5bc64fa8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/ORIG_HEAD": "f6b1fa1b5ce9e10248272444b0418b47",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "c008281e8ca6ad3b22c7d85b77ffe005",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "6bf0b0877f12d5ce033e330ffb7af0c9",
".git/logs/HEAD": "3490468f5a5e1412b18fff443613f26f",
".git/logs/refs/heads/master": "bc5aa41be75fc28d6792b31d467efffd",
".git/logs/refs/heads/main": "6eb0b409145f4a6897ca28495ba748c3",
".git/logs/refs/remotes/origin/master": "bd570dbc35aa50e11ce446d04878d870",
".git/logs/refs/remotes/origin/main": "abd3948318399d36b797c65e015b01ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3e/69d37dc7c4f81e008e3fdc65459e63f3174ba7": "3ce05eeae32b56e49c7cb06ce56f148f",
".git/objects/f4/233b791f304e1af5acb590fa5642a1f07ad43b": "f7a25326f6ada574096b21b00594a8c7",
".git/objects/9b/1b6a1cd2cc0ed92413b6a8cac9027b45906458": "57a8d0196d608ed40572bf27ecd4a05b",
".git/objects/9b/84a2845f7e7597dd8aa27af073e61fc6904b16": "6f54dd4967b3bd4e2b8e1019a6649e6c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/48/45a64d6f8b9142af2c79d8e7e8668f6804a7c8": "cb73b2ef996bd0fbaa54ea5a510c3916",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/fe/5c45e93d8fdeeacc62654aae0b27b0a7878cb9": "0a8a4b0f794b86785b2dc34b465b25ca",
".git/objects/83/54c2d14ca60dacbadfa246659572c5438a4044": "a8326afee7ada2c9ed1aa9cda30094de",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c4b5d321737ac3ab123dc5ec30cb51fd22e126": "dca3e20a2d5faddb5251545c58bf3228",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/e2/c648b588c3e36f846a5a654f554205ac34b549": "65497b3dab53bc5e18515b432848d64c",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/34/ee06102f19e781e5ef56f1968acf230ae876a9": "a68536d3ab18a4e3197be11d39c44c07",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/35/70c0ca0464dd947b7fccf42584b88faa8d09ae": "cb34ae0429026fd8a933ecee88fa53e1",
".git/objects/7f/c1bd0de66157ae6d016724b2c9879154a4dcec": "5f7f70e416c39a50c09e639a699d2601",
".git/objects/03/418cdd01cbcc72a098bee298edf1f83b521c38": "dd9db0d18169ee18701725b906e01cb2",
".git/objects/1d/39f7a0aade7da7254c45ccb7333b8e4320b2c3": "4f85e0b98c906cbbb08dc7a49b777d59",
".git/objects/c8/6d6d6324ce9acbef5521c3cfcfd990ceb05e51": "ad4beec12c1d9de2a0b2fe19ef8a2172",
".git/objects/74/2558b5700949423269337a875a0e5daea8c195": "ba39a5dc8652e1011d3b510c8e5f5a88",
".git/objects/74/eb9204b1b6ceea61e754bc719dcefd60c2ca36": "f1a612014083918e1153ebb74b060002",
".git/objects/30/cc12f6979fd32f4b8b9ad915d44dc34fcd87b8": "39f6595e3d4092dd085dd7c9aaf8a1cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2c/61e3a49a43f0985dc8e0dc03e4282f87846623": "4e06f90a78880cc89d0988b5941acc72",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/f3/dc84feaa75fde1dcf0d5a6913cfc3a09f7c17b": "cd1e57b071d1a4eff7707e31c0cd6e56",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/55/3eb9acdbd4190914b52efb9d38dde203051927": "371a0e9c6959ad814bae17f6e323b030",
".git/objects/dd/75e741d049458a6051ce32b28afb31643d0da1": "10836d4949d8501c34f28668cf7346ce",
".git/objects/4d/da48a08f655e6f4d490bf1f00fec6d16dce259": "c56713cac3930aa9a5217147f8057eeb",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/b7/ca605d40ad02fa5278d4d33f6279ace0558537": "229f1169e8eb0d35e5bbf33a1670b1bb",
".git/objects/b7/46d271d485d055c45533b69e3e8aa3465f042c": "1d8ceab184a4e879ff740ede53f82d76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a2/f7a2bbfc83d46ef3c9035835c11387909764ab": "89160507f71c5ba1cb78f776d7188f59",
".git/objects/a2/bf912b6cbc1e48cc173ad04328d05a52f2634b": "fdd8b4ba4822fbae71773aaa2b13c94b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/d0/116a3fd3a06e443dce226d65d93dad80285448": "f8df2a71b230f7be047d117ac0cf04ee",
".git/objects/0a/313b140220ad61716186074925b107f068a232": "339eb613867cac8b1df65bbeaefe3ca2",
".git/objects/92/3f7cba17ea89a1cb6e86bbf5252db1577aaff6": "0c1545db4d03eef63b636f74d342e24d",
".git/objects/e0/c3af421279b0ba8a718c8be48aa1cce450d961": "1962ec581294c3462bbb3b41822f47ac",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/7c/a0a535e87650ffdf100ca72335192501a116dc": "39c58eca7e75ab850e9c950338fc76e9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/2b/accfeb9fea9d4af08ed4f14368cd4c551c7729": "0144c952dea27d2fb4c9d14b0a7ceaf6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/cc/06154e5d1d5cb11d0cb3ab21c4acc202f33d96": "9d45d606642ac230f41f0314b1c1fc8e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/42/24bc9203bdb75f5c8ed7144d7e0dc58e3c9ca2": "00dfe31ed195dc7c7f2d6833b41445e1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/b8/9784def3d5f1ebfd0ca05b1e832d202f7677da": "61adab927900b8d0ba0b5a4c2a51b693",
".git/objects/2d/9740c57bb4182b236398c046d9b23c2e76f924": "588006ac924be594c6447d8f1944450c",
".git/objects/2a/77de198005bdf2a573e56b46242154f13232bf": "b36a70d30a71c11f6d1aefaf3c6bd528",
".git/objects/a5/d6cb9ea89da9290e83f5eda866f04ce5390319": "44023f043172d9734200c8b22d504461",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/a1/9783ec98762531ab16ac32066a107cf98840e1": "b475cde0c4a8c76a497250617f3954f7",
".git/objects/cd/90c3bf49bc1f8954ab0c9df8d52d28711b2d66": "0403057e17bdece152ac4878feae3d0f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/index": "104ab5890b1407aae8fde04ec6258b75",
".git/refs/heads/master": "b476f4a0e523144476501474d8d604cd",
".git/refs/heads/main": "ce313525cecf60f96e9cd85c5196cd37",
".git/refs/remotes/origin/master": "538cba3682a738d0d2e51c014d1dae61",
".git/refs/remotes/origin/main": "ce313525cecf60f96e9cd85c5196cd37",
"version.json": "dc4659e3b1daae9bf880f00e9b002dd8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
