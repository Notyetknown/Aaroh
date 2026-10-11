const u=(id)=>`https://images.unsplash.com/${id}?q=80&w=2070&auto=format&fit=crop`
// Replace src with "/images/your-file.jpg" (files in public/images) or any HTTPS URL.
export const siteImages={
 hero:[
  {src:u('photo-1464822759023-fed622ff2c3b'),alt:'Mountain landscape representing collective progress',position:'center'},
  {src:u('photo-1441974231531-c6227db76b6e'),alt:'Sunlit forest canopy',position:'center'},
  {src:u('photo-1500382017468-9049fed747ef'),alt:'Green fields under open sky',position:'center'},
  {src:u('photo-1469474968028-56623f02e42e'),alt:'Valley landscape at sunrise',position:'center'}],
 grassroots:[
  {src:u('photo-1504307651254-35680f356dfd'),alt:'Construction workers building together on an active community worksite',caption:'Building stronger communities together',position:'center'},
  {src:u('photo-1542601906990-b4d3fb778b09'),alt:'Hands planting a young seedling in rich soil',caption:'Caring for the environment, one seed at a time',position:'center'},
  {src:u('photo-1593113598332-cd288d649433'),alt:'Community volunteers working together to distribute food supplies',caption:'Neighbors showing up for one another',position:'center'}]}
