//confluence 7 by MDN
const f=(()=>a.fft[0]/100)
const pi=(()=>Math.random(Math.PI))
const t=(()=>time*Math.random(100))
const sh=(s,m,k,o)=>(shape(s).scale(0.2,0.2).rotate(t,1).kaleid(k).kaleid(k).kaleid(k).scale(0.5,0.5).modulate(m,0.1).out(o))
const flt=(i,o)=>(src(i).repeat(t,1).mult(voronoi(t,t)).kaleid(3).rotate(pi,t).color(pi).scale(f).add(o0,0.1).out(o))
const flt1=(i,m,o)=>(src(i).modulate(m).scale(pi).out(o))

sh(pi,o0,pi,o0)
flt(o3,o1)
flt1(o3,o1,o2)
sh(3,o0,3,o3)
render(o0)
