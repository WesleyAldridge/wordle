(this.webpackJsonpwordle=this.webpackJsonpwordle||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),i=a(4),l=a(3),u=a(0),c=a.n(u),o=a(6),d=a.n(o);a(14);function h(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("button",{id:"reset-button",onClick:function(){return e.props.onClick()}},"Reset Board")}}]),a}(c.a.Component),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0,gameOver:!1,winner:null},r}return Object(s.a)(a,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(h,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"renderResetButton",value:function(){var e=this;return c.a.createElement(v,{onClick:function(){e.resetBoard()}})}},{key:"winner",value:function(e){var t=!1,a=this.state.squares.slice();a[e]=this.state.xIsNext?"X":"O";for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<n.length;s++){var i=Object(r.a)(n[s],3),l=i[0],u=i[1],c=i[2];a[l]&&a[l]===a[u]&&a[u]===a[c]&&(console.log("X"),t=!0)}return t?[!0,this.state.xIsNext?"X":"O"]:[!1,"X"]}},{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(null==t[e]){t[e]=this.state.xIsNext?"X":"O";var a=this.winner(e);console.log("winner[0,1]: "+String(a[0])+" "+String(a[1])),this.setState({xIsNext:!this.state.xIsNext,squares:t,gameOver:a[0],winner:a[0]?a[1]:null})}}},{key:"resetBoard",value:function(){for(var e=this.state.squares.slice(),t=0;t<e.length;t++)e[t]=null;this.setState({xIsNext:!0,squares:e,gameOver:!1,winner:null})}},{key:"render",value:function(){var e="Next player: "+(this.state.xIsNext?"X":"O"),t=this.state.gameOver?"Winner is: "+this.state.winner+"!!!!":"";return c.a.createElement("div",null,c.a.createElement("div",{className:"status"},e),c.a.createElement("div",{className:"status"},t),c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),this.renderResetButton())}}]),a}(c.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(m,null)),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null),c.a.createElement("ol",null)))}}]),a}(c.a.Component);d.a.render(c.a.createElement(f,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.a7f2600f.chunk.js.map