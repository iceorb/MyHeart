(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},22:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(10),s=a.n(c),l=(a(19),a(21),a(22),a(9),a(3)),o=(a(24),a(33));var u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),i=u[0],m=u[1],p=Object(n.useState)(""),_=Object(l.a)(p,2),g=_[0],d=_[1],f=Object(n.useState)(""),b=Object(l.a)(f,2),v=b[0],E=b[1],h=Object(n.useState)(""),N=Object(l.a)(h,2),S=N[0],C=N[1],x=function(){c(""),m(""),d(""),E(""),C("")};return r.a.createElement("div",{className:"glass"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={gender:a,bsc:i,workex:g,etest_p:v,msc:S};o.a.post("http://localhost:8080/prediction",t).then(function(e){var a=e.data.data,n=JSON.stringify(t),r="Prediction: ".concat(a.prediction,"\nInterpretation: ").concat(a.interpretation,"\nParameters: ").concat(n);alert(r),x()}).catch(function(e){return alert("Error: ".concat(e.message))})}(e)},className:"glass__form"},r.a.createElement("h4",null,"Employment Data"),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("input",{id:"gender",className:"glass__form__input",placeholder:"Gender (1 = Male or 0 = Female)",required:!0,autoFocus:!0,min:"0",max:"1",pattern:"[0-9]{0,1}",title:"Gender must either be (1 = Male or 0 = Female)",type:"number",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("input",{id:"bsc",className:"glass__form__input",placeholder:"BSc CGPA (1.00 - 5.00)",required:!0,min:"0",max:"5",type:"number",title:"BSc CGPA must be in the range (1.00 - 5.00)",pattern:"[0-9]+([\\.,][0-9]+)?",step:"0.01",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("input",{id:"workex",className:"glass__form__input",placeholder:"Work Experience (1 = True or 0 = False)",required:!0,min:"0",max:"1",type:"number",title:"Work Experience must either be (1 = True or 0 = False)",value:g,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("input",{id:"etest_p",className:"glass__form__input",placeholder:"E-Test Score (1.00 - 100.00)",required:!0,min:"0",max:"100",type:"number",title:"E-Test score must be in the range (1.00 - 100)",pattern:"[0-9]+([\\.,][0-9]+)?",step:"0.01",value:v,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("input",{id:"msc",className:"glass__form__input",placeholder:"MSc CGPA (1.00 - 5.00)",required:!0,min:"0",max:"5",type:"number",title:"MSc CGPA must be in the range (1.00 - 5.00)",pattern:"[0-9]+([\\.,][0-9]+)?",step:"0.01",value:S,onChange:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"glass__form__group"},r.a.createElement("button",{type:"submit",className:"glass__form__btn"},"Submit"))))};var i=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(u,null))},m=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,32)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null))),m()}},[[11,3,2]]]);
//# sourceMappingURL=main.a214c8f5.chunk.js.map