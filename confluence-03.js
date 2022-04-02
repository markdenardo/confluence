//confluence by MDN

const t=(()=>time)
const sh=(s,m,k,o)=>(shape(s).rotate(t,1).kaleid(k).kaleid(k).kaleid(k).scale(0.5,0.5).modulate(m,0.1).out(o))
const flt=(i,o)=>(src(i).repeat(t,1).mult(voronoi(t,t)).kaleid(3).out(o))

sh(3,o1,3,o0)
flt(o0,o1)
sh(4,o0,3,o2)
sh(4,o1,3,o3)

render(o3)
