//confluence 5 by MDN
const f=(()=>a.fft[0]/100)
const pi=(()=>Math.random(Math.PI))
const t=(()=>time)
const sh=(s,m,k,o)=>(shape(s).rotate(t,1).kaleid(k).kaleid(k).kaleid(k).scale(0.5,0.5).modulate(m,0.1).out(o))
const flt=(i,o)=>(src(i).repeat(t,1).mult(voronoi(t,t)).kaleid(3).rotate(pi,t).color(pi).scale(f).add(o0,pi).out(o))
const flt1=(i,m,o)=>(src(i).modulate(m).scale(pi).out(o))

sh(3,o1,3,o0)
flt1(o0,o2,o1)
flt(o1,o2)
render(o2)
