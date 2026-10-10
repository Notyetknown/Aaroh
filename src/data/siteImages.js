const u=(id)=>`https://images.unsplash.com/${id}?q=80&w=2070&auto=format&fit=crop`
// Replace src with "/images/your-file.jpg" (files in public/images) or any HTTPS URL.
export const siteImages={
 hero:[
  {src:u('photo-1464822759023-fed622ff2c3b'),alt:'Mountain landscape representing collective progress',position:'center'},
  {src:u('photo-1441974231531-c6227db76b6e'),alt:'Sunlit forest canopy',position:'center'},
  {src:u('photo-1500382017468-9049fed747ef'),alt:'Green fields under open sky',position:'center'},
  {src:u('photo-1469474968028-56623f02e42e'),alt:'Valley landscape at sunrise',position:'center'}],
 grassroots:[
  {src:u('photo-1488521787991-ed7bbaae773c'),alt:'Community development',caption:'Progress begins with people',position:'center'},
  {src:u('photo-1542601906990-b4d3fb778b09'),alt:'Environmental stewardship',caption:'A healthier environment',position:'center'},
  {src:u('photo-1503676260728-1c00da094a0b'),alt:'Learning and community collaboration',caption:'Knowledge creates opportunity',position:'center'}]}
