/* global document, window, require, _ */

/*
 ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄
▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌
▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌
▐░▌ ▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌
▐░▌▐░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌
▐░▌ ▀▀▀▀▀▀█░▌▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌
▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀
 */
const canvas = require( './canvasMaster.js' );

/*
 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌       ▐░▌
▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌
▐░▌       ▐░▌     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
▐░▌   ▄   ▐░▌     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌   ▄   ▐░▌
▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌
▐░▌ ▐░▌░▌ ▐░▌     ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌ ▐░▌░▌ ▐░▌
▐░▌▐░▌ ▐░▌▐░▌     ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌
▐░▌░▌   ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌░▌   ▐░▐░▌
▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░▌     ▐░░▌
 ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀       ▀▀
 */

window.onload = function windowLoad() {
  canvas.setArgs( { Id: 'canvas' } );


  // setup the canvas and necessary functions
  // stage = new createjs.Stage( 'canvas' );
  // fixCanvas();
  // window.addEventListener( 'resize', fixCanvas, false );
  //
  // circle = new createjs.Shape();
  // circle.graphics.beginFill( 'DeepSkyBlue' ).drawCircle( 0, 0, 50 );
  // circle.x = 0;
  // circle.y = cordY( 50 );
  // stage.addChild( circle );
  //
  // let yRect = new createjs.Shape();
  // yRect.graphics.beginFill( 'Red' ).drawRect( 0, 0, 1, document.getElementById( 'canvasContainer' ).clientHeight );
  // yRect.x = cordX( 0 );
  // yRect.y = 0;
  // stage.addChild( yRect );
  //
  // let xRect = new createjs.Shape();
  // xRect.graphics.beginFill( 'Red' ).drawRect( 0, 0, document.getElementById( 'canvasContainer' ).clientWidth, 1 );
  // xRect.x = 0;
  // xRect.y = cordY( 0 );
  // stage.addChild( xRect );
  //
  // stage.update();
  //
  // createjs.Ticker.addEventListener( 'tick', tick );
  // createjs.Ticker.setFPS( 40 );
  //
  // Tween.get( circle ).to( { x: document.getElementById( 'canvasContainer' ).clientWidth }, 500, Ease.getPowIn( 2.2 ) );

  // lib.init();
  // fixButtons();
  // // fixContainers();
  // // window.addEventListener( 'resize', fixContainers, false );
  //
  // document.getElementById( 'btn_Menu' ).onclick = function sideMenuBtn_clicked() {
  //   if ( document.getElementById( 'sideMenu' ).className !== 'u_float_left menu' ) {
  //     document.getElementById( 'sideMenu' ).className = 'u_float_left menu';
  //     document.getElementById( 'sideMenuOverlay' ).className = 'u_float_right menuBack';
  //     document.getElementById( 'btn_Menu' ).innerHTML = 'Close Menu';
  //   } else {
  //     hideMenu();
  //   }
  // };
  // document.getElementById( 'sideMenuOverlay' ).onclick = function sideMenuOverlay_clicked() {
  //   hideMenu();
  // };
  //
  // document.getElementById( 'btn_MainMenu' ).onclick = function openMainMenu() {
  //   document.getElementById( 'viewThree' ).className = 'container u_hidden';
  //   document.getElementById( 'viewMain' ).className = 'container';
  //   document.getElementById( 'btn_MainMenu' ).className = 'menuBtn button-primary';
  //   document.getElementById( 'btn_Three' ).className = 'menuBtn';
  // };
  // document.getElementById( 'btn_Three' ).onclick = function openMainMenu() {
  //   document.getElementById( 'viewMain' ).className = 'container u_hidden u_gone';
  //   document.getElementById( 'viewThree' ).className = 'container';
  //   document.getElementById( 'btn_Three' ).className = 'menuBtn button-primary';
  //   document.getElementById( 'btn_MainMenu' ).className = 'menuBtn';
  // };
  //
  // // Main Menu
  // document.getElementById( 'btn-volc' ).onclick = function updateSettings() {
  //   let volcArry = _.split( document.getElementById( 'options_volc' ).value, '_' );
  //   GLOBAL.lat = _.toNumber( volcArry[ 1 ] );
  //   GLOBAL.lon = _.toNumber( volcArry[ 2 ] );
  //   GLOBAL.degree = _.toNumber( document.getElementById( 'options_degree' ).value );
  //   let cluster = _.toNumber( document.getElementById( 'options_cluster' ).value );
  //   GLOBAL.life = _.toInteger( document.getElementById( 'options_life' ).value );
  //   let skip = _.toInteger( document.getElementById( 'options_skip' ).value );
  //
  //
  //   lib.setArgs( { lat: GLOBAL.lat, lon: GLOBAL.lon, degree: GLOBAL.degree, k: cluster, life: GLOBAL.life, skip: skip } );
  //
  //   let http = new XMLHttpRequest();
  //   let url = GLOBAL.addr + '/api/map';
  //   http.open( 'post', url, true );
  //   http.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8' );
  //   let params = { n: volcArry[ 0 ], d: GLOBAL.degree, minLat: (  GLOBAL.lat - GLOBAL.degree ), maxLat: (  GLOBAL.lat +
  //      GLOBAL.degree  ), minLong: (  GLOBAL.lon - GLOBAL.degree  ), maxLong: (  GLOBAL.lon +
  //      GLOBAL.degree  ) };
  //   http.onreadystatechange = function onReady_Function() {
  //     if ( http.readyState === 4 && http.status === 200 ) {
  //       let t = JSON.parse( http.responseText ).success.split( '_' );
  //       GLOBAL.fileName = t[ 0 ];
  //
  //       lib.setSt( store );
  //       lib.setArgs( { fileName: GLOBAL.fileName } );
  //       btnCheck.threeStart = lib.isOperational();
  //       fixButtons();
  //     }
  //   };
  //   http.send( JSON.stringify( params ) );
  //
  //   document.getElementById( 'updateInfo' ).innerHTML = 'volcano: ' + volcArry[ 0 ] + ', latitude: ' + GLOBAL.lat + ', longitude: ' + GLOBAL.lon
  //     + ', degree Range: ' + GLOBAL.degree + ', amount of cluster: ' + cluster + ', life of each earthquake: ' + GLOBAL.life + ', time per second: '
  //     + skip;
  // };
  //
  // // Three controls
  // document.getElementById( 'threeStart' ).onclick = function threeStart() {
  //   if ( _.indexOf( _.split( document.getElementById( this.id ).className, ' ' ), 'badButton' ) !== -1 ) {
  //     return;
  //   }
  //
  //   lib.start();
  //   _.forIn( btnCheck, function btnFix( value, key ) {
  //     if ( key == 'threeStart' ) {
  //       btnCheck[ key ] = false;
  //     } else {
  //       btnCheck[ key ] = true;
  //     }
  //   } );
  //   fixButtons();
  // };
  // document.getElementById( 'threeStop' ).onclick = function threeStop() {
  //   if ( _.indexOf( _.split( document.getElementById( this.id ).className, ' ' ), 'badButton' ) !== -1 ) {
  //     return;
  //   }
  //
  //   lib.stop();
  //   _.forIn( btnCheck, function btnFix( value, key ) {
  //     if ( key == 'threeStart' ) {
  //       btnCheck[ key ] = true;
  //     } else {
  //       btnCheck[ key ] = false;
  //     }
  //   } );
  //   fixButtons();
  // };
  // document.getElementById( 'threeRender' ).onclick = function threeStop() {
  //   if ( _.indexOf( _.split( document.getElementById( this.id ).className, ' ' ), 'badButton' ) !== -1 ) {
  //     return;
  //   }
  //
  //   lib.renderEQ( { check: 'lol' } );
  // };
  // document.getElementById( 'threeCluster' ).onclick = function threeCluster() {
  //   if ( _.indexOf( _.split( document.getElementById( this.id ).className, ' ' ), 'badButton' ) !== -1 ) {
  //     return;
  //   }
  //
  //   lib.cluster();
  // };
  // document.getElementById( 'threePlay' ).onclick = function threeStop() {
  //   if ( _.indexOf( _.split( document.getElementById( this.id ).className, ' ' ), 'badButton' ) !== -1 ) {
  //     return;
  //   }
  //
  //   if ( btnCheck.threeRender ) {
  //     lib.toggleRun();
  //     _.forIn( btnCheck, function btnFix( value, key ) {
  //       if ( key == 'threePlay' ) {
  //         btnCheck[ key ] = true;
  //       } else {
  //         btnCheck[ key ] = false;
  //       }
  //     } );
  //   } else {
  //     lib.toggleRun();
  //     _.forIn( btnCheck, function btnFix( value, key ) {
  //       if ( key == 'threeStart' ) {
  //         btnCheck[ key ] = false;
  //       } else {
  //         btnCheck[ key ] = true;
  //       }
  //     } );
  //   }
  //   fixButtons();
  // };
  //
  // // slider
  // let sDate = new Date( '2007-01-01T00:00:00.000Z' );
  // let eDate = new Date( '2010-01-01T00:00:00.000Z' );
  //
  // let obj = slider.create( document.getElementById( 'slider' ), {
  //   range: { min: [ sDate.getTime() ], max: [ eDate.getTime() ] },
  //   start: [ sDate.getTime(), sDate.getTime() ],
  //   connect: true
  // } );
  // obj.on( 'slide', function setValue( values, handle ) {
  //   if ( handle == 0 ) {
  //     obj.set( [ values[ handle ], values[ handle ] + GLOBAL.life ] );
  //
  //     lib.setTime( { current: Math.floor( values[ handle ] + GLOBAL.life ) } );
  //     return;
  //   }
  //
  //   lib.setTime( { current: Math.floor( values[ handle ] ) } );
  //   document.getElementById( 'slider_container_start' ).value = new Date( Math.floor( values[ handle ] ) );
  //
  //   let clamp = _.clamp( values[ handle ] - GLOBAL.life, sDate.getTime(), values[ handle ] );
  //   document.getElementById( 'slider_container_end' ).value = new Date( Math.floor( clamp ) );
  //   obj.set( [ clamp ] );
  // } );
  // obj.on( 'set', function setValueSet( values, handle ) {
  //   if ( handle == 0 ) {
  //     document.getElementById( 'slider_container_start' ).value = new Date( Math.floor( values[ handle ] + GLOBAL.life ) );
  //     document.getElementById( 'slider_container_end' ).value = new Date( Math.floor( values[ handle ] ) );
  //   } else {
  //     document.getElementById( 'slider_container_start' ).value = new Date( Math.floor( values[ handle ] ) );
  //     document.getElementById( 'slider_container_end' ).value = new Date( Math.floor( values[ handle ] - GLOBAL.life ) );
  //
  //   }
  // } );
  // document.getElementById( 'slider_container_start' ).addEventListener( 'change', function sliderUpdated() {
  //   let d = new Date( this.value );
  //   obj.set( [ _.clamp( d.getTime() - GLOBAL.life, sDate.getTime(), d.getTime() ), d.getTime() ] );
  //   document.getElementById( 'slider_container_end' ).value = new Date( Math.floor(
  //     _.clamp( d.getTime() - GLOBAL.life, sDate.getTime(), d.getTime() ) ) );
  //   lib.setTime( { current: Math.floor( d.getTime() ) } );
  // } );
  // lib.setArgs( { sliderSet: obj.set } );

  //
  //
  // // Document events
  // document.getElementById( 'menu-btn' ).onclick = function menuBtn_Clicked() {
  //   if ( currentVisible === 'menu' ) {
  //     return;
  //   }
  //   document.getElementById( currentVisible ).className = 'u-pull-left bodyPane u-hide';
  //   document.getElementById( currentVisible + '-btn' ).className = 'u-max-full-width';
  //   currentVisible = 'menu';
  //   document.getElementById( currentVisible ).className = 'u-pull-left bodyPane';
  //   document.getElementById( currentVisible + '-btn' ).className = 'u-max-full-width button-primary';
  //
  //   lib.stop();
  // };
  // document.getElementById( 'view-btn' ).onclick = function viewBtn_Clicked() {
  //   if ( currentVisible === 'view' ) {
  //     return;
  //   }
  //   document.getElementById( currentVisible ).className = 'u-pull-left bodyPane u-hide';
  //   document.getElementById( currentVisible + '-btn' ).className = 'u-max-full-width';
  //   currentVisible = 'view';
  //   document.getElementById( currentVisible ).className = 'u-pull-left bodyPane';
  //   document.getElementById( currentVisible + '-btn' ).className = 'u-max-full-width button-primary';
  //   if ( !lib.isInitialized() ) {
  //     lib.init();
  //   }
  // };
  //
  // document.getElementById( 'btn-start' ).onclick = function startBtn_Clicked() {
  //   if ( !lib.isRunning() ) {
  //     lib.start();
  //   }
  // };
  // document.getElementById( 'btn-stop' ).onclick = function stopBtn_Clicked() {
  //   if ( lib.isRunning() ) {
  //     lib.stop();
  //   }
  // };
  // document.getElementById( 'btn-render' ).onclick = function renderBtn_Clicked() {
  //   if ( !lib.isInitialized() || !lib.isRunning() ) {
  //     return;
  //   }
  //   lib.handle( undefined, 'undefined', GLOBAL.fileName );
  // };
  // document.getElementById( 'btn-step' ).onclick = function stepBtn_Clicked() {
  //   if ( !lib.isInitialized() || !lib.isRunning() ) {
  //     return;
  //   }
  //   lib.step();
  // };
  // // document.getElementById('btn-re-step').onclick = function() {
  // //   if(!lib.isInitialized() || !lib.isRunning())
  // //     return;
  // //   lib.reStep();
  // // };
  // document.getElementById( 'btn-clust' ).onclick = function clusterBtn_Clicked() {
  //   if ( !lib.isInitialized() || !lib.isRunning() ) {
  //     return;
  //   }
  //   lib.stepCluster();
  // };
  //
  // document.getElementById( 'btn-play' ).onclick = function playBtn_Clicked() {
  //   if ( !lib.isInitialized() || !lib.isRunning() ) {
  //     return;
  //   }
  //   lib.toggleRun();
  // };
  //
  // document.getElementById( 'btn-volc' ).onclick = function volcanoBtn_Clicked() {
  //   let t = document.getElementById( 'options_volc' ).value.split( '_' );
  //   let name = t[ 0 ];
  //   GLOBAL.lat = Number( t[ 1 ] );
  //   GLOBAL.lon = Number( t[ 2 ] );
  //
  //   GLOBAL.degree = Number( document.getElementById( 'options_degree' ).value );
  //   let cluster = Number( document.getElementById( 'options_cluster' ).value );
  //   // console.log(addr);
  //   lib.setArgs( { sliderSet: obj.set, life: 6.048e+8 * 2, lat: GLOBAL.lat, lon: GLOBAL.lon, degree: GLOBAL.degree,
  //     addr: GLOBAL.addr, k: cluster, skip: 86400000, divDataID: 'mainpageData' } );
  //   // 2.628e+9 => month, 6.048e+8 => week
  //   // console.log(lat + " " + long + " " + degree);
  //
  //
    // let http = new XMLHttpRequest();
    // let url = GLOBAL.addr + '/api/map';
    // http.open( 'post', url, true );
    // http.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8' );
    // let params = { n: name, d: GLOBAL.degree, minLat: ( Number( GLOBAL.lat ) - Number( GLOBAL.degree ) ), maxLat: ( Number( GLOBAL.lat ) +
    //   Number( GLOBAL.degree ) ), minLong: ( Number( GLOBAL.lon ) - Number( GLOBAL.degree ) ), maxLong: ( Number( GLOBAL.lon ) +
    //   Number( GLOBAL.degree ) ) };
    // http.onreadystatechange = function onReady_Function() {
    //   if ( http.readyState === 4 && http.status === 200 ) {
    //     let t = JSON.parse( http.responseText ).success.split( '_' );
    //     GLOBAL.fileName = t[ 0 ];
    //   }
    // };
  //   http.send( JSON.stringify( params ) );
  //   lib.setSt( store );
  // };
  //
  // document.getElementById( 'view-data' ).onclick = function dataView_Clicked() {
  //   lib.runD3();
  // };
};
