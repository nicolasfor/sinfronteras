(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KIgB:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("Ychz");a.default=function(){return r.a.createElement("section",{className:"page-section",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"call-us"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("h2",{className:"section-heading text-uppercase"},"Llamanos"),r.a.createElement("h3",{className:"section-subheading text-muted"},"Y te asistiremos lo antes posible"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"clickme-button web_btn",id:"clickme-button","data-key":"paola-galindo"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("h2",{className:"section-heading text-uppercase"},"Ó Contactanos"),r.a.createElement("h3",{className:"section-subheading text-muted"},"Dejanos tus datos para ponernos en contacto."))),r.a.createElement("div",{className:"clearfix"}),r.a.createElement(l.a,null)))}},Ychz:function(e,a,t){"use strict";t("6kNP"),t("8npG");var n=t("kD0k"),r=t.n(n),l=(t("ls82"),t("E5k/"),t("sC2a"),t("Ll4R"),t("pJf4"),t("q1tI")),c=t.n(l);function s(e,a,t,n){return fetch("././mail/contact_me.php",{method:"POST",body:JSON.stringify({name:e,phone:a,email:t,message:n})}).then((function(e){return e.json()}))}var o=t("/MKj"),m=t("qLnp"),i=function(){var e=Object(o.d)((function(e){return e.ui.alert})),a=Object(o.c)(),t=function(){a(Object(m.a)())};return[Object.assign({},e),{dispatchShowAlert:function(e,n){var r=t;a(Object(m.b)({content:e,type:n,handlerEvent:r}))},dispatchHideAlert:t}]};function u(e,a,t,n,r,l,c){try{var s=e[l](c),o=s.value}catch(m){return void t(m)}s.done?a(o):Promise.resolve(o).then(n,r)}a.a=function(){var e=i(),a=(e[0],e[1].dispatchShowAlert),t=Object(l.useState)({name:"",email:"",phone:"",message:"",formErrors:{name:null,email:null,phone:null,message:null}}),n=t[0],o=t[1],m=function(e){var a=e.target.name,t=e.target.value;d(a,t)},d=function(e,a){var t,r=n.formErrors;if(r[e]=0===a.length?" No puede estar vacio":null,!r[e])switch(e){case"email":r.email=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?null:" Email invalido";break;case"phone":a=a.replace(/[^0-9\+]+/g,""),r.phone=a.match(/[0-9]/i)?null:" Teléfono invalido"}o(Object.assign({},n,((t={})[e]=a,t.formErrors=Object.assign({},r),t)))},p=function(){var e,t=(e=r.a.mark((function e(t){var l,c,m,i,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in t.preventDefault(),l=!1,n.formErrors)null!=n.formErrors[c]&&(l=!0);if(l){e.next=15;break}return m=n.name,i=n.email,u=n.phone,d=n.message,e.prev=5,e.next=8,s(m,u,i,d);case 8:a("Enviado Exitosamente"),o({name:"",email:"",phone:"",message:"",formErrors:{name:null,email:null,phone:null,message:null}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),a("No se ha enviado, vuelve a intentar mas tarde","warning");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})),function(){var a=this,t=arguments;return new Promise((function(n,r){var l=e.apply(a,t);function c(e){u(l,n,r,c,s,"next",e)}function s(e){u(l,n,r,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),h=n.name,v=n.email,f=n.phone,E=n.message,g=n.formErrors;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{onSubmit:p},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",name:"name",onChange:m,onBlur:function(){return d("name",h)},type:"text",placeholder:"Tu nombre *",required:"required",value:h}),c.a.createElement("p",{className:"help-block text-danger"},g.name)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",name:"email",onChange:m,onBlur:function(){return d("email",v)},type:"email",placeholder:"Tu correo *",required:"required",value:v}),c.a.createElement("p",{className:"help-block text-danger"},g.email)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",name:"phone",onChange:m,onBlur:function(){return d("phone",f)},type:"tel",placeholder:"Tu teléfono *",required:"required",value:f}),c.a.createElement("p",{className:"help-block text-danger"},g.phone))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{className:"form-control",name:"message",onChange:m,onBlur:function(){return d("message",E)},placeholder:"Tu mensaje *",required:"required",value:E}),c.a.createElement("p",{className:"help-block text-danger"},g.message))),c.a.createElement("div",{className:"clearfix"}),c.a.createElement("div",{className:"col-lg-12 text-center"},c.a.createElement("div",{id:"success"}),c.a.createElement("button",{id:"sendMessageButton",className:"btn btn-primary btn-xl text-uppercase",type:"submit"},"Enviar mensaje"))))))}}}]);
//# sourceMappingURL=component---src-pages-sections-section-contact-js-60dd7b0fa6c589c7325e.js.map