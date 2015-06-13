const lessSrc = `.transition(@transition) {
  -webkit-transition: @transition;
-moz-transition: @transition;
-o-transition: @transition;
transition: @transition;
}
.opacity(@opacity) {
  opacity: @opacity / 100;
  filter: ~"alpha(opacity=@{opacity})";
}

a {
.transition(all 0.4s);
&:hover {
  .opacity(70);
  }
}

// Selector interpolation only works in 1.3.1+. Try it!
@theGoodThings: ~".food, .beer, .sleep, .javascript";

@{theGoodThings} {
  font-weight: bold;
}`;

export { lessSrc as default };
