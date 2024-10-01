(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.toothcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA4BpIg4g5Ig3A5QgKAKgPAAQgOAAgKgKQgKgKAAgOQAAgOAKgLIA4g4Ig4g3QgKgKAAgPQAAgPAKgKQAKgJAOAAQAPAAAKAJIA3A5IA4g5QAKgJAPAAQAOAAAKAJQAKAKAAAPQAAAPgKAKIg4A3IA4A4QAKALAAAOQAAAOgKAKQgKAKgOAAQgPAAgKgKg");
	this.shape.setTransform(36.975,-54.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AA5BpIg5g4Ig4A4QgJAKgOAAQgPAAgKgKQgKgKAAgOQAAgPAKgJIA4g5Ig4g4QgKgKAAgOQAAgOAKgKQAKgKAPAAQAOAAAJAKIA4A4IA5g4QAKgKAOAAQAOAAAKAKQAKAKAAAOQAAAOgKAKIg4A4IA4A5QAKAJAAAPQAAAOgKAKQgKAKgOAAQgOAAgKgKg");
	this.shape_1.setTransform(-69.9,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AEHB8QgFgFgBgHQgBgigRgkQgTgqgkgfQhKhChsAHQiKAJhJBeQglAxgKAzQgCAHgGAFQgGAEgIgBQgIgCgEgGQgEgGABgIQADgPAHgVQAQgoAagiQAjgwAzgeQBDgnBYgGIAIgBQB3gFBSBKQAmAiAXAtQAWAtACAtQABAIgGAGQgFAFgHAAIgBAAQgIAAgFgFg");
	this.shape_2.setTransform(-15.2329,-9.5638);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("Ag3ChQgfgpgHg9QgFgsAMhSQANhWgEgqIAkBWQAMAfAdAXQATAPApAUQARAIAKALQAOAOgIAOQgNAZgsgVQAkAsAHAmQAIAygxAYQgTAJgQAAQggAAgagjg");
	this.shape_3.setTransform(-132.9031,19.3583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ah8EOQgChpACgzQAEhXAShCQAsidCKhgQAZgRAPAbQAPAagYARQg8ApgoA6QgnA6gRBGQgPA8gDBQQgCAvACBfQABAegeAAQgfAAgBgeg");
	this.shape_4.setTransform(-129.0372,-11.1572);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgiBoQAEghgQgiQgLgXgbgiQgfgqAXgQQAOgKAQAJQAKAGANARQgNg4AMglQAPgwA2ACQA9ABALBAQAJAzgWA5QgPApgwBEQgyBHgQAng");
	this.shape_5.setTransform(132.193,-87.4523);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Aj5EPQgdgCAAgeQAAgfAdACQBNAFBeg4QBRgwA2g2QA+g7AshQQAyhbAFhEQADgdAeAAQAfAAgDAdQgHBag5BkQg2BehBA9QhHBFhTAtQhiA1hPAAIgOAAg");
	this.shape_6.setTransform(107.9845,-59.4053);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhPAnQgVgBgCgXQgDgUASgLQAIgGAcgJQAigLApAFQAwAEAXAZQALAKgEANQgDAOgTAGQgNADgfgGQgigHgpAIQghAGgGAAIgBAAg");
	this.shape_7.setTransform(-69.948,-82.6387);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAoAhQgpgHgiAHQgfAGgNgDQgTgFgDgOQgEgNALgLQAWgYAxgGQAogEAiAKQAcAJAJAFQARALgCAUQgCAXgVACIgogGg");
	this.shape_8.setTransform(35.1819,-82.6925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer_10
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9E1EA").s().p("AjwQxQg+g6g4hvQAVAmAkAhQAgAeAeANQAqATA9ABQA4gBAygPQB+gmAHjHQAFiVgziUQgqh6iMhbQg4glgJgLQgQgXAigXQAdgUB2hCQBJgpAhguQBQhvA1ilQA5iuAEipQAFi8hAiGQhIiZiYg+QCoAqBjDAQBaCuAJD0QAGCnhUFIIg7DhQgaBuABAwQAIEOgnDDQg8EvidgBQhqAAhShMg");
	this.shape_9.setTransform(58.5199,-5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkOEQQgthVAShxQAPhdA2hhQAWgnAogpQAtguAugbQCBhsCaAoQBHATATAvQAVAzhCAsQgRALhsAxQhHAggkA0QgiAzgJBeQgJBxgOAlQgfBThNACIgEAAQhJAAgohMg");
	this.shape_10.setTransform(-82.7537,-70.888);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEECED").s().p("AoBSNQiGgDhIguQhkg/g3iqQgihmgIimQgMjegCgPQgGgogehoQgniFgWhOQhWkygLi/QgOj9CKjGQCTjTDqgOQC8gLC2AyICDAmQBFATA0ACQBIADBVgSQAogJBzghQDTg9CdAHQDLAJB5DKQBsC0AKEQQAGCnhUFIIg7DhQgaBuABAwQAIEMgnDFQg8EvieAAQirAAh0jSQgXgqg1h3QgmhWgXgWQhwhuhhgHQhigHhhBhQgvAwguBjQgaA5gxB2QgsBjguAuQg5A6hNAAIgHAAg");
	this.shape_11.setTransform(-18.1988,-5.4061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#84B7B4").s().p("As5B7QlXgzAAhIQAAhHFXgzQFWgyHjAAQHkAAFXAyQFWAzAABHQAABIlWAzQlWAynlAAQnjAAlWgyg");
	this.shape_12.setTransform(-16.475,104.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toothcopy, new cjs.Rectangle(-142.5,-121.9,285,243.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgiBoQAEghgQgiQgLgXgbgiQgfgqAXgQQAOgKAQAJQAKAGANARQgNg4AMglQAPgwA2ACQA9ABALBAQAJAzgWA5QgPApgwBEQgyBHgQAng");
	this.shape.setTransform(20.943,-17.8023);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Aj5EPQgdgCAAgeQAAgfAdACQBNAFBeg4QBRgwA2g2QA+g7AshQQAyhbAFhEQADgdAeAAQAfAAgDAdQgHBag5BkQg2BehBA9QhHBFhTAtQhiA1hPAAIgOAAg");
	this.shape_1.setTransform(-3.2655,10.2447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-31.2,-37.4,62.5,74.8), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBCQgGgDgDgDQgCgEgBgHIgBgSIAAgqIgMAAIAAgVIAMAAIAAgTIAZgQIAAAjIASAAIAAAVIgSAAIAAAnIAAAOQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEABQAEAAAGgCIADAUQgJAEgMAAQgHAAgEgCg");
	this.shape.setTransform(66.5,-2.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeArQgMgIgDgNIAagFQACAIAFAEQAFAEAIAAQAKAAAGgEQADgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgCgCgHgBQgegHgJgGQgMgHAAgOQAAgNAKgJQALgIAVgBQAUABAJAGQAKAHADANIgYAFQgCgHgEgCQgFgDgHAAQgKAAgEADQgDABAAADQAAAEADABQADADAUAFQAVAFAIAGQAIAHAAALQAAAOgLAKQgLAKgXAAQgTAAgMgJg");
	this.shape_1.setTransform(57.8,-0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBEIAAhiIAZAAIAABigAgMgrIAAgYIAZAAIAAAYg");
	this.shape_2.setTransform(50.1,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBCQgGgDgCgDQgDgEgCgHIAAgSIAAgqIgMAAIAAgVIAMAAIAAgTIAZgQIAAAjIASAAIAAAVIgSAAIAAAnIAAAOQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEABQAEAAAGgCIADAUQgJAEgMAAQgGAAgFgCg");
	this.shape_3.setTransform(44.35,-2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAzIAAgzQgBgPgBgEQgCgFgEgDQgDgCgGAAQgFAAgFADQgGAEgCAGQgCAGAAAQIAAAtIgaAAIAAhiIAYAAIAAAOQANgRASAAQAJAAAIAEQAGADAEAFQAEAFACAGQABAGAAAMIAAA8g");
	this.shape_4.setTransform(35.4,-0.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape_5.setTransform(24.201,-0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4QgMgOAAgYQAAgZAMgNQAMgNARAAQAQAAAMAOIAAgxIAaAAIAACHIgYAAIAAgOQgGAIgJAEQgIAEgHAAQgRAAgMgNgAgPgGQgFAHAAAOQgBARAFAHQAGAKALgBQAJAAAGgHQAGgIAAgPQAAgRgGgHQgGgHgKAAQgIAAgHAHg");
	this.shape_6.setTransform(13,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAjQgKgOAAgUQAAgYANgOQAMgOAUAAQAVAAANAPQAMAPAAAdIhBAAQABALAGAHQAGAGAIAAQAGAAAEgDQAEgEACgHIAaAFQgFAOgKAHQgLAIgQAAQgZAAgMgRgAgNgYQgFAGAAALIAmAAQAAgLgGgHQgFgFgIAAQgIgBgGAHg");
	this.shape_7.setTransform(-3.249,-0.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATBEIAAg0QgBgPgBgEQgBgEgEgDQgEgCgGAAQgFAAgFAEQgFADgCAFQgDAGAAANIAAAxIgaAAIAAiHIAaAAIAAAyQANgPAQAAQAJAAAIADQAGAEAEAFQAEAFACAHQABAGAAAMIAAA6g");
	this.shape_8.setTransform(-14.2,-2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBCQgGgDgCgDQgDgEgCgHIAAgSIAAgqIgMAAIAAgVIAMAAIAAgTIAZgQIAAAjIASAAIAAAVIgSAAIAAAnIAAAOQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEABQAEAAAGgCIADAUQgJAEgMAAQgGAAgFgCg");
	this.shape_9.setTransform(-23.15,-2.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDBCQgGgDgDgDQgCgEgBgHIgBgSIAAgqIgMAAIAAgVIAMAAIAAgTIAZgQIAAAjIASAAIAAAVIgSAAIAAAnIAAAOQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAEABQAEAAAGgCIADAUQgJAEgMAAQgHAAgEgCg");
	this.shape_10.setTransform(-34.75,-2.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBEIAAhiIAZAAIAABigAgMgrIAAgYIAZAAIAAAYg");
	this.shape_11.setTransform(-40.6,-2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeArQgLgIgEgNIAagFQACAIAFAEQAFAEAIAAQAKAAAGgEQADgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgCgCgHgBQgegHgJgGQgLgHgBgOQAAgNAKgJQALgIAVgBQAUABAJAGQAKAHAEANIgZAFQgCgHgEgCQgFgDgHAAQgKAAgEADQgDABAAADQAAAEACABQAEADAUAFQAVAFAIAGQAIAHAAALQAAAOgLAKQgLAKgXAAQgTAAgMgJg");
	this.shape_12.setTransform(-48.75,-0.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBEIAAhiIAZAAIAABigAgMgrIAAgYIAZAAIAAAYg");
	this.shape_13.setTransform(-56.45,-2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAxIgnhhIAbAAIATAxIAEARIADgJIADgIIASgxIAbAAIgnBhg");
	this.shape_14.setTransform(-64.425,-0.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6633").s().p("ApZDyQhlAAhHhHQhHhHAAhkQAAhkBHhHQBHhGBlgBISzAAQBlABBHBGQBHBHAABkQAABDggA2QgPAbgYAXQgkAkgrASQgrASgygBg");
	this.shape_15.setTransform(4.475,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-85,-27.2,174,48.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBoIAAhQQAAgXgDgGQgBgGgHgEQgFgEgJAAQgJAAgHAFQgJAFgDAJQgDAJAAATIAABMIgpAAIAAjPIApAAIAABMQASgWAaAAQAOAAAMAFQALAFAFAIQAGAIABAKQADAJAAAUIAABYg");
	this.shape.setTransform(79.7,34.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgGQgEgFgCgKQgBgHAAgVIAAhBIgSAAIAAgfIASAAIAAgfIAngWIAAA1IAbAAIAAAfIgbAAIAAA8QAAATABACQAAAEADACQADABAEAAQAFAAALgDIADAeQgOAHgRAAQgLgBgIgDg");
	this.shape_1.setTransform(66.025,34.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_2.setTransform(52.375,36.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_3.setTransform(34.675,36.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgGQgEgFgCgKQgBgHAAgVIAAhBIgSAAIAAgfIASAAIAAgfIAngWIAAA1IAbAAIAAAfIgbAAIAAA8QAAATABACQAAAEADACQADABAEAAQAFAAALgDIADAeQgOAHgRAAQgLgBgIgDg");
	this.shape_4.setTransform(20.975,34.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2A1QgPgVAAgfQAAgkATgVQAUgWAeAAQAgAAAUAXQATAWgBAtIhiAAQAAARAJAKQAKAKAMAAQAKAAAGgFQAGgFAEgMIAnAHQgHAWgRALQgQAMgZAAQgmAAgTgagAgTgmQgJAKAAAQIA7AAQgBgRgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_5.setTransform(-0.1726,36.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBoIAAhQQAAgXgCgGQgCgGgGgEQgGgEgJAAQgIAAgJAFQgHAFgEAJQgDAJAAATIAABMIgpAAIAAjPIApAAIAABMQATgWAaAAQANAAALAFQALAFAGAIQAFAIACAKQACAJAAAUIAABYg");
	this.shape_6.setTransform(-16.9,34.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgGQgEgFgCgKQgBgHAAgVIAAhBIgSAAIAAgfIASAAIAAgfIAngWIAAA1IAbAAIAAAfIgbAAIAAA8QAAATABACQAAAEADACQADABAEAAQAFAAALgDIADAeQgOAHgRAAQgLgBgIgDg");
	this.shape_7.setTransform(-30.575,34.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgGQgEgFgCgKQgBgHAAgVIAAhBIgSAAIAAgfIASAAIAAgfIAngWIAAA1IAbAAIAAAfIgbAAIAAA8QAAATABACQAAAEADACQADABAEAAQAFAAALgDIADAeQgOAHgRAAQgLgBgIgDg");
	this.shape_8.setTransform(-48.275,34.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBGQgNgGgFgNQgFgLgBgVIAAhfIAoAAIAABFQABAfACAHQABAHAHAEQAFAFAJAAQAJgBAIgFQAJgGACgIQAEgIAAggIAAg/IAnAAIAACWIglAAIAAgXQgIAMgNAHQgMAHgPAAQgQAAgLgHg");
	this.shape_9.setTransform(-62,37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_10.setTransform(-79.625,36.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BUQgSgUAAgmQAAglASgUQASgUAbAAQAYAAATAVIAAhLIAnAAIAADPIgkAAIAAgWQgKANgMAGQgNAHgLAAQgaAAgTgWgAgWgJQgKAKAAAWQAAAZAHAKQAKAQAQAAQAOAAAJgLQAKgMAAgXQAAgbgKgKQgJgMgOAAQgOAAgJAMg");
	this.shape_11.setTransform(100.375,-0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2A1QgPgVAAgfQAAgkATgVQAUgWAeAAQAgAAAUAXQATAWgBAtIhiAAQAAARAJAKQAKAKAMAAQAKAAAGgFQAGgFAEgMIAnAHQgHAWgRALQgQAMgZAAQgmAAgTgagAgTgmQgJAKAAAQIA7AAQgBgRgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_12.setTransform(83.6274,2.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTBoIAAjPIAnAAIAADPg");
	this.shape_13.setTransform(71.725,-0.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBoIAAjPIAnAAIAADPg");
	this.shape_14.setTransform(63.675,-0.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBGQgMgHgFgMQgGgMABgUIAAhfIAnAAIAABFQAAAfACAHQADAHAFAEQAHAFAIAAQAJAAAJgGQAIgFACgJQADgIABgfIAAhAIAnAAIAACWIgkAAIAAgXQgJAMgNAHQgNAHgPAAQgPAAgMgHg");
	this.shape_15.setTransform(50.75,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhIBqIAAjPIAlAAIAAAWQAHgLANgHQAMgIAOABQAagBASAWQATAUAAAkQAAAlgTAVQgSAVgaAAQgMAAgKgFQgKgFgMgMIAABMgAgYg+QgJALAAAXQAAAZAKALQAKANAOAAQAOAAAIgMQAKgKAAgaQAAgXgKgMQgJgLgOAAQgNAAgLALg");
	this.shape_16.setTransform(33.5,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2A1QgPgVAAgfQAAgkATgVQAUgWAeAAQAgAAAUAXQATAWgBAtIhiAAQAAARAJAKQAKAKAMAAQAKAAAGgFQAGgFAEgMIAnAHQgHAWgRALQgQAMgZAAQgmAAgTgagAgTgmQgJAKAAAQIA7AAQgBgRgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_17.setTransform(7.9274,2.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRBLIg8iVIAqAAIAcBMIAHAZIAFgNIADgMIAehMIAoAAIg8CVg");
	this.shape_18.setTransform(-8.2,2.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag4BCQgNgNAAgTQAAgNAFgJQAHgLAKgEQAMgFAUgEQAbgFALgFIAAgEQAAgLgGgFQgFgFgQAAQgKAAgGAEQgGAEgEALIgkgHQAGgWAQgKQAPgLAcAAQAaAAANAHQAOAGAFAKQAFAJAAAaIgBAuQABAUACAJQACAJAEALIgnAAIgDgMIgCgEQgLAKgLAFQgLAFgNAAQgXAAgNgNgAgBAJQgQAEgFADQgIAGAAAIQAAAIAHAHQAFAGAKAAQAKAAAKgHQAHgGACgIQACgFAAgOIAAgIIgYAGg");
	this.shape_19.setTransform(-24.2,2.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdBoIAAhQQAAgXgCgGQgDgGgFgEQgGgEgJAAQgIAAgJAFQgHAFgEAJQgEAJABATIAABMIgpAAIAAjPIApAAIAABMQASgWAbAAQANAAAMAFQAKAFAGAIQAFAIACAKQACAJAAAUIAABYg");
	this.shape_20.setTransform(-41.1,-0.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtBGQgMgHgFgMQgGgMABgUIAAhfIAnAAIAABFQAAAfACAHQADAHAFAEQAHAFAIAAQAJAAAJgGQAHgFADgJQADgIAAgfIAAhAIApAAIAACWIglAAIAAgXQgJAMgNAHQgNAHgPAAQgOAAgNgHg");
	this.shape_21.setTransform(-66.9,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_22.setTransform(-84.525,2.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/BnIgEgfQAKACAHAAQAOAAAHgIQAGgIAEgNIg5iWIAqAAIAjBqIAjhqIApAAIg1CQIgJAaQgFANgFAHQgFAHgFAFQgGAEgJACQgJADgMAAQgLAAgLgDg");
	this.shape_23.setTransform(-101.675,5.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguBCQgSgMgFgWIAngGQADAMAIAGQAIAGANAAQAPAAAIgGQAFgEAAgGQAAgFgDgDQgDgDgKgCQgvgLgNgJQgSgLAAgVQAAgUAQgNQAPgOAgAAQAeAAAPALQAPAKAGATIgmAHQgCgJgHgEQgGgFgMAAQgQAAgGAEQgFAEAAAFQAAAEAEADQAFAEAfAHQAgAHANALQAMAJAAATQAAAVgRAPQgSAPghAAQgeAAgSgNg");
	this.shape_24.setTransform(100.325,-31.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdBNIAAhNQAAgXgCgHQgDgHgGgEQgGgFgIAAQgJAAgJAHQgIAFgCAKQgDAIgBAZIAABEIgoAAIAAiWIAlAAIAAAXQAUgaAdAAQANAAALAFQALAFAFAHQAGAHACAKQACAJAAASIAABcg");
	this.shape_25.setTransform(83.8,-32.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_26.setTransform(66.125,-31.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBoIAAiWIAnAAIAACWgAgThCIAAglIAnAAIAAAlg");
	this.shape_27.setTransform(53.225,-34.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgFQgEgHgCgJQgBgHAAgVIAAhAIgSAAIAAghIASAAIAAgdIAngYIAAA1IAbAAIAAAhIgbAAIAAA7QAAASABAEQAAACADACQADADAEAAQAFAAALgFIADAgQgOAFgRAAQgLABgIgEg");
	this.shape_28.setTransform(44.375,-34.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag4BCQgOgNAAgTQAAgNAHgJQAFgLAMgEQAKgFAVgEQAbgFALgFIAAgEQAAgLgGgFQgFgFgQAAQgKAAgGAEQgGAEgDALIgkgHQAGgWAPgKQAPgLAdAAQAZAAANAHQAOAGAEAKQAGAJAAAaIAAAuQAAAUABAJQACAJAGALIgoAAIgDgMIgCgEQgKAKgMAFQgKAFgNAAQgYAAgNgNgAAAAJQgRAEgFADQgIAGAAAIQAAAIAGAHQAHAGAJAAQAKAAAJgHQAIgGACgIQACgFAAgOIAAgIIgXAGg");
	this.shape_29.setTransform(31.45,-31.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTBoIAAjPIAnAAIAADPg");
	this.shape_30.setTransform(19.375,-34.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtBGQgMgHgFgMQgGgLABgWIAAheIAnAAIAABFQAAAfACAHQADAHAFAEQAHAEAIAAQAJABAJgGQAHgGAEgIQACgIAAgfIAAhAIApAAIAACVIglAAIAAgWQgJAMgNAHQgNAHgPAAQgOAAgNgHg");
	this.shape_31.setTransform(6.45,-31.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGBkQgIgEgEgFQgEgHgCgJQgBgHAAgVIAAhAIgSAAIAAghIASAAIAAgdIAngYIAAA1IAbAAIAAAhIgbAAIAAA7QAAASABAEQAAACADACQADADAEAAQAFAAALgFIADAgQgOAFgRAAQgLABgIgEg");
	this.shape_32.setTransform(-7.175,-34.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4BCQgOgNAAgTQABgNAFgJQAGgLAMgEQAKgFAVgEQAbgFALgFIAAgEQAAgLgGgFQgGgFgOAAQgLAAgGAEQgGAEgDALIgkgHQAFgWAPgKQAPgLAdAAQAaAAANAHQAOAGAEAKQAGAJAAAaIgBAuQAAAUACAJQADAJAEALIgnAAIgEgMIgBgEQgKAKgMAFQgLAFgMAAQgYAAgNgNgAgBAJQgQAEgFADQgIAGAAAIQAAAIAGAHQAHAGAJAAQAKAAAJgHQAIgGACgIQACgFAAgOIAAgIIgYAGg");
	this.shape_33.setTransform(-20.1,-31.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgwBNIAAiWIAlAAIAAAWQAKgPAGgFQAIgFAKAAQANAAANAIIgNAjQgKgHgIAAQgJAAgFAEQgFAFgDAMQgEAMAAAmIAAAug");
	this.shape_34.setTransform(-32.725,-32.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgzBfQgQgOAAgUIAAgEIAtAFQABAIAFADQAFAEALAAQAQAAAIgFQAFgCADgIQACgEAAgOIAAgWQgSAYgaAAQgfAAgRgZQgOgUAAgeQAAgmASgTQASgVAbAAQAbAAASAZIAAgVIAlAAIAACGQAAAbgEANQgEANgIAHQgIAIgNAFQgOADgUAAQglABgQgNgAgWhBQgKAMAAAWQAAAYAKALQAJAKANABQAOAAAKgMQAKgLAAgWQAAgXgJgMQgKgLgPAAQgNAAgJALg");
	this.shape_35.setTransform(-48.675,-29);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdBNIAAhNQAAgXgDgHQgDgHgFgEQgGgFgIAAQgJAAgIAHQgIAFgEAKQgDAIAAAZIAABEIgnAAIAAiWIAlAAIAAAXQATgaAdAAQANAAALAFQALAFAGAHQAFAHADAKQACAJAAASIAABcg");
	this.shape_36.setTransform(-66,-32.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmBFQgTgJgKgSQgKgSAAgZQAAgUAKgSQAKgTASgKQASgKAVAAQAiAAAWAXQAWAWAAAhQAAAigWAWQgWAXgiAAQgUAAgSgKgAgZghQgLAMAAAVQAAAWALAMQAKAMAPAAQAQAAAKgMQALgMAAgWQAAgVgLgMQgKgMgQAAQgPAAgKAMg");
	this.shape_37.setTransform(-83.675,-31.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyA6QgUgVAAglQAAgkAUgVQAUgVAgAAQAbAAAQAMQARAMAHAYIgnAHQgCgLgHgGQgIgGgKAAQgPAAgIAKQgJAKAAAYQAAAaAJALQAJALAOAAQALAAAIgGQAHgHADgPIAnAGQgGAbgRAOQgSAOgcAAQghAAgTgVg");
	this.shape_38.setTransform(-100.45,-31.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-118,-52.6,236,105.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHByQgJgFgFgGQgFgHgCgLIgBggIAAhJIgUAAIAAgkIAUAAIAAgiIAsgbIAAA9IAfAAIAAAkIgfAAIAABEQAAAVABADQABAEAEACQADACAEAAQAHAAALgEIAFAjQgRAHgTAAQgNAAgJgEg");
	this.shape.setTransform(50.2,-5.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBQQgNgIgHgNQgGgOAAgYIAAhrIAuAAIAABOQgBAjADAIQACAJAHAEQAHAFAKAAQALAAAIgGQAKgHADgJQADgKAAgjIAAhIIAuAAIAACqIgqAAIAAgaQgKAOgOAHQgPAJgRgBQgRAAgOgHg");
	this.shape_1.setTransform(34.55,-2.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBPQgWgLgLgVQgLgUAAgcQAAgXALgVQALgWAVgLQATgKAZgBQAnABAZAZQAZAZgBAmQABAngZAZQgaAagmgBQgXABgUgLgAgdgmQgMANAAAZQAAAaAMANQANAOAQAAQASAAAMgOQALgNAAgaQAAgZgLgNQgMgOgSAAQgQAAgNAOg");
	this.shape_2.setTransform(14.5,-2.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWB2IAAjrIAtAAIAADrg");
	this.shape_3.setTransform(-9.325,-5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWB2IAAjrIAtAAIAADrg");
	this.shape_4.setTransform(-18.475,-5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBQQgOgIgFgNQgHgOAAgYIAAhrIAtAAIAABOQABAjACAIQACAJAHAEQAGAFALAAQALAAAIgGQAKgHADgJQAEgKgBgjIAAhIIAuAAIAACqIgqAAIAAgaQgKAOgOAHQgPAJgRgBQgRAAgOgHg");
	this.shape_5.setTransform(-33.2,-2.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSB4IAAjrIApAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAXQAUAXAAArQAAAqgUAXQgWAYgeAAQgMAAgMgGQgLgGgNgNIAABWgAgbhHQgLANAAAZQAAAdAMANQALAOAQAAQAQAAAKgNQAKgMAAgcQAAgbgKgNQgMgNgPAAQgQAAgLAMg");
	this.shape_6.setTransform(-52.8,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("ApmExQhnAAhKhKQhJhIAAhoIAAhtQAAhnBJhKQBKhJBnAAITNAAQBnAABJBJQBKBKAABnIAABtQAABohKBIQhJBKhnAAg");
	this.shape_7.setTransform(0.025,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKCfQgPgHgHgJQgGgJgDgPQgCgLAAgiIAAhmIgfAAIAAgzIAfAAIAAgwIBCgkIAABUIAvAAIAAAzIgvAAIAABfQAAAdACAEQABAGAFACQAEADAHABQAKgBARgFIAGAwQgXAKgeAAQgSAAgOgFg");
	this.shape_8.setTransform(74.875,-7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhMBvQgVgKgJgTQgJgUAAghIAAiWIBEAAIAABtQAAAyADALQAEAMAKAGQAJAHAQAAQAQAAAOgJQAOgJAEgNQAFgNABgzIAAhkIBDAAIAADuIg/AAIAAgkQgOATgWALQgWALgZAAQgaAAgUgLg");
	this.shape_9.setTransform(51.55,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBuQgggPgRgdQgRgcAAgoQAAggARgdQARgeAegPQAegQAlAAQA6AAAlAkQAlAjAAA1QAAA1glAkQgmAkg5AAQgiAAgfgPgAgrg1QgSATAAAiQAAAkASASQASATAZAAQAbAAASgTQARgSAAgkQAAgigRgTQgSgTgbAAQgZAAgSATg");
	this.shape_10.setTransform(21.625,-3.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghClIAAlJIBDAAIAAFJg");
	this.shape_11.setTransform(-13.875,-8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghClIAAlJIBDAAIAAFJg");
	this.shape_12.setTransform(-27.525,-8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhMBvQgVgKgJgTQgJgUAAghIAAiWIBDAAIAABtQABAyADALQAEAMAJAGQALAHAPAAQAQAAANgJQAOgJAFgNQAGgNAAgzIAAhkIBDAAIAADuIg/AAIAAgkQgNATgXALQgWALgaAAQgZAAgUgLg");
	this.shape_13.setTransform(-49.5,-3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah7CnIAAlIIA/AAIAAAjQAMgSAUgLQAWgLAYAAQAtAAAfAgQAeAhAAA6QABA7ggAhQgfAhgtAAQgTAAgSgIQgRgIgTgTIAAB4gAgohiQgRARAAAjQAAApARASQARATAYAAQAYAAAPgRQAQgRAAgoQAAgmgQgSQgQgSgYAAQgYAAgQASg");
	this.shape_14.setTransform(-78.75,0.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AuUGpQiaAAhuhnQhthlAAiQIAAiZQAAiQBthmQBuhmCaAAIcpAAQCaAABtBmQBuBmAACQIAACZQAACQhuBlQhtBniaAAg");
	this.shape_15.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.9,-42.5,257.9,85);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818483").s().p("AhNhdICfBjIijBYg");
	this.shape.setTransform(108.625,99.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818483").s().p("AhNhdICfBjIijBYg");
	this.shape_1.setTransform(108.975,81.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#818483").s().p("AhNhdICeBjIiiBYg");
	this.shape_2.setTransform(109.3,63.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#818483").s().p("AhQADIChhgIAAC7g");
	this.shape_3.setTransform(-106.475,101.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#818483").s().p("AhQADIChhgIAAC7g");
	this.shape_4.setTransform(-106.475,83.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818483").s().p("AhQADIChhgIAAC7g");
	this.shape_5.setTransform(-106.475,65.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDC1C0").s().p("AChE+QglgGgKhpIgEh+QgChIgTgwQgUg0g1gbQgOgIhXgeQgvgNgZgKQgtgSgOgZQgOgZAJgaQALgiAygIQAngGAmAKIBvAdQA/ASAsAYQA2AeARA+QAKAiAEBWIAGB/QABBKgIA3QgHAwgEAKQgMAhgbAAIgIgBg");
	this.shape_6.setTransform(114.1385,5.9473);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDC1C0").s().p("AkrFuQgRglgEg7IgDhkQgChEAGiGQADhIAEgTQAIgyAbggQAIgKBVg5QBzg9CigpQCWgnArALQAvAMgLAlQgJAigpATQg2AYh3ApQhzAog6AbQhYApgdBbQgUA6AAB7IACBYQAAA0gCAkQgDA0gcAYQgJAIgKAAQgUAAgSgng");
	this.shape_7.setTransform(-104.9409,7.3958);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#818483").s().p("AiFBvQgNgDgIgLQgGgMADgNQACgOAMgHID8idQALgIANADQAOAEAIALQAGAMgDANQgCAOgMAHIj8CdQgIAFgJAAIgIgBg");
	this.shape_8.setTransform(1.35,-35.1479);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#818483").s().p("AivCwQhJhJAAhnQAAhmBJhJQBJhJBmAAQBnAABJBJQBJBJAABmQAABnhJBJQhJBJhnAAQhmAAhJhJgAiKiKQg5A6AABQQAABRA5A6QA6A5BQAAQBRAAA6g5QA6g6AAhRQAAhQg6g6Qg6g6hRAAQhQAAg6A6g");
	this.shape_9.setTransform(1.325,-35.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#818483").s().p("AsfTqIgFgCQgagLgdgaQg3g0gZhSQgThFgTyyIgBgRIQnnGIAAoUQAAgcAUgUQAUgUAdAAIL1AAQAbAAAVAUQAUAUAAAcIAASsI2JHZIAHMKgACOywQgEAFAAAGIAAI3IwnHFQAHGxAJFbQAMGpAKAiQARA6AkAoQAWAYAYANIEwAAIgHr7IWJnYIAAyHQAAgGgEgFQgFgEgGAAIr1AAQgHAAgFAEg");
	this.shape_10.setTransform(-51.85,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A1A6A5").s().p("AsaTPQgVgIgagYQgygvgWhLQgNgrgOpnQgHkzgEkqIQmnGIAAolQAAgRANgNQAMgLARAAIL1AAQASAAAMALQAMANAAARIAASaI2JHYIAHMCg");
	this.shape_11.setTransform(-51.825,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#818483").s().p("AFlC7IzZnMIAAgTIAKpaQgBgQARgKQAJgEATgEQAcgFAhgDQA3gGB/gIQCCgJCFgGIAFgBIS0HMIAAATQABE6gCFUQgDI8gNAuQgWBRg3A2QgSAQgTANIgRAJIgFACIlwAHgAppt/QigALgsAIIgKI3ITYHLIAHL7IEwgGQAXgNAWgYQAkgpAQg7QAJghAEmqQADlfgBmtIyHm7QiWAGiMALg");
	this.shape_12.setTransform(61.2321,27.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A1A6A5").s().p("AF/CpIzZnMIAKpbQAAgNEHgRQCDgICDgHISdHEQABErgBEzQgDJngMAsQgVBKgyAxIguAgIlQAHg");
	this.shape_13.setTransform(61.22,27.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.7,-125.8,299.5,251.6);


(lib.br = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhPAnQgVgBgCgXQgDgUASgLQAIgGAcgJQAigLApAFQAwAEAXAZQALAKgEANQgDAOgTAGQgNADgfgGQgigHgpAIQghAGgGAAIgBAAg");
	this.shape.setTransform(-52.548,0.0113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAoAhQgpgHgiAHQgfAGgNgDQgTgFgDgOQgEgNALgLQAWgYAxgGQAogEAiAKQAcAJAJAFQARALgCAUQgCAXgVACIgogGg");
	this.shape_1.setTransform(52.5819,-0.0425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.br, new cjs.Rectangle(-62.9,-3.9,125.8,7.9), null);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(0,9.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-17.4,174,48.5);


(lib.tooth_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag3ChQgfgpgHg9QgFgsAMhSQANhWgEgqIAkBWQAMAfAdAXQATAPApAUQARAIAKALQAOAOgIAOQgNAZgsgVQAkAsAHAmQAIAygxAYQgTAJgQAAQggAAgagjg");
	this.shape.setTransform(-132.9031,19.3583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ah8EOQgChpACgzQAEhXAShCQAsidCKhgQAZgRAPAbQAPAagYARQg8ApgoA6QgnA6gRBGQgPA8gDBQQgCAvACBfQABAegeAAQgfAAgBgeg");
	this.shape_1.setTransform(-129.0372,-11.1572);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(200));

	// Layer_6
	this.instance = new lib.Symbol5();
	this.instance.setTransform(80.05,-32.25,1,1,0,0,0,-31.2,37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4,cjs.Ease.quadOut).to({rotation:-10.4949,y:-32.15},5,cjs.Ease.quadOut).wait(5).to({rotation:-10.4949},0).wait(3).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:-10.4949},0).wait(13).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:-10.4949},0).to({rotation:0,y:-32.25},4).to({rotation:39.7068},3).wait(5).to({rotation:-10.4949,y:-32.15},0).wait(5).to({rotation:0,y:-32.25},0).to({rotation:39.7068},4).to({rotation:-10.4949,y:-32.15},5).wait(5).to({rotation:-10.4949},0).to({rotation:0,y:-32.25},8).to({rotation:39.7068},4).wait(5).to({rotation:-10.4949,y:-32.15},0).wait(5).to({rotation:0,y:-32.25},0).wait(4).to({rotation:39.7068},0).to({rotation:-10.4949,y:-32.15},5).to({rotation:-10.4949},5).wait(3).to({rotation:0,y:-32.25},0).wait(4).to({rotation:39.7068},0).to({rotation:-10.4949,y:-32.15},5).to({rotation:0,y:-32.25},5).wait(4).to({rotation:39.7068},0).to({rotation:-10.4949,y:-32.15},5).to({rotation:-10.4949},5).wait(2));

	// Layer_7
	this.instance_1 = new lib.br();
	this.instance_1.setTransform(-17.4,-82.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).wait(12).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).wait(23).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).wait(24).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).wait(13).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).wait(13).to({y:-95.65},9,cjs.Ease.quadOut).to({y:-82.65},9,cjs.Ease.quadOut).to({_off:true},6).wait(1));

	// Layer_8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAKCEQhXgChDgkQgzgbglgtQgbgggQgoIgMgiQgCgIAEgGQAEgHAHgBQAIgCAGAEQAHAEABAIQAEAQAIAQQAPAiAYAcQBLBbCIADQBrACBFhEQAiggARgqQAPgkAAghQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAsgVAuQgVAtgkAjQhNBLh0AAg");
	this.shape_2.setTransform(-14.2308,-11.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(200));

	// Layer_9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgxAyQgVgVAAgdQAAgcAVgWQAVgUAcAAQAeAAAUAUQAVAWAAAcQAAAdgVAVQgUAVgeAAQgcAAgVgVg");
	this.shape_3.setTransform(33.325,-54.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgxAyQgVgVAAgdQAAgcAVgWQAVgUAcAAQAeAAAUAUQAVAWAAAcQAAAdgVAVQgUAVgeAAQgcAAgVgVg");
	this.shape_4.setTransform(-65.875,-54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(200));

	// Layer_10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B9E1EA").s().p("AjwQxQg+g6g4hvQAVAmAkAhQAgAeAeANQAqATA9ABQA4gBAygPQB+gmAHjHQAFiVgziUQgqh6iMhbQg4glgJgLQgQgXAigXQAdgUB2hCQBJgpAhguQBQhvA1ilQA5iuAEipQAFi8hAiGQhIiZiYg+QCoAqBjDAQBaCuAJD0QAGCnhUFIIg7DhQgaBuABAwQAIEOgnDDQg8EvidgBQhqAAhShMg");
	this.shape_5.setTransform(58.5199,-5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkOEQQgthVAShxQAPhdA2hhQAWgnAogpQAtguAugbQCBhsCaAoQBHATATAvQAVAzhCAsQgRALhsAxQhHAggkA0QgiAzgJBeQgJBxgOAlQgfBThNACIgEAAQhJAAgohMg");
	this.shape_6.setTransform(-82.7537,-70.888);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEECED").s().p("AoBSNQiGgDhIguQhkg/g3iqQgihmgIimQgMjegCgPQgGgogehoQgniFgWhOQhWkygLi/QgOj9CKjGQCTjTDqgOQC8gLC2AyICDAmQBFATA0ACQBIADBVgSQAogJBzghQDTg9CdAHQDLAJB5DKQBsC0AKEQQAGCnhUFIIg7DhQgaBuABAwQAIEMgnDFQg8EvieAAQirAAh0jSQgXgqg1h3QgmhWgXgWQhwhuhhgHQhigHhhBhQgvAwguBjQgaA5gxB2QgsBjguAuQg5A6hNAAIgHAAg");
	this.shape_7.setTransform(-18.1988,-5.4061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(200));

	// Layer_11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4167FF").s().p("As5B7QlXgzAAhIQAAhHFXgzQFWgyHjAAQHkAAFXAyQFWAzAABHQAABIlWAzQlWAynlAAQnjAAlWgyg");
	this.shape_8.setTransform(-16.475,104.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-121.9,318.5,243.8);


(lib.toothScene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {byebyeTooth:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_233 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(233).call(this.frame_233).wait(19));

	// Layer_19
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(-0.45,360.15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({y:150.3,alpha:1},9,cjs.Ease.quadOut).to({_off:true},113).wait(19));

	// Layer_18
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(-8.8,63.25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({y:-146.6,alpha:1},9,cjs.Ease.quadOut).to({_off:true},120).wait(19));

	// machine
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(-5.45,-415.15,1.2651,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,y:15},54,cjs.Ease.quadOut).wait(26).to({y:-572.8},15).to({_off:true},105).wait(52));

	// tooth2
	this.instance_3 = new lib.toothcopy();
	this.instance_3.setTransform(12.7,176.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).wait(28).to({y:-411.2},15).wait(157));

	// tooth
	this.instance_4 = new lib.tooth_1();
	this.instance_4.setTransform(12.7,176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},52).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.9,-698.6,378.9,1089.9);


// stage content:
(lib.tooth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root = this;
		this.btnPullOut.addEventListener("click",pullOutF);
		stage.enableMouseOver();
		
		function pullOutF(){
			root.toothScene1.gotoAndPlay("byebyeTooth");
			root.btnPullOut.visible= false;
			//root.btnPullOut.removeEventListener("click",pullOutF);
		
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_20
	this.btnPullOut = new lib.Symbol2();
	this.btnPullOut.name = "btnPullOut";
	this.btnPullOut.setTransform(158,237.95);
	new cjs.ButtonHelper(this.btnPullOut, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPullOut).wait(1));

	// toothScene
	this.toothScene1 = new lib.toothScene();
	this.toothScene1.name = "toothScene1";
	this.toothScene1.setTransform(152.25,271.65);

	this.timeline.addTween(cjs.Tween.get(this.toothScene1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(107.4,30.7,228.9,539.5);
// library properties:
lib.properties = {
	id: '0AE15F7D5C96C54795A280CCFA3CDC3A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#5CABFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0AE15F7D5C96C54795A280CCFA3CDC3A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;