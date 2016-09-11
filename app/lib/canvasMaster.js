/* global module, createjs, _, document, window, console */

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

/**
 * Short hand for createjs
 * http://createjs.com/
 * @type {Object}
 */
const MAKE = createjs;
/**
 * Short hand for Tweenjs
 * http://createjs.com/
 * @type {Object}
 */
const TWEEN = MAKE.Tween;
/**
 * Short hand for createjs.Ease
 * @type {[type]}
 */
const EASE = MAKE.Ease;
/**
 * the canvas of the createjs
 * @type {Object}
 */
var stage = _.noop();
/**
 * the maximum x based on the middle being the center point
 * @type {Number}
 */
var maxX = _.noop();
/**
 * the maximum y based on the middle being the center point
 * @type {Number}
 */
var maxY = _.noop();

/*
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░▌ ▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌          ▐░▌
▐░▌       ▐░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌
▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀
 */
/**
 * Passed in Variables
 * @type {Object}
 */
var ARGS = {
  /**
   * id of canvas object
   * @type {string}
   */
  Id: _.noop(),
  /**
   * car width / car length;
   * @type {Number}
   */
  carRatio: 2.5,
  /**
   * How many units is the length of the cars
   * @type {[type]}
   */
  carLength: 10,
  /**
   * Number of pedestrian lines
   * @type {Number}
   */
  pedNum: 8
};
const ARGS_KEYS = _.keys( ARGS );
let ARGS_SET = false;

/*
 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀
▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀  ▀▀▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌          ▐░▌     ▐░▌            ▐░▌
▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌  ▄▄▄▄▄▄▄▄▄█░▌
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀
*/
/**
 * sets the arg to the object of the input, only accepts predefined arg variables
 * @param {Object} input arg ojbect
 */
function setArgs( input ) {
  if ( ARGS_SET ) {
    return;
  }

  // Checks all keys in input, if there is an ARGS[key] then ARGS[key] = input[key]
  _.forIn( input, function checkKeys( value, key ) {
    if ( _.indexOf( ARGS_KEYS, key ) !== -1 ) {
      ARGS[ key ] = value;
    }
  } );

  // _.map creates an array of values from the ARGS object, checks to see if an ARGS[key] == undefined; if it there is one then the
  // ARGS_INITIALIZED will stay false
  // OR every ARG value must be set to something
  if ( _.indexOf( _.map( ARGS_KEYS, function fixCluster( key ) {
    return ARGS[ key ];
  } ), undefined ) === -1 ) {
    ARGS_SET = true;
    init();
  }
}
/**
 * Resizes the canvas to be the same aspect as the div containing it
 */
function fixCanvas() {
  stage.canvas.width = document.getElementById( ARGS.Id ).clientWidth;
  stage.canvas.height = document.getElementById( ARGS.Id ).clientHeight;

  maxX = document.getElementById( ARGS.Id ).clientWidth / 2;
  maxY = document.getElementById( ARGS.Id ).clientHeight / 2;
}
/**
 * The converted centered x cord to top-left centered x cord
 * @param  {Number} x the x cord with the center of the canvas as the center
 * @return {Number}   x cord with the top-left as the center
 */
function xCord( x ) {
  return document.getElementById( ARGS.Id ).clientWidth / 2 + x;
}
/**
 * The converted centered y cord to top-left centered x cord
 * @param  {Number} y the y cord with the center of the canvas as the center
 * @return {Number}   y cord with the top-left as the center
 */
function yCord( y ) {
  return document.getElementById( ARGS.Id ).clientHeight / 2 - y;
}
/**
 * Creates a new rect
 * @param  {Number} x       x coordinate
 * @param  {Number} y       y coordinate
 * @param  {Number} xLength length in the x direction
 * @param  {Number} yLength length in the y direction
 * @param  {String} color   what to color the rect
 */
function newRect( x, y, xLength, yLength, color ) {
  x = xCord( x );
  y = yCord( y );
  color = ( _.isUndefined( color ) ? 'black' : color );

  let line = new MAKE.Shape();
  line.graphics.beginFill( color ).drawRect( 0, 0, xLength, yLength );
  line.x = x;
  line.y = y;
  stage.addChild( line );
}
/**
 * Creates new arc
 * @param  {Number} x       x coordinate
 * @param  {Number} y       y coordinate
 * @param  {radius} startAngle     clockwise start angle
 * @param  {radius} endAngle       clockwise end angle
 * @param  {Number} radius the radius of the arc
 * @param  {string} color  what to color the arc
 */
function newArc( x, y, startAngle, endAngle, radius, color ) {
  x = xCord( x );
  y = yCord( y );
  color = ( _.isUndefined( color ) ? 'black' : color );

  let line = new MAKE.Shape();
  line.graphics.beginFill( color ).arc( 0, 0, radius, startAngle, endAngle, false );
  line.x = x;
  line.y = y;
  stage.addChild( line );
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀
     ▐░▌     ▐░▌▐░▌    ▐░▌     ▐░▌          ▐░▌
     ▐░▌     ▐░▌ ▐░▌   ▐░▌     ▐░▌          ▐░▌
     ▐░▌     ▐░▌  ▐░▌  ▐░▌     ▐░▌          ▐░▌
     ▐░▌     ▐░▌   ▐░▌ ▐░▌     ▐░▌          ▐░▌
     ▐░▌     ▐░▌    ▐░▌▐░▌     ▐░▌          ▐░▌
 ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄      ▐░▌
▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌     ▐░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀
 */
/**
 * initialization function that is the set-up for the simulation
 */
function init() {
  stage = new MAKE.Stage( ARGS.Id );

  fixCanvas();
  stage.update();
  window.addEventListener( 'resize', fixCanvas, false );

  let xL = new MAKE.Shape();
  xL.graphics.beginFill( 'Red' ).drawRect( 0, 0, maxX * 2, 1 );

  xL.x = 0;
  xL.y = yCord( 0 );
  stage.addChild( xL );

  let yL = new MAKE.Shape();
  yL.graphics.beginFill( 'Red' ).drawRect( 0, 0, 1, maxY * 2 );

  yL.x = xCord( 0 );
  yL.y = 0;
  stage.addChild( yL );

  newRect( -maxX, maxY, maxX * 2, maxY * 2, 'black' );


  //
  //
  // let walkWay = new MAKE.Shape();
  // walkWay.graphics.beginFill( 'grey' ).drawRect( 0, 0, 1, maxY );
  // walkWay.x = xCord( ARGS.carLength / 6 + 2 * ARGS.carLength / 2.5 + ARGS.carLength );
  // walkWay.y = yCord( -1 * ( ARGS.carLength / 6 + 2 * ARGS.carLength / 2.5 + ARGS.carLength ) );
  // stage.addChild( walkWay );

  stage.update();

  buildIntersection();

  stage.update();

  // let car = new MAKE.Shape();
  // car.graphics.beginFill( 'blue' ).drawRect( 0, 0, ARGS.carLength, ARGS.carLength * ARGS.carRatio );
  // car.x = xCord( ARGS.carLength / 6 + ARGS.carLength / 2.5 );
  // car.y = yCord( -1 * maxY + ARGS.carLength * ARGS.carRatio );
  // // car.x = xCord( 0 );
  // // car.y = yCord( 0 );
  // stage.addChild( car );
  //
  // stage.update();
  // createjs.Ticker.setFPS( 60 );
  // createjs.Ticker.addEventListener( 'tick', function() {
  //   stage.update();
  // } );
  //
  // console.log( car );
  //
  // // car.rotation = 90;
  //
  // TWEEN.get( car ).to( { y: yCord( -1 * ( ARGS.carLength / 6 + 2 * ARGS.carLength / 2.5 + ARGS.carLength ) ) }, 4000, EASE.getPowIn( 2 ) )
  //   .to( { y: yCord( ARGS.carLength / 6 + ARGS.carLength / 2.5 ), x: xCord( -1 * ( ARGS.carLength / 6 + 2 * ARGS.carLength / 2.5 + ARGS.carLength ) ),
  //   rotation: -90 }, 400, EASE.linear ).to( { x: xCord( maxY * -1 ) }, 4000, EASE.getPowOut( 2 ) );
}

/*
 ▄▄▄▄▄▄▄▄▄▄   ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌
▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌
▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌
▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀
*/
/**
 * Master build function that builds the intersection
 */
function buildIntersection() {
  buildSideWalks();
  buildPedSeperators();
  buildRoadLines();
}
/**
 * Builds the lines the seperates the cars
 */
function buildRoadLines() {
  let carSpace = ARGS.carLength;
  let lineSpace = ARGS.carLength / 3;
  let space = ARGS.carLength / 2.5;

  let totalWidth = carSpace * 5 + 4 * lineSpace + 10 * space;
  let pedestrianSpace = 3 * totalWidth / 4 / ARGS.pedNum;
  let pedSpaceSpace = totalWidth / 4 / ( ARGS.pedNum + 1 );

  const fixNum = function neg1to1( input ) {
    return ( input == 0 ? -1 : 1 );
  };

  for ( let i = 0; i < 2; i++ ) {
    for ( let j = 0; j < 2; j++ ) {
      // vertical lines
      newRect( fixNum( i ) * ( ARGS.carLength / 2 + space ),
        fixNum( j ) * ( carSpace * 2.5 + lineSpace * 2 + space * 8 + ARGS.carLength * 2.3 ), 1, fixNum( j ) * -maxY, 'orange' );

      // Horizontal lines
      newRect( fixNum( i ) * ( carSpace * 2.5 + lineSpace * 2 + space * 8 + ARGS.carLength * 2.3 ),
        fixNum( j ) * ( ARGS.carLength / 2 + space ), fixNum( i ) * maxX, 1, 'orange' );
    }
  }

  let y = ( carSpace * 2.5 + lineSpace * 2 + space * 8 + ARGS.carLength * 2.3 );
  for ( ; y < maxY; y += ARGS.carLength * ARGS.carRatio / 3 * 2 ) {
    newRect( carSpace * 1.5 + space * 3 + lineSpace,
      -1 * y, 1, ARGS.carLength * ARGS.carRatio / 3, 'white' );

  }

  newRect( -1 * ( ARGS.carLength / 2 ),
    -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 8 + ARGS.carLength * 2.3 ), carSpace, carSpace * ARGS.carRatio, 'blue' );
}
/**
 * build the pedestrian dividers
 */
function buildPedSeperators() {

  let carSpace = ARGS.carLength;
  let lineSpace = ARGS.carLength / 3;
  let space = ARGS.carLength / 2.5;

  let totalWidth = carSpace * 5 + 4 * lineSpace + 10 * space;
  let pedestrianSpace = 3 * totalWidth / 4 / ARGS.pedNum;
  let pedSpaceSpace = totalWidth / 4 / ( ARGS.pedNum + 1 );

  // setup pedestrian crossing lines
  for ( let i = totalWidth / 2 * -1; i < totalWidth / 2 - pedestrianSpace; i += pedestrianSpace ) {
    i += pedSpaceSpace;

    // bottom ped Lines
    newRect( i, -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 5 ), pedestrianSpace, ARGS.carLength * 2.3, 'yellow' );

    // top ped lines
    newRect( i, carSpace * 2.5 + lineSpace * 2 + space * 5, pedestrianSpace, ARGS.carLength * -2.3, 'yellow' );

    // rigth ped lines
    newRect( carSpace * 2.5 + lineSpace * 2 + space * 5, i, ARGS.carLength * 2.3, -1 * pedestrianSpace, 'yellow' );

    // left ped lines
    newRect( -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 5 ), i, ARGS.carLength * -2.3, -1 * pedestrianSpace, 'yellow' );
  }

  // setup pedestrian seperator
  // vertical lines
  newRect( totalWidth / 2 * -1, carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3, totalWidth, 1, 'yellow' );
  newRect( totalWidth / 2 * -1, carSpace * 2.5 + lineSpace * 2 + space * 7 + ARGS.carLength * 2.3, totalWidth, 1, 'yellow' );
  newRect( totalWidth / 2 * -1, -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ), totalWidth, 1, 'yellow' );
  newRect( totalWidth / 2 * -1, -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 7 + ARGS.carLength * 2.3 ), totalWidth, 1, 'yellow' );

  // Horizontal lines
  newRect( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3, totalWidth / 2 * -1, 1, -1 * totalWidth, 'yellow' );
  newRect( carSpace * 2.5 + lineSpace * 2 + space * 7 + ARGS.carLength * 2.3, totalWidth / 2 * -1, 1, -1 * totalWidth, 'yellow' );
  newRect( -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ), totalWidth / 2 * -1, 1, -1 * totalWidth, 'yellow' );
  newRect( -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 7 + ARGS.carLength * 2.3 ), totalWidth / 2 * -1, 1, -1 * totalWidth, 'yellow' );

}
/**
 * Builds the side walks of the intersection
 */
function buildSideWalks() {

  const fixNum = function neg1to1( input ) {
    return ( input == 0 ? -1 : 1 );
  };

  let carSpace = ARGS.carLength;
  let lineSpace = ARGS.carLength / 3;
  let space = ARGS.carLength / 2.5;

  for ( let i = 0; i < 2; i++ ) {
    for ( let j = 0; j < 2; j++ ) {
      // Vertical sidewalks
      newRect( fixNum( i ) * ( carSpace / 2 + lineSpace * 2 + space * 5 + carSpace * 2 ),
        fixNum( j ) * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ),
         1, maxY * ( fixNum( j ) < 0 ? 1 : -1 ), 'white' );

      // Horizontal sidewalks
      newRect( fixNum( i ) * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ),
        fixNum( j ) * ( carSpace / 2 + lineSpace * 2 + space * 5 + carSpace * 2 ),
        maxX * ( fixNum( i ) < 0 ? -1 : 1 ), 1, 'white' );

      // corner sidewalks
      if ( i != 0 && j != 1 ) {
        continue;
      }
      newArc( fixNum( i ) * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ),
        fixNum( j ) * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ), ( i + j ) * Math.PI / 2 + Math.PI / 2 * 3, ( i + j ) * Math.PI / 2 + 4 * Math.PI / 2,
        ARGS.carLength * 2.3 + space, 'white' );
    }
  }
  // need this because the bottom right arc is messed up
  newArc( ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ),
    -1 * ( carSpace * 2.5 + lineSpace * 2 + space * 6 + ARGS.carLength * 2.3 ), Math.PI, 3 * Math.PI / 2,
    ARGS.carLength * 2.3 + space, 'white' );
}

module.exports = {
  setArgs
};
