(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){},50:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(16),r=n.n(a),i=(n(44),n(4)),s=n(5),l=n(6),j=(n(50),{products:[{_id:"1",name:" Tr\xe0 s\u1eefa tr\xe2n ch\xe2u \u0111\u01b0\u1eddng \u0111en thui",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t2.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",description:"Lo\u1ea1i tr\xe0 \u0111\u1eb7c tr\u01b0ng c\u1ee7a v\xf9ng \u0111\u1ed3i n\xfai A L\xfd \u1edf \u0110\xe0i Loan, v\u1ecb tr\xe0 thanh nh\u1eb9, h\u01a1i ch\xe1t.",price:5e4,brand:"Gongcha",rating:5},{_id:"2",name:" Tr\xe0 s\u1eefa Okinawa Oreo Cream",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t1.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",price:5e4,brand:"Gongcha",description:"V\u1ecb k\u1eb9o b\u01a1 c\u1ee9ng (Toffee) h\xf2a quy\u1ec7n v\u1edbi tr\xe0 s\u1eefa Earl Grey t\u1ea1o n\xean m\xf9i th\u01a1m \u0111\u1eb7c tr\u01b0ng c\u1ee7a Hokkaido.",rating:5},{_id:"3",name:" S\u1eefa t\u01b0\u01a1i \u0111\u01b0\u1eddng \u0111en",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t3.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",price:5e4,brand:"Gongcha",description:"L\xe0 s\u1ef1 k\u1ebft h\u1ee3p truy\u1ec1n th\u1ed1ng gi\u1eefa tr\xe2n ch\xe2u \u0111en dai c\xf9ng v\u1ecb tr\xe0 s\u1eefa tr\xe0 \u0111en. Th\u1ee9c u\u1ed1ng quen thu\u1ed9c v\u1edbi m\u1ecdi l\u1ee9a tu\u1ed5i.",rating:5},{_id:"4",name:" Tr\xe0 s\u1eefa Earl Grey",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t4.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",price:5e4,brand:"Gongcha",description:"Tr\xe0 B\xe1 T\u01b0\u1edbc chi\u1ebft xu\u1ea5t t\u1eeb h\u01b0\u01a1ng th\u1ea3o m\u1ed9c c\u1ee7a qu\u1ea3 Bergamot (lo\u1ea1i qu\u1ea3 lai gi\u1eefa Cam v\xe0 Chanh), c\xf3 v\u1ecb th\u01a1m n\u1ed3ng.",rating:5},{_id:"5",name:" Tr\xe0 s\u1eefa  Alisan v\u1ecb Xo\xe0i",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t5.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",price:5e4,brand:"Gongcha",description:"Tr\xe0 Alisan \u0111\u1eb7c tr\u01b0ng h\xf2a c\xf9ng v\u1ecb Xo\xe0i ng\u1ecdt ng\xe0o.",rating:5},{_id:"9",name:" Tr\xe0 s\u1eefa d\xe2u t\xe2y",category:"Tra",image:"https://sontran2k0.github.io/trasua-reactjs/images/t6.png",tt:"https://sontran2k0.github.io/trasua-reactjs/images/tt.JPG",price:5e4,brand:"Gongcha",description:"S\u1eefa Yakult xay c\xf9ng v\u1edbi h\u01b0\u01a1ng D\xe2u th\u01a1m ng\u1ecdt, cho ra ly \u0111\xe1 xay ngon mi\u1ec7ng v\u1eeba c\xf3 chua, c\xf3 ng\u1ecdt, v\u1eeba t\u1ed1t cho s\u1ee9c kh\u1ecfe, d\xf9ng k\xe8m v\u1edbi Th\u1ea1ch Tr\xe1i c\xe2y.",rating:5}]}),o=n(7),d=n.n(o),h=n(14),u=n(8),b=n.n(u),p=n(15),O=n.n(p),m="CART_ADD_ITEM",x="CART_REMOVE_ITEM",g="CART_SAVE_SHIPPING",v="CART_SAVE_PAYMENT",f=function(e,t){return function(){var n=Object(h.a)(d.a.mark((function n(c,a){var r,i,s,l;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.get("/api/products/"+e);case 3:r=n.sent,i=r.data,c({type:m,payload:{product:i._id,name:i.name,image:i.image,countInStock:i.countInStock,qty:t}}),s=a(),l=s.cart.cartItems,O.a.set("cartItems",JSON.stringify(l)),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}()},y=n(0);var N=function(e){var t=j.products.find((function(t){return t._id===e.match.params.id})),n=e.match.params.id,a=e.location.search?Number(e.location.search.split("=")[1]):1,r=Object(i.b)();return Object(c.useEffect)((function(){n&&r(f(n,a))}),[r,n,a]),Object(y.jsxs)("div",{className:"cart",children:[Object(y.jsx)("div",{className:"cart-list",children:Object(y.jsxs)("ul",{className:"cart-list-container",children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("h3",{children:" Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n"}),Object(y.jsx)("div",{children:"Gi\xe1 ti\u1ec1n"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{className:"cart-image",children:Object(y.jsx)("img",{src:t.image,alt:"product"})}),Object(y.jsxs)("div",{className:"cart-name",children:[Object(y.jsx)("div",{children:Object(y.jsx)(s.b,{to:"/product/"+t._id,children:t.name})}),Object(y.jsxs)("div",{children:["S\u1ed1 l\u01b0\u1ee3ng:",Object(y.jsxs)("select",{value:t.qty,onChange:function(e){return r(f(t._id,e.target.value))},children:[Object(y.jsx)("option",{valu:"1",children:"1"}),Object(y.jsx)("option",{valu:"2",children:"2"}),Object(y.jsx)("option",{valu:"3",children:"3"})]})]})]}),Object(y.jsxs)("div",{className:"cart-price",children:[t.price," VN\u0110"]})]})]})}),Object(y.jsxs)("div",{className:"cart-action",children:[Object(y.jsx)("h3",{children:"T\u1ed5ng c\u1ed9ng (1 m\xf3n) : 50.000 VN\u0110"}),Object(y.jsx)("button",{onClick:function(){e.history.push("/signin?redirect=shipping")},className:"button primary full-width",children:"Thanh To\xe1n"})]})]})},S="PRODUCT_LIST_REQUEST",T="PRODUCT_LIST_SUCCESS",C="PRODUCT_LIST_FAIL",_="PRODUCT_DETAILS_REQUEST",E="PRODUCT_DETAILS_SUCCESS",k="PRODUCT_DETAILS_FAIL",I="PRODUCT_SAVE_REQUEST",w="PRODUCT_SAVE_SUCCESS",G="PRODUCT_SAVE_FAIL";var R=function(e){var t=Object(i.c)((function(e){return e.productList})).loading,n=Object(i.b)();return Object(c.useEffect)((function(){return n(function(){var e=Object(h.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({PRODUCT_LIST_REQUEST:S}),e.next=4,b.a.get("/api/products");case 4:n=e.sent,c=n.data,t({type:T,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:C,payload:e.t0.message});case 12:return e.abrupt("return",{type:"listProducts",payload:j});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),function(){}}),[n]),t?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:"banner",src:"https://sontran2k0.github.io/trasua-reactjs/images/banner.JPG",alt:"logo"}),Object(y.jsx)("ul",{className:"products",children:j.products.map((function(e){return Object(y.jsx)("li",{children:Object(y.jsxs)("div",{className:"product",children:[Object(y.jsx)(s.b,{to:"/product/"+e._id,children:Object(y.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),Object(y.jsx)("div",{className:"product-name",children:Object(y.jsx)(s.b,{to:"/product/"+e._id,children:e.name})}),Object(y.jsx)("div",{className:"product-brand",children:e.brand}),Object(y.jsxs)("div",{className:"product-price",children:[e.price," VND"]}),Object(y.jsxs)("div",{className:"product-rating",children:[e.rating," Sao"]})]})},e._id)}))})]})},U=n(2);var D=function(e){return Object(y.jsxs)("div",{className:"checkout-steps",children:[Object(y.jsx)("div",{className:e.step1?"active":"",children:"\u0110\u0103ng nh\u1eadp"}),Object(y.jsx)("div",{className:e.step2?"active":"",children:"Giao h\xe0ng"}),Object(y.jsx)("div",{className:e.step3?"active":"",children:"Thanh to\xe1n"}),Object(y.jsx)("div",{className:e.step4?"active":"",children:"Order ngay"})]})};var F=function(e){var t=Object(c.useState)(""),n=Object(U.a)(t,2),a=n[0],r=n[1],s=Object(i.b)();return Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{step1:!0,step2:!0,step3:!0}),Object(y.jsx)("div",{className:"form",children:Object(y.jsx)("form",{onSubmit:function(t){var n;t.preventDefault(),s((n={paymentMethod:a},function(e){e({type:v,payload:n})})),e.history.push("placeorder")},children:Object(y.jsxs)("ul",{className:"form-container",children:[Object(y.jsx)("li",{children:Object(y.jsx)("h2",{children:"Thanh to\xe1n"})}),Object(y.jsx)("li",{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"radio",name:"paymentMethod",id:"paymentMethod",value:"Thanh to\xe1n online",onChange:function(e){return r(e.target.value)}}),Object(y.jsx)("label",{for:"paymentMethod",children:"Thanh to\xe1n online"})]})}),Object(y.jsx)("li",{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"radio",name:"paymentMethod",id:"paymentMethod",value:"Tr\u1ea3 ti\u1ec1n m\u1eb7t",onChange:function(e){return r(e.target.value)}}),Object(y.jsx)("label",{for:"paymentMethod",children:"Thanh to\xe1n tr\u1ef1c ti\u1ebfp"})]})}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"submit",className:"button primary",children:"Ti\u1ebfp t\u1ee5c"})})]})})})]})},L=n(37);var P=function(e){var t=Object(i.c)((function(e){return e.cart})),n=t.shipping,c=t.payment;return n.address?c.paymentMethod||e.history.push("/payment"):e.history.push("/shipping"),Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{step1:!0,step2:!0,step3:!0,step4:!0}),Object(y.jsxs)("div",{className:"placeorder",children:[Object(y.jsxs)("div",{className:"placeorder-info",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:"Giao h\xe0ng"}),Object(y.jsxs)("div",{children:[t.shipping.name,", ",t.shipping.phone,",",t.shipping.address,", ",t.shipping.city,",",t.shipping.postalCode,", ",t.shipping.country,","]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:"Thanh to\xe1n"}),Object(y.jsxs)("div",{children:["Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n: ",t.payment.paymentMethod]})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("ul",{className:"cart-list-container",children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("h3",{children:"Gi\u1ecf h\xe0ng"}),Object(y.jsx)("div",{children:"Gi\xe1 ti\u1ec1n"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{className:"cart-image",children:Object(y.jsx)("img",{src:"https://sontran2k0.github.io/trasua-reactjs/images/t2.png",alt:"product"})}),Object(y.jsxs)("div",{className:"cart-name",children:[Object(y.jsx)("div",{children:Object(y.jsx)(s.b,{to:"/product/1",children:"Tr\xe0 s\u1eefa tr\xe2n ch\xe2u"})}),Object(y.jsx)("div",{children:"S\u1ed1 l\u01b0\u1ee3ng: 1"})]}),Object(y.jsx)("div",{className:"cart-price",children:"50.000 VN\u0110"})]})]})})]}),Object(y.jsx)("div",{className:"placeorder-action",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(L.a,{modal:!0,trigger:Object(y.jsx)("button",{className:"button primary full-width",children:"\u0110\u1eb6T H\xc0NG NGAY"}),children:Object(y.jsxs)("div",{className:"form-container2",children:[Object(y.jsx)("h2",{className:"tb",children:"Th\xf4ng b\xe1o"}),Object(y.jsx)("p",{className:"cont",children:"\u0110\u01a1n h\xe0ng c\u1ee7a qu\xfd kh\xe1ch \u0111\xe3 \u0111\u1eb7t th\xe0nh c\xf4ng, ch\xfang t\xf4i s\u1ebd li\xean h\u1ec7 \u0111\u1ec3 x\xe1c nh\u1eadn"}),Object(y.jsx)(s.b,{to:"/",children:Object(y.jsx)("button",{className:"button primary full-width ",children:"OK"})})]})})}),Object(y.jsx)("li",{children:Object(y.jsx)("h3",{children:"T\u1ed5ng thanh to\xe1n"})}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{children:"S\u1ea3n ph\u1ea9m"}),Object(y.jsx)("div",{children:"50.000 VN\u0110"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{children:"Ph\xed ship"}),Object(y.jsx)("div",{children:"10.000 VN\u0110"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{children:"TGTGT"}),Object(y.jsx)("div",{children:"5.000 VN\u0110"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{children:"Th\xe0nh ti\u1ec1n"}),Object(y.jsx)("div",{children:"65.000 VN\u0110"})]})]})})]})]})};var A=function(e){console.log(e.match.params.id);var t=Object(c.useState)(1),n=Object(U.a)(t,1)[0],a=j.products.find((function(t){return t._id===e.match.params.id}));return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"back-to-result",children:Object(y.jsx)(s.b,{to:"/",children:"Tr\u1edf v\u1ec1 trang s\u1ea3n ph\u1ea9m"})}),Object(y.jsxs)("div",{className:"details",children:[Object(y.jsx)("div",{className:"details-image",children:Object(y.jsx)("img",{src:a.image,alt:"product"})}),Object(y.jsx)("div",{className:"details-info",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("h4",{children:a.name})}),Object(y.jsxs)("li",{children:[a.rating," Sao"]}),Object(y.jsx)("li",{children:Object(y.jsxs)("b",{children:[a.price," VN\u0110"]})}),Object(y.jsxs)("li",{children:["M\xf4 t\u1ea3:",Object(y.jsxs)("div",{children:[a.description,Object(y.jsx)("img",{src:a.tt,alt:"product"})]})]})]})}),Object(y.jsx)("div",{className:"details-action",children:Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Gi\xe1 ti\u1ec1n: ",a.price," VN\u0110"]}),Object(y.jsxs)("li",{children:["Tr\u1ea1ng th\xe1i: ",a.status]}),Object(y.jsxs)("li",{children:["Size:",Object(y.jsxs)("select",{children:[Object(y.jsx)("option",{children:"M"}),Object(y.jsx)("option",{children:"L"}),Object(y.jsx)("option",{children:"XL"})]})]}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+n)},className:"button",children:"Th\xeam v\xe0o t\xfai"})})]})})]})]})};var V=function(e){var t=Object(c.useState)(!1),n=Object(U.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),l=Object(U.a)(s,2),j=l[0],o=l[1],u=Object(c.useState)(""),p=Object(U.a)(u,2),O=p[0],m=p[1],x=Object(c.useState)(""),g=Object(U.a)(x,2),v=g[0],f=g[1],N=Object(c.useState)(""),S=Object(U.a)(N,2),T=S[0],C=S[1],_=Object(c.useState)(""),E=Object(U.a)(_,2),k=E[0],R=E[1],D=Object(c.useState)(""),F=Object(U.a)(D,2),L=F[0],P=F[1],A=Object(c.useState)(""),V=Object(U.a)(A,2),M=V[0],q=V[1],J=Object(c.useState)(""),Q=Object(U.a)(J,2),X=Q[0],B=Q[1],H=Object(c.useState)(!1),z=Object(U.a)(H,2),Y=z[0],K=z[1],W=Object(i.c)((function(e){return e.productList})).products,Z=Object(i.c)((function(e){return e.productSave})),$=Z.loading,ee=Z.success,te=Z.error,ne=Object(i.b)();Object(c.useEffect)((function(){return ee&&r(!1),function(){}}),[ee,ne]);var ce=function(e){r(!0),o(e._id),m(e.name),f(e.price),B(e.description),C(e.image),R(e.brand),P(e.category),q(e.tt)},ae=function(e){var t=e.target.files[0],n=new FormData;n.append("image",t),K(!0),b.a.post("/api/uploads",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){C(e.data),K(!1)})).catch((function(e){console.log(e),K(!1)}))};return Object(y.jsxs)("div",{className:"content content-margined",children:[Object(y.jsxs)("div",{className:"product-header",children:[Object(y.jsx)("h3",{children:"Nh\u1eefng s\u1ea3n ph\u1ea9m"}),Object(y.jsx)("button",{className:"button primary",onClick:function(){return ce({})},children:"T\u1ea1o m\u1edbi"})]}),a&&Object(y.jsx)("div",{className:"form",children:Object(y.jsx)("form",{onSubmit:function(e){var t;e.preventDefault(),ne((t={_id:j,name:O,price:v,image:T,brand:k,category:L,tt:M,description:X},function(){var e=Object(h.a)(d.a.mark((function e(n,c){var a,r,i,s,l,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n({type:I,payload:t}),a=c(),r=a.userSignin.userInfo,t._id){e.next=11;break}return e.next=6,b.a.post("/api/products",t,{headers:{Authorization:"son "+r.token}});case 6:i=e.sent,s=i.data,n({type:w,payload:s}),e.next=16;break;case 11:return e.next=13,b.a.put("/api/products/"+t._id,t,{headers:{Authorization:"son "+r.token}});case 13:l=e.sent,j=l.data,n({type:w,payload:j});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),n({type:G,payload:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:Object(y.jsxs)("ul",{className:"form-container",children:[Object(y.jsx)("li",{children:Object(y.jsx)("h2",{children:"T\u1ea1o s\u1ea3n ph\u1ea9m"})}),Object(y.jsxs)("li",{children:[$&&Object(y.jsx)("div",{children:"Loading..."}),te&&Object(y.jsx)("div",{children:te})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(y.jsx)("input",{type:"text",name:"name",value:O,id:"name",onChange:function(e){return m(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"price",children:"Gi\xe1 ti\u1ec1n"}),Object(y.jsx)("input",{type:"text",name:"price",value:v,id:"price",onChange:function(e){return f(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"image",children:"H\xecnh \u1ea3nh"}),Object(y.jsx)("input",{type:"text",name:"image",value:T,id:"image",onChange:function(e){return C(e.target.value)}}),Object(y.jsx)("input",{type:"file",onChange:ae}),Y&&Object(y.jsx)("div",{children:"Uploading..."})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"image",children:"Th\xf4ng tin"}),Object(y.jsx)("input",{type:"text",name:"image",value:M,id:"image",onChange:function(e){return C(e.target.value)}}),Object(y.jsx)("input",{type:"file",onChange:ae}),Y&&Object(y.jsx)("div",{children:"Uploading..."})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"brand",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(y.jsx)("input",{type:"text",name:"brand",value:k,id:"brand",onChange:function(e){return R(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"Danh m\u1ee5c"}),Object(y.jsx)("input",{type:"text",name:"category",value:L,id:"category",onChange:function(e){return P(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"description",children:"M\xf4 t\u1ea3"}),Object(y.jsx)("textarea",{name:"description",value:X,id:"description",onChange:function(e){return B(e.target.value)}})]}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"submit",className:"button primary",children:j?"Update":"Create"})}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"button",onClick:function(){return r(!1)},className:"button secondary",children:"Tr\u1edf v\u1ec1"})})]})})}),Object(y.jsx)("div",{className:"product-list",children:Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"ID"}),Object(y.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(y.jsx)("th",{children:"Gi\xe1 ti\u1ec1n"}),Object(y.jsx)("th",{children:"Danh m\u1ee5c"}),Object(y.jsx)("th",{children:"Nh\xe3n hi\u1ec7u"}),Object(y.jsx)("th",{children:"T\u01b0\u01a1ng t\xe1c"})]})}),Object(y.jsx)("tbody",{children:W.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e._id}),Object(y.jsx)("td",{children:e.name}),Object(y.jsx)("td",{children:e.price}),Object(y.jsx)("td",{children:e.category}),Object(y.jsx)("td",{children:e.brand}),Object(y.jsxs)("td",{children:[Object(y.jsx)("button",{className:"button",onClick:function(){return ce(e)},children:"Ch\u1ec9nh s\u1eefa"})," ",Object(y.jsx)("button",{className:"button",children:"X\xf3a"})]})]},e._id)}))})]})})]})},M="USER_SIGNIN_REQUEST",q="USER_SIGNIN_SUCCESS",J="USER_SIGNIN_FAIL",Q="USER_REGISTER_REQUEST",X="USER_REGISTER_SUCCESS",B="USER_REGISTER_FAIL";var H=function(e){var t=Object(c.useState)(""),n=Object(U.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(""),j=Object(U.a)(l,2),o=j[0],u=j[1],p=Object(c.useState)(""),m=Object(U.a)(p,2),x=m[0],g=m[1],v=Object(c.useState)(""),f=Object(U.a)(v,2),N=(f[0],f[1]),S=Object(i.c)((function(e){return e.userRegister})),T=S.loading,C=S.userInfo,_=S.error,E=e.location.search?e.location.search.split("=")[1]:"/",k=Object(i.b)();return Object(c.useEffect)((function(){return C&&e.history.push(E),function(){}}),[e.history,E,C]),Object(y.jsx)("div",{className:"form",children:Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),k(function(e,t,n){return function(){var c=Object(h.a)(d.a.mark((function c(a){var r,i;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a({type:Q,payload:{name:e,email:t,password:n}}),c.prev=1,c.next=4,b.a.post("/api/users/register/",{name:e,email:t,password:n});case 4:r=c.sent,i=r.data,a({type:X,payload:i}),O.a.set("userInfo",JSON.stringify(i)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),a({type:B,payload:c.t0.message});case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}(a,o,x))},children:Object(y.jsxs)("ul",{className:"form-container",children:[Object(y.jsx)("li",{children:Object(y.jsx)("h2",{children:"T\u1ea1o t\xe0i kho\u1ea3n"})}),Object(y.jsxs)("li",{children:[T&&Object(y.jsx)("div",{children:" Loading..."}),_&&Object(y.jsxs)("div",{children:[" ",_]})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"T\xean c\u1ee7a b\u1ea1n"}),Object(y.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return r(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email"}),Object(y.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return u(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return g(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"repassword",children:"Nh\u1eadp l\u1ea1i Password"}),Object(y.jsx)("input",{type:"password",id:"repassword",name:"repassword",onChange:function(e){return N(e.target.value)}})]}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"submit",className:"button primary",children:"\u0110\u0103ng nh\u1eadp"})}),Object(y.jsxs)("li",{children:["B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n ? ",Object(y.jsx)(s.b,{to:"/"===E?"signin":"signin?redirect="+E,children:"\u0110\u0103ng nh\u1eadp"})]})]})})})};var z=function(e){var t=Object(c.useState)(""),n=Object(U.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),l=Object(U.a)(s,2),j=l[0],o=l[1],d=Object(c.useState)(""),h=Object(U.a)(d,2),u=h[0],b=h[1],p=Object(c.useState)(""),O=Object(U.a)(p,2),m=O[0],x=O[1],v=Object(c.useState)(""),f=Object(U.a)(v,2),N=f[0],S=f[1],T=Object(c.useState)(""),C=Object(U.a)(T,2),_=C[0],E=C[1],k=Object(i.b)();return Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{step1:!0,step2:!0}),Object(y.jsx)("div",{className:"form",children:Object(y.jsx)("form",{onSubmit:function(t){var n;t.preventDefault(),k((n={address:a,city:j,postalCode:u,country:m,name:N,phone:_},function(e){e({type:g,payload:n})})),e.history.push("payment")},children:Object(y.jsxs)("ul",{className:"form-container",children:[Object(y.jsx)("li",{children:Object(y.jsx)("h2",{children:"Giao h\xe0ng"})}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"T\xean kh\xe1ch h\xe0ng"}),Object(y.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return S(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(y.jsx)("input",{type:"phone",name:"phone",id:"phone",onChange:function(e){return E(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"address",children:"\u0110\u1ecba ch\u1ec9"}),Object(y.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return r(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"city",children:"Th\xe0nh ph\u1ed1"}),Object(y.jsx)("input",{type:"text",name:"city",id:"city",onChange:function(e){return o(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),Object(y.jsx)("input",{type:"text",name:"postalCode",id:"postalCode",onChange:function(e){return b(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"country",children:"Country"}),Object(y.jsx)("input",{type:"text",name:"country",id:"country",onChange:function(e){return x(e.target.value)}})]}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{type:"submit",className:"button primary",children:"Ti\u1ebfp t\u1ee5c"})})]})})})]})};var Y=function(e){var t=Object(c.useState)(""),n=Object(U.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(""),j=Object(U.a)(l,2),o=j[0],u=j[1],p=Object(i.c)((function(e){return e.userSignin})),m=p.loading,x=p.userInfo,g=p.error,v=e.location.search?e.location.search.split("=")[1]:"/",f=Object(i.b)();return Object(c.useEffect)((function(){return x&&e.history.push("/"),function(){}}),[e.history,x]),Object(y.jsx)("div",{className:"form",children:Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(h.a)(d.a.mark((function n(c){var a,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:M,payload:{email:e,password:t}}),n.prev=1,n.next=4,b.a.post("/api/users/signin/",{email:e,password:t});case 4:a=n.sent,r=a.data,c({type:q,payload:r}),O.a.set("userInfo",JSON.stringify(r)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),c({type:J,payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(a,o))},children:Object(y.jsxs)("ul",{className:"form-container",children:[Object(y.jsx)("li",{children:Object(y.jsx)("h2",{children:"\u0110\u0103ng nh\u1eadp"})}),Object(y.jsxs)("li",{children:[m&&Object(y.jsx)("div",{children:" Loading..."}),g&&Object(y.jsxs)("div",{children:[" ",g]})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email"}),Object(y.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return r(e.target.value)}})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return u(e.target.value)}})]}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/shipping",children:Object(y.jsx)("button",{type:"submit",className:"button primary full-width",children:"\u0110\u0103ng nh\u1eadp"})})}),Object(y.jsx)("li",{children:"Ch\xe0o b\u1ea1n m\u1edbi ?"}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/"===v?"register":"register?redirect="+v,className:"button secondary text-center",children:"T\u1ea1o t\xe0i kho\u1ea3n m\u1edbi"})})]})})})};var K=function(){var e=Object(i.c)((function(e){return e.userSignin})).userInfo;return Object(y.jsx)(s.a,{children:Object(y.jsxs)("div",{className:"grid-container",children:[Object(y.jsxs)("header",{className:"header",children:[Object(y.jsxs)("div",{className:"brand",children:[Object(y.jsx)("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")},children:"\u2630"}),Object(y.jsx)(s.b,{to:"/",children:" Tr\xe0 s\u1eefa qu\xe1n "})]}),Object(y.jsx)("div",{children:Object(y.jsx)("img",{className:"logo",src:"./images/logo3.png",alt:"logo"})}),Object(y.jsxs)("div",{className:"header-links",children:[Object(y.jsx)(s.b,{to:"/cart/2?qty=1",children:"Gi\u1ecf h\xe0ng  "}),e?Object(y.jsx)(s.b,{to:"/profile",children:e.name}):Object(y.jsx)(s.b,{to:"/signin",children:"\u0110\u0103ng nh\u1eadp"})]})]}),Object(y.jsxs)("aside",{className:"sidebar",children:[Object(y.jsx)("h3",{children:"C\xe1c danh m\u1ee5c tr\xe0 s\u1eefa"}),Object(y.jsx)("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")},children:"x"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/",children:" Tr\xe0 s\u1eefa latte"})}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/",children:" Tr\xe0 s\u1eefa \u0111\u1eb7t bi\u1ec7t"})}),Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/",children:" C\xe1c lo\u1ea1i \u0111\xe1 xay"})})]})]}),Object(y.jsx)("main",{className:"main",children:Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)(l.a,{path:"/signin",component:Y}),Object(y.jsx)(l.a,{path:"/shipping",component:z}),Object(y.jsx)(l.a,{path:"/payment",component:F}),Object(y.jsx)(l.a,{path:"/placeorder",component:P}),Object(y.jsx)(l.a,{path:"/products",component:V}),Object(y.jsx)(l.a,{path:"/register",component:H}),Object(y.jsx)(l.a,{path:"/product/:id",component:A}),Object(y.jsx)(l.a,{path:"/cart/:id?",component:N}),Object(y.jsx)(l.a,{path:"/",exact:!0,component:R})]})}),Object(y.jsx)("footer",{className:"footer",children:"Giao h\xe0ng t\u1eadn n\u01a1i.Hi"})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},Z=n(20),$=n(38),ee=n(21),te=n(39);var ne=Object(Z.b)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0,products:[]};case T:return{loading:!1,products:t.payload};case C:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case E:return{loading:!1,product:t.payload};case k:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shipping:{},payment:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=t.payload,c=e.cartItems.find((function(e){return e.product===n.product}));return c?{cartItems:e.cartItems.find.map((function(e){return e.product===c.product?n:e}))}:{cartItems:[].concat(Object(te.a)(e.cartItems),[n])};case x:return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};case g:return Object(ee.a)(Object(ee.a)({},e),{},{shipping:t.payload});case v:return Object(ee.a)(Object(ee.a)({},e),{},{payment:t.payload});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case q:return{loading:!1,userInfo:t.payload};case J:return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return{loading:!0};case X:return{loading:!1,userInfo:t.payload};case B:return{loading:!1,error:t.payload};default:return e}},productSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case w:return{loading:!1,success:!0,product:t.payload};case G:return{loading:!1,error:t.payload};default:return e}}}),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,ae=Object(Z.d)(ne,{cart:{shipping:{},payment:{}}},ce(Object(Z.a)($.a)));r.a.render(Object(y.jsx)(i.a,{store:ae,children:Object(y.jsx)(K,{})}),document.getElementById("root")),W()}},[[76,1,2]]]);
//# sourceMappingURL=main.6131ad35.chunk.js.map