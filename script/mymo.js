const c0 = new mojs.Shape({
    shape:        'polygon',     // shape 'circle' is default
    points:       6,
    radius:       70,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '50%',
    top: '40%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [-180] : 0 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        999
}).replay();

const z0 = new mojs.Shape({
    shape:        'zigzag',     // shape 'circle' is default
    points:       9,
    radius:       70,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '20%',
    top: '25%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [90] : -270 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();

const a0 = new mojs.Shape({
    shape:        'polygon',     // shape 'circle' is default
    points:       9,
    radius:       70,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '60%',
    top: '10%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [0] : 115 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();


const t0 = new mojs.Shape({
    shape:        'polygon',     // shape 'circle' is default
    points:       3,
    radius:       70,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '10%',
    top: '75%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [0] : -240 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();

const s0 = new mojs.Shape({
    shape:        'polygon',     // shape 'circle' is default
    points:       4,
    radius:       50,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '75%',
    top: '75%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [0] : -240 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();

const h0 = new mojs.Shape({
    shape:        'zigzag',     // shape 'circle' is default
    points:       3,
    radius:       40,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '55%',
    top:  '70%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [90] : -270 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();

const h1 = new mojs.Shape({
    shape:        'zigzag',     // shape 'circle' is default
    points:       3,
    radius:       40,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '45%',
    top:  '70%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [-90] : -450 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();

const s1 = new mojs.Shape({
    shape:        'polygon',     // shape 'circle' is default
    points:       2,
    radius:       42,           // shape radius
    fill:         'transparent',// same as 'transparent'
    stroke:       '#BDFFED',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    left: '50%',
    top: '70%',
    isShowStart:  true,         // show before any animation starts
    angle:          { [10] : -350 },
    duration:      2000,
    delay:         1000,
    easing:        'cubic.out',
    repeat:        100
}).replay();
