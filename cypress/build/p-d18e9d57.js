const w=/^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/,r=/\S/,s=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,a=/^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/,e=r=>{if(r&&!w.test(r))return!0},n=w=>{if(w&&!s.test(w))return!0},t=w=>r.test(w),$=w=>a.test(w);export{$ as d,e,n,t as w}