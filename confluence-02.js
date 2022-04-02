
   
//confluence by MDN

const t=(()=>time)
const sh=(s,m,k,o)=>(shape(s).rotate(t,1).kaleid(k).kaleid(k).kaleid(k).scale([0.75],[0.75]).modulate(m,0.7).out(o))
const flt=(i,n,o)=>(src(i).repeat(t,1).mult(voronoi(t,10)).pixelate(n,()=>time).kaleid(n).rotate(()=>time,0.1).out(o))

sh(3,o1,3,o0)
flt(o0,3,o1)
sh(3,o1,()=>Math.random(10),o2)
sh(4,o1,3,o3)
flt(o2,8,o3)
render(o2)
