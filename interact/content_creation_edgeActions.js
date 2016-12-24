/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
(function(symbolName) {









      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_START3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("CloudStart");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PUNCH}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("punch");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RUN2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("run");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_JUMP2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("jump");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CloudAnim'
   (function(symbolName) {   
   
   })("CloudAnim");
   //Edge symbol end:'CloudAnim'

   //=========================================================
   
   //Edge symbol: 'START'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_StartText}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("StartClick");
         sym.play("Cloud");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("START");
   //Edge symbol end:'START'

   //=========================================================
   
   //Edge symbol: 'WALK'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PunchText}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("StartClick")

      });
      //Edge binding end

   })("WALK");
   //Edge symbol end:'WALK'

   //=========================================================
   
   //Edge symbol: 'RUN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RunText}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("StartClick")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("RUN");
   //Edge symbol end:'RUN'

   //=========================================================
   
   //Edge symbol: 'JUMP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_JumpText}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("StartClick");

      });
      //Edge binding end

   })("JUMP");
   //Edge symbol end:'JUMP'

   //=========================================================
   
   //Edge symbol: 'Davis'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play("WalkStart");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         // insert code here
         sym.play("punch");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Davis");
   //Edge symbol end:'Davis'

   //=========================================================
   
   //Edge symbol: 'jump'
   (function(symbolName) {   
   
   })("jump");
   //Edge symbol end:'jump'

   //=========================================================
   
   //Edge symbol: 'Punch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         
         sym.play("punch");

      });
      //Edge binding end

   })("Punch");
   //Edge symbol end:'Punch'

})(jQuery, AdobeEdge, "EDGE-455333329");